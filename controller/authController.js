const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const Auth = require('../model/authModel');
const { createAccToken, createRefToken } = require('../util/token')
const Order = require('../model/orderModel')
const sendMail = require('../middleware/NodeMailer')
const Otp = require('../model/otpModel');
const { response } = require('express');


const authController = {
    register: async (req, res) => {
        try {
            const { name, email, mobile, password } = req.body;
            const passHash = await bcrypt.hash(password, 10)
            // res.json("register called")
            const newUser = await Auth({
                name,
                email,
                mobile,
                password: passHash
            })
            // res.json({
            //     data: newUser
            // })
            await newUser.save()

            let subject = "Food Bang - New User Registration";
            let content = `<div>
            <h1>Hello, ${name} Welcome to Food Bang Application.</h1>
            <h5>Your mail Id is = ${email} is successfully Registered with Food-Bang.. your Password is = ${password} </h5>
            <p>Enjoy our services with Food-Bang Team..</p>
            </div>`;

            let mailResp = sendMail(email, subject, content);

            res
                .status(200)
                .json({ msg: "User registered successfully", output: mailResp });
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body;

            const extUser = await Auth.findOne({ email })
            if (!extUser)
                return res.status(400).json({ msg: "User doesn`t exists." })
            const isMatch = await bcrypt.compare(password, extUser.password);
            if (!isMatch)
                return res.status(400).json({ msg: "password doesn`t match" })
            // res.json({data: extUser})
            const accessToken = createAccToken({ id: extUser._id })
            const refreshToken = createRefToken({ id: extUser._id })

            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                signed: true,
                path: `/api/v1/auth/refreshToken`,
                maxAge: 1 * 24 * 60 * 60 * 1000
            })

            res.json({ accessToken })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    logout: async (req, res) => {
        try {
            // res.json("logout called")
            res.clearCookie('refreshToken', { path: `/api/v1/auth/refreshToken` })
            return res.status(200).json({ msg: "Successfully loged out" })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    refreshToken: async (req, res) => {
        try {
            // res.json("refresh token called")
            const ref = req.signedCookies.refreshToken;
            // res.json({ ref })
            if (!ref)
                return res.status(400).json({ msg: "Session Expired...Login Again" })
            jwt.verify(ref, process.env.REF_TOKEN_SECRET, (err, user) => {
                if (err)
                    return res.status(400).json({ msg: "Invalid Auth... Login Again..." })
                const accessToken = createAccToken({ id: user.id })
                res.json({ accessToken })
            })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    sendMail: async (req, res) => {
        try {
            let { email, code } = req.body;
            let extUser = await Auth.findOne({ email })
            const responseType = {}
            if (!extUser)
                return res.status(400).json({ msg: "user doesn`t exist" })
            let otpCode = Math.floor((Math.random() * 10000) + 1)
            let otpData = new Otp({
                email: req.body.email,
                code: otpCode,
                expireIn: new Date().getTime() + 300 * 1000
            })
            let otpResponse = await otpData.save();
            let subject = "Your Password Reset";
            let content = `<div>
                        <h1>Hello, ${email} Welcome to Food Bang Application.</h1>
                        <h3>Your Password change OTP is,${otpData.code} </h3>
                        <h4>Enjoy our services with Food-Bang Team..
                        </h4>
                        
                        </div>`;
            let mailResp = sendMail(email, subject, content, otpData);
            responseType.statusText = 'Success'
            responseType.message = "Please Check your mail"
            res.status(200).json({ msg: responseType, output: mailResp });
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    resetPassword: async (req, res) => {
        let data = await Otp.findOne({ email: req.body.email, code: req.body.otpCode });
        if (data) {
            let currentTime = new Date().getTime();
            let diff = data.expireIn - currentTime;
            if (diff < 0) {
                res.status(400).json({ msg: "Token Expired" })
            } else {
                let { password } = req.body;
                let newPass = await bcrypt.hash(password, 10);
                let user = await Auth.findOne({ email: req.body.email })
                password = newPass,
                    await user.save();
                res.status(200).json({ msg: "password updated successfully." });
            }
        } else {
            res.status(400).json({ msg: "Invalid OTP." });
        }

    },
    getUserInfo: async (req, res) => {
        try {
            // res.json({ data: req.user })
            const data = await Auth.findById({ _id: req.user.id }).select('-password')
            res.json({
                user: data
            })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getAllUsers: async (req, res) => {
        try {
            let data = await Auth.find().select("-password");

            const filterUsers = data.filter(item => item.role !== "superadmin")

            res.json({ user: filterUsers, length: filterUsers.length })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    addToCart: async (req, res) => {
        try {
            const user = await Auth.findById({ _id: req.user.id })
            if (!user)
                return res.status(400).json({ msg: "User doesn't exists" })

            await Auth.findOneAndUpdate({ _id: req.user.id }, {
                cart: req.body.cart
            })
            return res.status(200).json({ msg: "" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getOrders: async (req, res) => {
        try {
            const orders = await Order.find({ userId: req.user.id })
            return res.status(200).json({
                orders: orders,
                length: orders.length
            })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    saveOrder: async (req, res) => {
        try {
            const user = await Auth.findById({ _id: req.user.id })
            if (!user)
                return res.status(400).json({ msg: "User doesn't exists" })

            await Auth.findOneAndUpdate({ _id: req.user.id }, {
                orders: req.body.order
            });

            return res.status(200).json({ msg: "Order added to cart" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    profileUpdate: async (req, res) => {
        try {
            let id = req.params.id;
            let { name, image, email, mobile } = req.body;
            await Auth.findByIdAndUpdate({ _id: id }, {
                name,
                image,
                email,
                mobile
            })
            return res.status(200).json({ msg: "User profile updated" })
            // res.json(req.body)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    }
}

module.exports = authController
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose');

const helmet = require("helmet")
require('dotenv').config()
require('express-async-error')
const fileUpload = require("express-fileupload")
const { createProxyMiddleware } = require('http-proxy-middleware')
//Express
const app = express()
const path = require('path')
const cloudinary = require('cloudinary')

//route

const authRouter = require('./Router/authRoute')
const imageRouter = require('./Router/imageRoute')
const productRouter = require('./Router/productRoute')
const categoryRouter = require('./Router/categoryRoute')
const orderRouter = require('./Router/orderRoute')


//configuration

app.use(cors())
app.use(cookieParser(process.env.REF_TOKEN_SECRET))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(helmet())
app.use(fileUpload({
    useTempFiles: true
}))

// app.use('/api/v1', createProxyMiddleware({ target: 'http://localhost:5000', changeOrigin: false }));

app.use(`/api/v1/auth`, authRouter)
app.use(`/api/v1/image`, imageRouter)
app.use(`/api/v1/product`, productRouter)
app.use(`/api/v1/category`, categoryRouter)
app.use(`/api/v1/order`, orderRouter)


const PORT = process.env.PORT || 5000

const connectDb = require('./db')


//---------Deployment-------//


if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "staging") {
    app.use(express.static('client/build'));
    app.use("*", (req, res) => {
        res.sendFile(path.join(__dirname + `/client/build/index.html`))
    })
}

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


const start = async () => {
    try {
        await connectDb(process.env.MONGO_URL)
        app.listen(PORT, () => {
            console.log(`server is listening on port http://localhost:${PORT}`);
        })
    } catch (err) {
        throw err
    }
}

start();


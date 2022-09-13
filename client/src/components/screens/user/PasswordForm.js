import React, { useRef, useState } from 'react';
import { Grid, IconButton, Stack, Container, Box, Avatar, Typography } from '@mui/material';
import { Colors, CommSeparator } from '../../../styles/theme';
import { CommonHeader } from '../../../styles/about';
import { LoginPaper, StyledTextField } from '../../../styles/login';
import useInput from '../../../hooks/use-input';
import Button from '@mui/material/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PasswordForm(props) {

    const navigate = useNavigate();

    const [otpForm, setOtpForm] = useState(true)
    const [inputField, setInputField] = useState({
        password: '',
        otpCode: '',
        cpassword: ''
    })

    const [validations, setValidations] = useState({
        password: '',
        cpassword: '',

    })

    const validateAll = () => {
        const { password, cpassword } = inputField
        const validations = { password: '', cpassword: '' }
        let isValid = true


        if (!password) {
            validations.password = 'Password is required'
            isValid = false
        }

        if (password && !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
            validations.password = 'Minimum eight characters, at least one letter and one number'
            isValid = false
        }

        if (!cpassword) {
            validations.cpassword = 'Confirm Password is required'
            isValid = false
        }

        if (password && !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(cpassword)) {
            validations.cpassword = 'Minimum eight characters, at least one letter and one number'
            isValid = false
        }

        if (!isValid) {
            setValidations(validations)
        }
        return isValid
    }

    const validateOne = (e) => {
        const { name } = e.target
        const value = inputField[name]
        let message = ''

        if ((value && name === 'password' && !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value))) {
            message = 'Minimum eight characters, at least one letter and one number'

        }
        if ((value && name === 'cpassword' && inputField.cpassword !== inputField.password)) {
            message = 'Password is not matching'

        }
        setValidations({ ...validations, [name]: message })
    }

    const inputHandler = (e) => {
        setInputField({ ...inputField, [e.target.name]: e.target.value })
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        const isValid = validateAll()

        if (!isValid) {
            return false
        }

        Object.assign(inputField, props)

        const user = {
            password: inputField.password,
            cpassword: inputField.cpassword
        }

        if ( user.password === user.cpassword) {
            try {
                let url = 'http://localhost:5000/api/v1/auth/resetPassword'
                let options = {
                    method: 'PATCH',
                    url: url,
                    data: inputField
                }
                await axios(options).then(res => {
                    setOtpForm(false)
                    toast.success('Password has been changed successfully');
                    navigate("/login")
                }).catch(err => toast.error(err.response.data.msg))
            } catch (err) {
                toast.error(err.response.data.msg)
            }
        }
    }

    const { password, cpassword } = inputField

    const {
        password: passwordVal,
        cpassword: cpasswordVal,

    } = validations

    return (
        <Stack>
            <Container>
                <LoginPaper elevation={10}>
                    <Box component="form" autoComplete='on' noValidate id='otpForm'>
                        <Grid item align="center">
                            <Avatar sx={{ bgcolor: Colors.secondary, marginBottom: "10px" }} display="" src='https://res.cloudinary.com/dkz3uzlnp/image/upload/v1662530612/food-bang/18-autorenew-outline_upbalo.gif'></Avatar>
                            <Typography style={{ marginBottom: "0px", fontFamily: "Bai Jamjuree", fontSize: "24px", fontWeight: "bold" }}>Reset Your Password</Typography>
                        </Grid>


                        <StyledTextField type="text" label="Enter Your OTP" name='otpCode' value={inputField.otpCode} id="otp" onChange={inputHandler} variant='standard' fullWidth required sx={{ marginBottom: "10px" }} InputLabelProps={{
                            style: { color: Colors.black }
                        }} />

                        <StyledTextField label="Password" id="password" value={inputField.password} onChange={inputHandler} name="password" variant='standard' onBlur={validateOne} type="password" fullWidth required sx={{ marginBottom: "20px" }} InputLabelProps={{
                            style: { color: Colors.black }
                        }} helperText={passwordVal} />

                        <StyledTextField label="Confirm Your Password" id="cpassword" value={inputField.cpassword} onChange={inputHandler} onBlur={validateOne} name="cpassword" variant='standard' type="password" fullWidth required sx={{ marginBottom: "20px" }} InputLabelProps={{
                            style: { color: Colors.black }
                        }} helperText={cpasswordVal} />

                        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "flexStart" }}>
                            <Button size='medium' variant="contained" type="submit" color='secondary' onClick={submitHandler} sx={{ margin: "20px 20px 10px 0px", color: "black", fontWeight: "bold" }}>Change Password</Button>

                            <NavLink to={"/login"} style={{ textDecoration: "none" }}><Button size='medium' variant="contained" type="submit" fullWidth color='error' sx={{ marginBottom: "10px", color: "white", marginTop: "20px", fontWeight: "bold" }}>Back</Button></NavLink>
                        </Box>
                    </Box>
                </LoginPaper>
            </Container>
        </Stack>

    );
}

export default PasswordForm;
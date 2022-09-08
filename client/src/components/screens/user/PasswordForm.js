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

function PasswordForm() {

    const otp = useRef();
    const password = useRef();
    const cpassword = useRef();



    const navigate = useNavigate();
    const PassRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;


    const isPass = value => PassRegex.test(value);


    const {
        value: enteredPwd,
        isValid: pwdIsValid,
        hasError: pwdHasError,
        valueChangeHandler: pwdChangeHandler,
        valueBlurHandler: pwdBlurHandler,
    } = useInput(isPass);

    const {
        value: centeredPwd,
        isValid: cpwdIsValid,
        hasError: cpwdHasError,
        valueChangeHandler: cpwdChangeHandler,
        valueBlurHandler: cpwdBlurHandler,
    } = useInput(isPass);


    const submitHandler = async (e) => {
        e.preventDefault();
        pwdBlurHandler(true);
        cpwdBlurHandler(true)

        const user = {
            otp: otp.current.value,
            password: password.current.value,
            cpassword: cpassword.current.value
        }

        console.log(user);

        if (!pwdIsValid) {
            return 'Password is not valid'
        }

        if (user.otp !== '' || user.password !== '' || user.cpassword !== "") {
            try {
                await axios.post(`/api/v1/auth/resetPassword`, user).then(res => {
                    toast.success("Password has been changed successfully")
                    navigate("/login")
                })
            } catch (error) {
                toast.error(error.response.data.msg)
            }
        }
    }


    return (
        <Stack>
            <Container>
                <LoginPaper elevation={10}>
                    <Box component="form" autoComplete='on' onSubmit={submitHandler} noValidate id='otpForm'>
                        <Grid item align="center">
                            <Avatar sx={{ bgcolor: Colors.secondary, marginBottom: "10px" }} display="" src='https://res.cloudinary.com/dkz3uzlnp/image/upload/v1662530612/food-bang/18-autorenew-outline_upbalo.gif'></Avatar>
                            <Typography style={{ marginBottom: "0px", fontFamily: "Bai Jamjuree", fontSize: "24px", fontWeight: "bold" }}>Reset Your Password</Typography>
                        </Grid>
                        <StyledTextField type="number" label="Enter Your OTP" id="otp" variant='standard' fullWidth required sx={{ marginBottom: "10px" }} InputLabelProps={{
                            style: { color: Colors.black }
                        }} inputRef={otp} />

                        <StyledTextField label="Password" id="password" value={enteredPwd} onBlur={pwdBlurHandler} onChange={pwdChangeHandler} name="password" inputRef={password} variant='standard' type="password" fullWidth required sx={{ marginBottom: "20px" }} InputLabelProps={{
                            style: { color: Colors.black }
                        }} helperText={pwdHasError && "Minimum eight characters, at least one letter and one number"} />

                        <StyledTextField label="Confirm Your Password" id="cpassword" value={centeredPwd} onBlur={cpwdBlurHandler} onChange={cpwdChangeHandler} name="cpassword" inputRef={cpassword} variant='standard' type="password" fullWidth required sx={{ marginBottom: "20px" }} InputLabelProps={{
                            style: { color: Colors.black }
                        }} helperText={pwdHasError && "Entered Password is not matching"} />


                        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "flexStart" }}>
                            <Button size='medium' variant="contained" type="submit" color='secondary' sx={{ margin: "20px 20px 10px 0px", color: "black", fontWeight: "bold" }}>Change Password</Button>
                            <NavLink to={"/login"} style={{ textDecoration: "none" }}><Button size='medium' variant="contained" type="submit" fullWidth color='error' sx={{ marginBottom: "10px", color: "white", marginTop: "20px", fontWeight: "bold" }}>Back</Button></NavLink>
                        </Box>
                    </Box>
                </LoginPaper>
            </Container>
        </Stack>

    );
}

export default PasswordForm;
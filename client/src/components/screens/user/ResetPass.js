import React, { useRef, useState } from 'react';
import { Grid, IconButton, Stack, Container, Box, Avatar, Typography } from '@mui/material';
import { Colors, CommSeparator } from '../../../styles/theme';
import { CommonHeader } from '../../../styles/about';
import { LoginPaper, StyledTextField } from '../../../styles/login';
import useInput from '../../../hooks/use-input';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PasswordForm from './PasswordForm';



function ResetPass() {

    const email = useRef();
    const [otpForm, setOtpForm] = useState(true)
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    const IsEmail = value => emailRegex.test(value);

    const {
        value: enteredEmail,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        valueBlurHandler: emailBlurHandler,

    } = useInput(IsEmail);

    const sendOtp = async (e) => {
        e.preventDefault()
        const user = {
            email: email.current.value,
        };
        try {
            let url = 'http://localhost:5000/api/v1/auth/send-email'
            let options = {
                method: 'POST',
                url: url,
                data: user
            }
            await axios(options).then(res => {
                setOtpForm(false)
                toast.success('Please Check your mail for OTP');
            }).catch(err => toast.error(err.response.data.msg))
        } catch (err) {
            toast.error(err.response.data.msg)
        }
    }

    return (
        <Stack>
            <CommSeparator />
            <Container>
                <Grid container mt={10} height={"75vh"}>
                    <Grid item xs={12} sm={8} md={5} lg={4} sx={{ margin: "10px auto" }}>
                        {
                            otpForm ?
                                <LoginPaper elevation={10}>
                                    <Box component="form" autoComplete='on' noValidate id='otpForm'>
                                        <Grid item align="center">
                                            <Avatar sx={{ bgcolor: Colors.secondary, marginBottom: "10px" }} display="" src='https://res.cloudinary.com/dkz3uzlnp/image/upload/v1662530612/food-bang/18-autorenew-outline_upbalo.gif'></Avatar>
                                            <Typography style={{ marginBottom: "0px", fontFamily: "Bai Jamjuree", fontSize: "24px", fontWeight: "bold" }}>Reset Your Password</Typography>
                                        </Grid>
                                        
                                        <StyledTextField onBlur={emailBlurHandler} onChange={emailChangeHandler} type="email" label="Email" id="email" variant='standard' fullWidth required sx={{ marginBottom: "10px" }} InputLabelProps={{
                                            style: { color: Colors.black }
                                        }} inputRef={email} helperText={emailHasError && "Please enter valid Email-Id"} />
                                        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "flexStart" }}>
                                            <Button size='medium' variant="contained" type="submit" color='secondary' sx={{ margin: "20px 20px 10px 0px", color: "black", fontWeight: "bold" }} onClick={sendOtp}>Send OTP</Button>
                                            <NavLink to={"/login"} style={{ textDecoration: "none" }}><Button size='medium' variant="contained" type="submit" fullWidth color='error' sx={{ marginBottom: "10px", color: "white", marginTop: "20px", fontWeight: "bold" }}>Back</Button></NavLink>
                                        </Box>
                                    </Box>
                                </LoginPaper>
                                : (<>
                                    {/* <CommonHeader align='center'>
                                        Please Check your mail inbox...
                                    </CommonHeader>
                                    <Box>
                                        <img src="https://res.cloudinary.com/dkz3uzlnp/image/upload/v1662548449/food-bang/177-envelope-mail-send-gradient_uh5v6b.gif" alt="" />
                                    </Box> */}
                                    <PasswordForm />
                                </>
                                )
                        }
                    </Grid>
                </Grid>
            </Container>

        </Stack>
    );
}

export default ResetPass;
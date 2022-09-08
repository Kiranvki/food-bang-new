import React, { useRef, useState } from 'react';
import { Box, Divider, Slide, Typography } from '@mui/material';
import { Grid, Stack, Container } from '@mui/material';
import { StyledTextField, DividerRoot, SignUpPaper } from '../styles/login';
import Avatar from '@mui/material/Avatar';
import { Colors } from '../styles/theme';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import { NavLink, useNavigate } from 'react-router-dom'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import useInput from '../../src/hooks/use-input';


function SignUp() {

    const name = useRef();
    const email = useRef();
    const mobile = useRef();
    const password = useRef();
    const permission = useRef();

    const [isActive, setIsActive] = useState(true);



    const navigate = useNavigate();

    const isNotEmpty = value => value.trim() !== '';
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    const mobilRegex = /^\d{10}$/;
    const PassRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const IsEmail = value => emailRegex.test(value);
    const isPhone = value => mobilRegex.test(value);
    const isPass = value => PassRegex.test(value);

    const {
        value: enteredName,
        isValid: nameIsValid,
        hasError: nameHasError,
        valueChangeHandler: nameChangeHandler,
        valueBlurHandler: nameBlurHandler,

    } = useInput(isNotEmpty);

    const {
        value: enteredEmail,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        valueBlurHandler: emailBlurHandler,

    } = useInput(IsEmail);

    const {
        value: enteredMobile,
        isValid: phoneIsValid,
        hasError: phoneHasError,
        valueChangeHandler: phoneChangeHandler,
        valueBlurHandler: phoneBlurHandler,

    } = useInput(isPhone);

    const {
        value: enteredPwd,
        isValid: pwdIsValid,
        hasError: pwdHasError,
        valueChangeHandler: pwdChangeHandler,
        valueBlurHandler: pwdBlurHandler,

    } = useInput(isPass);

    const checkHandler = (event) => {
        setIsActive(event.target.checked)
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        nameBlurHandler(true);
        emailBlurHandler(true);
        phoneBlurHandler(true);
        pwdBlurHandler(true);

        const user = {
            name: name.current.value,
            email: email.current.value,
            mobile: mobile.current.value,
            password: password.current.value,
        }

        console.log(user);
        if (!nameIsValid) {
            return 'name is not valid'
        }
        if (!emailIsValid) {
            return 'email is not valid'
        }

        if (!phoneIsValid) {
            return 'mobile is not valid'
        }
        if (!pwdIsValid) {
            return 'Password is not valid'
        }

        if (user.name !== '' || user.email !== '' || user.mobile !== '' || user.password !== '') {
            try {
                await axios.post(`/api/v1/auth/register`, user).then(res => {
                    toast.success("user registered successfully")
                    navigate("/login")
                })
            } catch (error) {
                toast.error(error.response.data.msg)
            }
        }
    }

    return (
        <Stack direction="column">
            <Container>
                <Slide direction='right' in={true} timeout={1000}>
                    <Grid container mt={11}>
                        <Grid item xs={12} sm={8} md={6} lg={4} sx={{ margin: "20px auto" }}>
                            <SignUpPaper elevation={10}>
                                <Box component="form" onSubmit={submitHandler} noValidate >
                                    <Grid align="center">
                                        <Avatar sx={{ bgcolor: Colors.secondary, marginBottom: "10px" }} display=""><AddCircleIcon /></Avatar>
                                        <h2 style={{ marginBottom: "0px", fontFamily: "Bai Jamjuree" }}>Sign Up</h2>
                                    </Grid>

                                    <StyledTextField label="Name" id="name" value={enteredName} onChange={nameChangeHandler} onBlur={nameBlurHandler} inputRef={name} name="name" variant='standard'
                                        fullWidth required sx={{ marginBottom: "20px" }} InputLabelProps={{
                                            style: { color: Colors.black }
                                        }} helperText={nameHasError && "Name Required"} />

                                    <StyledTextField label="Email" id="email" onBlur={emailBlurHandler} onChange={emailChangeHandler} value={enteredEmail} name="email" inputRef={email} variant='standard' type="email" fullWidth required sx={{ marginBottom: "20px" }} InputLabelProps={{
                                        style: { color: Colors.black }
                                    }} helperText={emailHasError && "Please enter valid Email-Id"} />

                                    <StyledTextField label="Password" id="password" value={enteredPwd} onBlur={pwdBlurHandler} onChange={pwdChangeHandler} name="password" inputRef={password} variant='standard' type="password" fullWidth required sx={{ marginBottom: "20px" }} InputLabelProps={{
                                        style: { color: Colors.black }
                                    }} helperText={pwdHasError && "Minimum eight characters, at least one letter and one number"} />

                                    <StyledTextField label="Mobile Number" value={enteredMobile} onBlur={phoneBlurHandler} onChange={phoneChangeHandler} name="mobile" id="mobile" inputRef={mobile} variant='standard' type="number" fullWidth required sx={{ marginBottom: "20px" }} InputLabelProps={{
                                        style: { color: Colors.black }

                                    }} helperText={phoneHasError && "Please enter 10 digits of mobile number"} />

                                    <FormControlLabel  onChange={checkHandler} control={<Checkbox color='secondary' checked={isActive} inputProps={{ 'aria-label': 'controlled' }}  />} label="I accept the terms and conditions of Food-Bang" sx={{ marginTop: "0px" }} />

                                    <Button size='large' type="submit" variant="contained" fullWidth color='secondary' sx={{ marginTop: "10px", color: "black" }} disabled={isActive ? false : true }> Create Account</Button>                                    
                                </Box>
                                <DividerRoot>
                                    <Divider><Chip label="Or"/></Divider>
                                </DividerRoot>
                                <Button size='large' variant="outlined" fullWidth color='secondary' sx={{ color: "black", marginBottom: "20px" }} startIcon={<svg width="24" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.87566 13.2946L4.10987 16.1534L1.31093 16.2126C0.474461 14.6611 0 12.886 0 10.9997C0 9.17565 0.443609 7.45552 1.22994 5.94092H1.23054L3.72238 6.39776L4.81396 8.87465C4.5855 9.54071 4.46097 10.2557 4.46097 10.9997C4.46106 11.8072 4.60732 12.5808 4.87566 13.2946Z" fill="#FBBB00"></path><path d="M21.8082 8.94507C21.9345 9.61048 22.0004 10.2977 22.0004 11C22.0004 11.7875 21.9176 12.5557 21.7598 13.2967C21.2243 15.8183 19.8252 18.0201 17.8869 19.5782L17.8863 19.5776L14.7477 19.4175L14.3035 16.6445C15.5896 15.8902 16.5947 14.7098 17.1242 13.2967H11.2422V8.94507H17.21H21.8082Z" fill="#518EF8"></path><path d="M17.8865 19.5778L17.8871 19.5784C16.002 21.0937 13.6073 22.0002 11.0006 22.0002C6.81152 22.0002 3.16945 19.6588 1.31152 16.2132L4.87625 13.2952C5.8052 15.7744 8.19679 17.5392 11.0006 17.5392C12.2057 17.5392 13.3348 17.2134 14.3036 16.6447L17.8865 19.5778Z" fill="#28B446"></path><path d="M18.0208 2.53241L14.4573 5.44981C13.4546 4.82307 12.2694 4.46102 10.9996 4.46102C8.13229 4.46102 5.69596 6.30682 4.81356 8.87494L1.23009 5.9412H1.22949C3.06022 2.41154 6.74823 0 10.9996 0C13.6686 0 16.1158 0.950726 18.0208 2.53241Z" fill="#F14336"></path></svg>} >Continue With Google</Button>
                                <Typography component="h3" style={{ fontFamily: "Bai Jamjuree", marginTop: "20px" }}>Already have an account?
                                    <NavLink to={'/login'} style={{ textDecoration: "none", color: Colors.secondary }}> Login here</NavLink>
                                </Typography>
                            </SignUpPaper>
                        </Grid>
                    </Grid>
                </Slide>
            </Container>
        </Stack>
    );
}

export default SignUp;

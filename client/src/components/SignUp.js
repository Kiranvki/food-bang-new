import React, { useRef, useState } from 'react';
import { Box, Divider, Slide, Typography } from '@mui/material';
import { Grid, Stack, Container, Paper, TextField, Alert } from '@mui/material';
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


function SignUp() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        mobile: ''

    })

    const [validations, setValidations] = useState({
        name: '',
        email: '',
        password: '',
        mobile: ''

    })

    const checkHandler = (event) => {
        setIsActive(event.target.checked)
    }


    const validateAll = () => {
        const { name, email, password, mobile } = values
        const validations = { name: '', email: '', password: '', mobile: '' }
        let isValid = true

        if (!name) {
            validations.name = 'Name is required'
            isValid = false
        }

        if (name && name.length < 3 || name.length > 50) {
            validations.name = 'Name must contain between 3 and 50 characters'
            isValid = false
        }

        if (!email) {
            validations.email = 'Email is required'
            isValid = false
        }

        if (email && !/\S+@\S+\.\S+/.test(email)) {
            validations.email = 'Email format must be as example@mail.com'
            isValid = false
        }

        if (!password) {
            validations.password = 'Password is required'
            isValid = false
        }

        if (password && !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
            validations.password = 'Minimum eight characters, at least one letter and one number'
            isValid = false
        }
        if (!mobile) {
            validations.mobile = 'Mobile Number is required'
            isValid = false
        }
        if (mobile && !/^\d{10}$/.test(mobile)) {
            validations.mobile = 'Please enter 10 digits of mobile number'
            isValid = false
        }
        if (!isValid) {
            setValidations(validations)
        }
        return isValid
    }

    const validateOne = (e) => {
        const { name } = e.target
        const value = values[name]
        let message = ''

        if (!value) {
            message = `${name} is required`
        }

        if (value && name === 'name' && (value.length < 3 || value.length > 50)) {
            message = 'Name must contain between 3 and 50 characters'
        }

        if (value && name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
            message = 'Email format must be as example@mail.com'
        }
        if (value && name === 'mobile' && !/^\d{10}$/.test(value)) {
            message = 'Please enter 10 digits of mobile number'

        }
        if ((value && name === 'password' && !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value))) {
            message = 'Minimum eight characters, at least one letter and one number'

        }
        setValidations({ ...validations, [name]: message })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const isValid = validateAll()

        if (!isValid) {
            return false
        }
        const user = {
            name: values.name,
            email: values.email,
            mobile: values.mobile,
            password: values.password,
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

    const { name, email, password, mobile } = values

    const {
        name: nameVal,
        email: emailVal,
        password: passwordVal,
        mobile: mobileVal,
    } = validations

    const [isActive, setIsActive] = useState(true);

    const navigate = useNavigate();

    return (
        <Stack direction="column">
            <Container>
                <Slide direction='right' in={true} timeout={1000}>
                    <Grid container mt={11}>
                        <Grid item xs={12} sm={8} md={6} lg={4} sx={{ margin: "20px auto" }}>
                            <SignUpPaper elevation={10}>
                                <Box component="form" onSubmit={handleSubmit} noValidate >
                                    <Grid align="center">
                                        <Avatar sx={{ bgcolor: Colors.secondary, marginBottom: "10px" }} display=""><AddCircleIcon /></Avatar>
                                        <h2 style={{ marginBottom: "0px", fontFamily: "Bai Jamjuree" }}>Sign Up</h2>
                                    </Grid>

                                    <StyledTextField label="Name" id="name" value={name} onChange={handleChange} onBlur={validateOne} name="name" variant='standard'
                                        fullWidth required sx={{ marginBottom: "20px" }} InputLabelProps={{
                                            style: { color: Colors.black }
                                        }} helperText={nameVal} />

                                    <StyledTextField label="Email" id="email" value={email} onChange={handleChange}
                                        onBlur={validateOne} name="email" variant='standard' type="email" fullWidth required sx={{ marginBottom: "20px" }} InputLabelProps={{
                                            style: { color: Colors.black }
                                        }} helperText={emailVal} />

                                    <StyledTextField label="Password" id="password" value={password} onBlur={validateOne} onChange={handleChange} name="password" variant='standard' type="password" fullWidth required sx={{ marginBottom: "20px" }} InputLabelProps={{
                                        style: { color: Colors.black }
                                    }} helperText={passwordVal} />

                                    <StyledTextField label="Mobile Number" value={mobile} onBlur={validateOne} onChange={handleChange} name="mobile" id="mobile" variant='standard' type="number" fullWidth required sx={{ marginBottom: "20px" }} InputLabelProps={{
                                        style: { color: Colors.black }

                                    }} helperText={mobileVal} />


                                    <FormControlLabel  onChange={checkHandler} control={<Checkbox color='secondary' checked={isActive} inputProps={{ 'aria-label': 'controlled' }}  />} label="I accept the terms and conditions of Food-Bang" sx={{ marginTop: "0px" }} />

                                    <Button size='large' type="submit" variant="contained" fullWidth color='secondary' sx={{ marginTop: "10px", color: "black" }} disabled={isActive ? false : true}> Create Account</Button>
                                </Box>
                                <DividerRoot>
                                    <Divider><Chip label="Or" /></Divider>
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




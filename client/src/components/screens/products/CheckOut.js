import { Grid, Stack, Typography, Container, Box, Paper, List, ListItem, Button, TextField, CardContent } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { GlobalState } from '../../../GlobalContext';
import { Separator,CommSeparator } from '../../../styles/theme';
import { CommonHeader } from '../../../styles/about';
import { useNavigate, useParams } from 'react-router-dom'
import Card from '@mui/material/Card';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CardActions from '@mui/material/CardActions';
import axios from 'axios'
import { toast } from 'react-toastify'

function CheckOut() {
    const navigate = useNavigate()

    const context = useContext(GlobalState)
    const [token] = context.token
    const [order, setOrder] = context.authApi.order;
    const [finalTotal] = context.authApi.finalTotal;
    const [cart,setCart] = context.authApi.cart

    const params = useParams()
    const [data, setData] = useState({
        address: "",
        paymentMode: ""
    })

    const readValue = (e) => {
        const { name, value } = e.target
        setData({...data, [name]: value})

    }

    const submitHandler = async (e) => {
        e.preventDefault();

        const res = await axios.post(`/api/v1/order/newOrder`, {
            cart: cart,
            address: data.address,
            finalTotal:finalTotal,
            paymentMode: data.paymentMode,
            paymentId: Math.floor(Math.random() * 12345689),
            paymentStatus: "unpaid"
        },{
            headers: { Authorization: token }
        });
        toast.success( `Order confirmed successfully`)
        setCart([])
        navigate('/')
    }

    return (
        <Stack>
            <CommSeparator />
            <Container>
                <Typography sx={{ paddingTop: "30px" }} variant='h4' textAlign="center">
                    <strong>You Cart Total is {params.final}&#8377;</strong>
                </Typography>
                <Grid container sx={{ padding: "30px 30px 0px 30px", display: "flex", justifyContent: "center" }}>
                    <Grid item xs={12} sm={12} md={6} lg={4} >
                        <Card component="form" elevation={5} onSubmit={submitHandler}>
                            <CardContent>
                                <Typography>
                                    <strong>Delivery To:</strong>
                                </Typography>
                                <Box my={2}>
                                    <TextField label="Address" multiline
                                        rows={4}
                                        color="secondary"
                                        fullWidth
                                        onChange={readValue}
                                        name="address" id="address"
                                    />
                                </Box>
                                <Typography>
                                    <strong>Payment Details:</strong>
                                </Typography>
                                <Box mt={2}>
                                    <FormControl fullWidth>
                                        <InputLabel color='secondary'>Select Payment</InputLabel>
                                        <Select
                                            
                                            name="paymentMode" id="paymentMode"
                                            label="Select Payment"
                                            value={data.paymentMode}
                                            color='secondary'
                                            sx={{ color: "black" }}
                                            onChange={readValue}
                                        >
                                            <MenuItem  value={"COD"}>COD</MenuItem>
                                            <MenuItem  value={"Online Payment"}>Online Payment</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </CardContent>
                            <CardActions sx={{ display: "flex", justifyContent: "center",marginY:"20px" }} >
                                <Button type='submit' color='secondary' variant='contained' sx={{fontWeight:"bold"}} >
                                    Click to Proceed
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Stack>
    );
}

export default CheckOut;
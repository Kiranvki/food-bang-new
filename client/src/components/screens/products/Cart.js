import { Grid, Stack, Typography, Container, Box, Paper, List, ListItem, Button } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { GlobalState } from '../../../GlobalContext';
import { CommSeparator} from '../../../styles/theme';
import { CommonHeader } from '../../../styles/about';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { NavLink } from 'react-router-dom';


function Cart() {
    const data = useContext(GlobalState);
    const [cart, setCart] = data.authApi.cart;
    const [token] = data.token;
    const orderUpdate=data.authApi.orderUpdate;
    const [total, setTotal] = useState(0); //total price
    const [gst, setGst] = useState(2.5); //gst -> cgst & get
    const [dc, setDc] = useState(0); //delivery charge
    const [finalTotal, setFinalTotal] = data.authApi.finalTotal;
    const [order,setOrder]=data.authApi.order;


    useEffect(() => {
        const getTotal = () => {
            const total = cart.reduce((prev, item) => {
                return prev + (item.price * item.quantity)
            }, 0)

            setTotal(total)
            // let gstTotal = Math.round(total * ((gst + gst) / 100))

            let Dc = parseInt(total * (5 / 100))
            let gstTotal = Math.round(total * ((gst) / 100))
            let final = total + gstTotal + Dc;
            setFinalTotal(final)
        }
        getTotal()
    }, [cart])
    let add = Math.round(total * ((gst) / 100))



    // inc count of items
    const incCount = (id) => {

        cart.forEach(item => {
            if (item._id === id) {
                item.quantity += 1
            }
        });
        setCart([...cart])
        updateCart(cart)

        setOrder(cart,finalTotal)
        storeOrder(cart,finalTotal)
    };

    //   to dec count on item
    const decCount = (id) => {
        cart.forEach(item => {
            if (item._id === id) {
                item.quantity === 1 ? item.quantity = 1 : item.quantity -= 1;
            }
        })
        setCart([...cart])
        updateCart(cart)

        setOrder(cart,finalTotal)
        storeOrder(cart,finalTotal)
    };

    //   to update cart
    const updateCart = async (cart) => {
        await axios.patch(`/api/v1/auth/addToCart`, { cart }, {
            headers: { Authorization: token }
        })
    };

    // delete item from cart
    const delItem = (id) => {
        if (window.confirm(`Do you want to remove this product ?`)) {
            cart.forEach((item, index) => {
                if (item._id === id) {
                    cart.splice(index, 1)
                }
            });
            setCart([...cart]);
            updateCart(cart)
        }
    };

    const storeOrder=async(cart,finalTotal)=>{
        await orderUpdate(cart,finalTotal)
    }

    if (cart.length === 0) {
        return (
            <Stack>
                <CommSeparator />
                <Container>
                    <Box component="div">
                        <video width="100%"
                            height="500" src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/empty-cart-5183597-4323095.mp4" autoplay="autoplay" muted="muted" loop="loop"></video>
                    </Box>
                    <CommonHeader textAlign="center" sx={{ color: "red" }}>
                        Your Cart Is Empty...
                    </CommonHeader>
                </Container>
            </Stack>
        );
    }

    return (
        <Stack direction="column">
            <CommSeparator />
            <Container>
                <CommonHeader textAlign="center">
                    Cart
                </CommonHeader>
                <Grid container spacing={3} sx={{ padding: "30px 30px 0px 30px" }}>
                    <Grid item xs={12} sm={12} md={6} lg={8} >
                        <TableContainer component={Paper} elevation={3}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead >
                                    <TableRow >
                                        <TableCell align="left" sx={{ fontSize: "20px", fontFamily: "Bai Jamjuree", fontWeight: "bold" }}>Title</TableCell>
                                        <TableCell align="left" sx={{ fontSize: "20px", fontFamily: "Bai Jamjuree", fontWeight: "bold" }}>Image</TableCell>
                                        <TableCell align="left" sx={{ fontSize: "20px", fontFamily: "Bai Jamjuree", fontWeight: "bold" }}>Price</TableCell>
                                        <TableCell align="left" sx={{ fontSize: "20px", fontFamily: "Bai Jamjuree", fontWeight: "bold" }}>Count</TableCell>
                                        <TableCell align="left" sx={{ fontSize: "20px", fontFamily: "Bai Jamjuree", fontWeight: "bold" }}>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        cart && cart.map((item, index) => {
                                            const { _id, title, image, price, quantity } = item;
                                            return (
                                                <TableRow key={index}>
                                                    <TableCell>
                                                        {title}
                                                    </TableCell>
                                                    <TableCell>
                                                        <img src={image.url} alt="" height={70} width={100} />
                                                    </TableCell>
                                                    <TableCell>
                                                        &#8377;{price}
                                                    </TableCell>
                                                    <TableCell>
                                                        <IconButton sx={{ padding: "0px" }} color="secondary" onClick={() => incCount(_id)}><AddIcon /></IconButton >
                                                        <strong> {quantity} </strong>
                                                        <IconButton sx={{ padding: "0px" }} color="secondary" onClick={() => decCount(_id)}><RemoveIcon /></IconButton>
                                                    </TableCell>
                                                    <TableCell>
                                                        <IconButton variant="outlined" color="secondary" sx={{ marginX: "8px" }} onClick={() => delItem(_id)} >
                                                            <DeleteIcon />
                                                        </IconButton>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        })
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <Card align="center" elevation={3}>
                            <Typography sx={{ fontSize: "30px", fontFamily: "Bai Jamjuree", fontWeight: "bold" }}>
                                Cart-Info
                            </Typography>
                            <CardContent>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <div>
                                        <strong>Sub Total</strong>
                                    </div>
                                    <div>
                                        &#8377;{total}
                                    </div>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} mt={3}>
                                    <div>
                                        <strong>GST</strong>
                                    </div>
                                    <div>
                                        &#8377;{add}
                                    </div>
                                </Box>
                                {
                                    total > 500 ? (<Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} mt={3}>
                                        <div>
                                            <strong>Delivery Charges</strong>
                                        </div>
                                        <div>
                                            &#8377; {0}
                                        </div>
                                    </Box>) : (
                                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} mt={3}>
                                            <div>
                                                <strong>Delivery Charges</strong>
                                            </div>
                                            <div>
                                                &#8377; {parseInt(total * (5 / 100))}
                                            </div>
                                        </Box>
                                    )
                                }

                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} mt={3}>
                                    <div>
                                        <strong>Final Total</strong>
                                    </div>
                                    <div>
                                        &#8377; {finalTotal}
                                    </div>
                                </Box>
                            </CardContent>
                            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                                <Button color='secondary' variant='contained' >
                                    <NavLink to={`/checkout/${finalTotal}`} style={{ textDecoration: "none", fontWeight: "bold", color: "white" }}>
                                        Continue
                                    </NavLink>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Stack >
    );
}

export default Cart;
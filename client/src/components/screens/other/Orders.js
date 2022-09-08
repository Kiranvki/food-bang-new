import React, { useContext, useEffect, useState } from 'react';
import { GlobalState } from '../../../GlobalContext';
import { Grid, Stack, Typography, Container, Box, Paper, List, ListItem, Button, Divider } from '@mui/material';
import { CommSeparator } from '../../../styles/theme';
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
import { CommonHeader } from '../../../styles/about';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import CardMedia from '@mui/material/CardMedia';



function Orders() {
    const context = useContext(GlobalState);
    const [token] = context.token
    const [userData] = context.authApi.userData
    const [cart] = context.authApi.cart

    const [orders, setOrders] = useState([]);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        const getOrders = async () => {
            let res = await axios.get(`/api/v1/auth/orders`, {
                headers: { Authorization: token }
            })
            setOrders(res.data.orders)
        }
        getOrders()
    }, [])

    if (orders.length === 0) {
        return (
            <Stack>
                <CommSeparator />
                <CommonHeader textAlign="center">
                    Hi {userData.name},No Order is Available <br />
                </CommonHeader>
                <Box>
                    <img
                        src="https://res.cloudinary.com/dhina/image/upload/v1661510552/ProjectImage/Order_Empty_bvix6k.png"
                        alt=""
                    />
                </Box>
                <Typography component="h5" align='center' mt={2}>
                    Happy Shopping
                </Typography>
                <Typography component="h5" align='center' mt={5}>
                    <NavLink to={"/products"}>Return to Menu</NavLink>
                </Typography>

            </Stack>
        )

    }
    return (
        <Stack>
            <CommSeparator />
            <CommonHeader textAlign="center">
                My Orders
            </CommonHeader>
            <Container>
                <Grid container spacing={3} sx={{ padding: "30px 30px 0px 30px" }}>
                    <Grid item xs={12} sm={12} md={6} lg={12} >
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center" sx={{ fontSize: "20px", fontFamily: "Bai Jamjuree", fontWeight: "bold" }}>OrderId</TableCell>
                                        <TableCell align="center" sx={{ fontSize: "20px", fontFamily: "Bai Jamjuree", fontWeight: "bold" }}>Date</TableCell>
                                        <TableCell align="center" sx={{ fontSize: "20px", fontFamily: "Bai Jamjuree", fontWeight: "bold" }}>Status</TableCell>
                                        <TableCell align="center" sx={{ fontSize: "20px", fontFamily: "Bai Jamjuree", fontWeight: "bold" }}>View</TableCell>
                                        <TableCell align="center" sx={{ fontSize: "20px", fontFamily: "Bai Jamjuree", fontWeight: "bold" }}>Total</TableCell>
                                        <TableCell align="center" sx={{ fontSize: "20px", fontFamily: "Bai Jamjuree", fontWeight: "bold" }}>Pay Status</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {orders &&
                                        orders.map((item, index) => (
                                            <TableRow key={index}>
                                                <TableCell align="center">{item.orderId}</TableCell>
                                                <TableCell align="center">
                                                    {new Date(item.createdAt).toLocaleString()}
                                                </TableCell>
                                                <TableCell align="center">{item.orderStatus}</TableCell>
                                                <TableCell align="center">
                                                    <details>
                                                        <summary>View</summary>
                                                        <Box
                                                            sx={{
                                                                height: "140px",
                                                                overflow: "auto",
                                                                
                                                            }}
                                                        >
                                                            {item.cart.map((item, index) => {
                                                                return (
                                                                    <Box key={index}>
                                                                        <Box sx={{ height: 100 }}>
                                                                            <img src={item.image.url} height="100%" />
                                                                        </Box>
                                                                        <Box>
                                                                            <Typography fontSize="0.8rem" my={1} fontWeight="bold" >
                                                                                {item.title}
                                                                            </Typography>
                                                                            <Typography fontSize="0.8rem" mb={2}>
                                                                                &#8377; {item.price}
                                                                            </Typography>
                                                                            
                                                                        </Box>
                                                                    </Box>
                                    
                                                                );
                                                            })}
                                                        </Box>
                                                    </details>
                                                </TableCell>
                                                <TableCell align="center">&#8377;{item.finalTotal}</TableCell>
                                                <TableCell align="center">{item.paymentStatus}</TableCell>
                                            </TableRow>
                                        ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </Grid>
                </Grid>

            </Container>
        </Stack>
    );
}

export default Orders;
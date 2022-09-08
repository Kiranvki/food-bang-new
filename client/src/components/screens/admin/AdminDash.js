import React, { useContext } from 'react';
import { Grid, Stack, Typography, Container, Divider } from '@mui/material';
import { Colors, CommSeparator, Separator } from '../../../styles/theme';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { GlobalState } from '../../../GlobalContext';
import { CommonHeader } from '../../../styles/about';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import { Slide } from '@mui/material';
import { CardHeader } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';

function AdminDash() {
    const data = useContext(GlobalState);
    const [products] = data.productApi.products;
    const [allUsers] = data.authApi.allUsers
    const [allOrders] = data.authApi.allOrders


    const delHandler = async (id) => {
        if (window.confirm(`Are you sure to delete products`)) {
            try {
                let product = await axios.get(`/api/v1/product/get/${id}`, {})
                if (!product) {
                    toast.error("no product found")
                } else {
                    axios.post(`/api/v1/product/destroy`,)
                }
                await axios.delete(`/api/v1/product/delete/${id}`)
                    .then(res => {
                        toast.success("product deleted successfully");
                    })
            } catch (err) {
                toast.error(err.data.response.msg)
            }
        }
    }

    return (
        <Stack direction="column">
            <CommSeparator  />
            <Container>
                <CommonHeader textAlign="center">
                    Admin-DashBoard
                </CommonHeader>
                <Grid container sx={{ padding: "30px 30px 0px 30px" }} spacing={3}>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Card sx={{ maxWidth: 345 }} elevation={3}>
                            <CardHeader title="Stock Products" sx={{ textAlign: "center", color: Colors.secondary }} />
                            <Divider />
                            <CardContent>
                                <Typography variant="h5" align='center' sx={{ fontFamily: "Bai Jamjuree", textTransform: "capitalize", fontWeight: "bold" }} py={1}> {products.length} Nos</Typography>
                            </CardContent>
                            <Divider />
                            <CardActions sx={{ textAlign: "center", display: "flex", justifyContent: "center", marginY: "10px" }} >
                                <Button variant='contained' color='secondary' sx={{ fontWeight: "bold" }}><NavLink to={`/product/create`} style={{
                                    textDecoration: "none", color: "black"
                                }}>Add products</NavLink>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Card sx={{ maxWidth: 345 }} elevation={3}>
                            <CardHeader title="Users" sx={{ textAlign: "center", color: Colors.secondary }} />
                            <Divider />
                            <CardContent>
                                <Typography variant="h5" align='center' sx={{ fontFamily: "Bai Jamjuree", textTransform: "capitalize", fontWeight: "bold" }} py={1}> {allUsers.length} Nos</Typography>
                            </CardContent>
                            <Divider />
                            <CardActions sx={{ textAlign: "center", display: "flex", justifyContent: "center", marginY: "10px" }} >
                                <Button variant='contained' color='secondary' sx={{ fontWeight: "bold" }}><NavLink to={`/users`} style={{
                                    textDecoration: "none", color: "black"
                                }}>View Users</NavLink>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Card sx={{ maxWidth: 345 }} elevation={3}>
                            <CardHeader title="Orders" sx={{ textAlign: "center", color: Colors.secondary }} />
                            <Divider />
                            <CardContent>
                                <Typography variant="h5" align='center' sx={{ fontFamily: "Bai Jamjuree", textTransform: "capitalize", fontWeight: "bold" }} py={1}>{allOrders.length} Nos</Typography>
                            </CardContent>
                            <Divider />
                            <CardActions sx={{ textAlign: "center", display: "flex", justifyContent: "center", marginY: "10px" }} >
                                <Button variant='contained' color='secondary' sx={{ fontWeight: "bold" }}><NavLink to={`/admin/allOrders`} style={{
                                    textDecoration: "none", color: "black"
                                }}>View Orders</NavLink>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Stack>
    );
}

export default AdminDash;
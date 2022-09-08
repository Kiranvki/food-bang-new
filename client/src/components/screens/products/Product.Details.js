import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { GlobalState } from '../../../GlobalContext';
import { Grid, Stack, Typography, Container, Box, Divider } from '@mui/material';
import { Colors, CommSeparator, Separator } from '../../../styles/theme';
import { CommonHeader } from '../../../styles/about';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import { CardHeader } from '@mui/material';
import { toast } from "react-toastify";
import MopedIcon from '@mui/icons-material/Moped';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function ProductDetail() {
    const data = useContext(GlobalState);
    const [products] = data.productApi.products;
    const [isAdmin] = data.authApi.isAdmin;
    const params = useParams();
    const [product, setProduct] = useState("");
    const [itemCount, setItemCount] = useState(0);
    const addToCart = data.authApi.addToCart

    const getSingle = async (id) => {
        await axios.get(`/api/v1/product/get/${id}`).then(res => {
            setProduct(res.data.product)
        }).catch(err => toast.error(err.message))
        // let single = products.find((item) => item.id === id)
        // setProduct(single)
    };

    const incItemCount = () => {
        if (itemCount < 5)
            setItemCount(itemCount + 1)
    }
    const decItemCount = () => {
        if (itemCount > 0) {
            setItemCount(itemCount - 1)
        }
    }

    useEffect(() => {
        getSingle(params.id);
    }, []);

    return (
        <Stack>
            <CommSeparator />
            <Container>
                <CommonHeader textAlign="center">
                    Product-Details
                </CommonHeader>
                <CommSeparator />
                <Grid container spacing="3">
                    <Grid item xs={12} sm={12} md={6} lg={6} sx={{ padding: "30px 30px 0px 30px" }}>
                        <Card elevation={0}>
                            <CardMedia component="img" alt={product.title} height="auto" image={
                                !product ? null : (product.image.url)
                            }>
                            </CardMedia>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} sx={{ padding: "30px 30px 30px 30px" }}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" sx={{ fontFamily: "Bai Jamjuree", textTransform: "capitalize" }} py={1}> {product.title}</Typography>
                                <Divider />

                                <Typography variant="body1" sx={{ textTransform: "capitalize" }} py={2}>{product.desc}</Typography>
                                <Divider />

                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Typography variant="body1" sx={{ textTransform: "capitalize" }} py={2}>Net Wt: {product.quantity}</Typography>
                                    {/* {
                                        isAdmin ? null :
                                            (
                                                <Box>
                                                    <IconButton color="secondary" onClick={incItemCount}><AddIcon /></IconButton>
                                                    <strong> {itemCount} </strong>
                                                    <IconButton color="secondary" onClick={decItemCount}><RemoveIcon /></IconButton>

                                                </Box>
                                            )
                                    } */}
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} py={2}>
                                    <Typography variant="h5" sx={{ textTransform: "capitalize", color: Colors.secondary }} py={1}> &#8377;{product.price} <Typography component="span" variant="body1" sx={{ textDecoration: "line-through", color: "gray" }}>MRP:&#8377;{product.price + product.price * (10 / 100)}/-</Typography><Typography component="span" variant="body1" sx={{ color: "gray" }}> (inclusive GST)</Typography></Typography>
                                    {isAdmin ? null : (
                                        <Button variant="contained" color="secondary" onClick={() => addToCart(product)} sx={{ fontWeight: "bold" }}>Add to Cart</Button>
                                    )}
                                </Box>
                                <Divider />
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Typography variant="body1" sx={{ textTransform: "capitalize" }} py={2}>Free Shipping on above &#8377;500 </Typography>

                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <MopedIcon sx={{ paddingRight: "5px" }} />
                                        {
                                            product.price > 500 ? (<Typography variant="body1" sx={{ textTransform: "capitalize" }} py={2}>{
                                                "Free Delivery Available"
                                            } </Typography>) : (<Typography variant="body1" sx={{ textTransform: "capitalize" }} py={2}>&#8377;{parseInt(product.price * (5 / 100))} Delivery Charge </Typography>)
                                        }
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Stack>
    );
}

export default ProductDetail;
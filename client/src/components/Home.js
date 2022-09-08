import { Grid, Stack, Typography } from '@mui/material';
import { Container } from '@mui/material';
import React, { useContext } from 'react';
import Banner from './Banner';
import { Separator } from '../styles/theme';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import { CommonDescription, CommonHeader } from '../styles/about';
import Promotion from './Promotion';
import Link from '@mui/material/Link';
import Product from './screens/products/Product';
import { GlobalState } from '../GlobalContext';

function Home() {
    const data = useContext(GlobalState)
    const [products, setProducts] = data.productApi.products;
    const [isUser] = data.authApi.isUser;
    const [isAdmin] = data.authApi.isAdmin
    const [isLogged] = data.authApi.isLogged


    return (
        <Stack>
            <Banner />
            <Separator />
            <Container>
                <Grid container sx={{ padding: "30px 30px 5px 30px" }} spacing={3}>
                    <Grid item md={4} sm={6} xm={12} lg={4}>
                        <Link href='/menulist'>
                            <Card elevation={3} sx={{ boxSizing: "border-box", transition: "0.5s ease 0s, transform 0.5s ease 0s;" }} className="zoomer" >
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={"https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660729369/food-bang/pexels-mali-maeder-65175_hkspze.jpg"}
                                    alt="Order Online"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Order Online
                                    </Typography>
                                    <Typography variant="body1">
                                        Stay Home and order at your doorstep with your loved ones.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                    <Grid item md={4} sm={6} xm={12} lg={4}>
                        <Card elevation={3} sx={{ boxSizing: "border-box", transition: "0.5s ease 0s, transform 0.5s ease 0s;" }} className="zoomer">
                            <CardMedia
                                component="img"
                                height="140"
                                image={"https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660729618/food-bang/Sichuan-Chilli-Chicken-250gm-Raw-tag_ernlwo.webp"}
                                alt="Order Online"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Ready To Cook
                                </Typography>
                                <Typography variant="body1" >
                                    In the end, it's not the years in your life that count.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={4} sm={6} xm={12} lg={4}>
                        <Card elevation={3} sx={{ boxSizing: "border-box", transition: "0.5s ease 0s, transform 0.5s ease 0s;" }} className="zoomer">
                            <CardMedia
                                component="img"
                                height="140"
                                image={"https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660729926/food-bang/AllNonVeg_1_1024x1024_2x_uxrexa.webp"}
                                alt="Order Online"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Spreads
                                </Typography>
                                <Typography variant="body1">
                                    Let food be thy medicine and medicine be thy food.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            <Separator />
            <Container>
                <Grid container sx={{ padding: "5px 30px 5px 30px " }} spacing={3} >
                    <Grid item md={6} sm={12} xm={12} lg={6}>
                        <CommonHeader>
                            Who are we?
                        </CommonHeader>
                        <CommonDescription color="text.secondary" mt={1}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolorem eius consectetur, minus distinctio vitae magnam facilis odio perspiciatis iusto consequuntur assumenda perferendis saepe aut ullam nam veniam. Delectus, saepe? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, facere itaque corporis consequuntur odit consequatur veritatis necessitatibus quas, alias repudiandae corrupti cumque, ducimus voluptatem velit enim sunt dicta. Fugit, laudantium? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, itaque perspiciatis assumenda, eos hic perferendis iste laboriosam beatae, ullam odit quo neque placeat explicabo fuga quod excepturi commodi consectetur. Natus!
                        </CommonDescription>
                    </Grid>
                    <Grid item md={6} sm={12} xm={12} lg={6}>
                        <Avatar alt="Delivery" src={"https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660627973/food-bang/delivery_ldjmia.jpg"} sx={{ width: "100%", height: "100%" }} />
                    </Grid>
                </Grid>
            </Container>
            {/* <Container>
                <Grid container sx={{ padding: "30px 30px 5px 30px" }} spacing={3}>
                    <Grid item md={6} sm={12} xm={12} lg={6}>
                        <CommonHeader>
                            Most Popular Items
                        </CommonHeader>
                    </Grid>
                </Grid>
                <Grid container sx={{ padding: "30px 30px 5px 30px" }} spacing={3}>
                    {
                        products && products.map((item, index) => {
                            return (
                                <Product key={index} {...item} isUser={isUser} isAdmin={isAdmin} />
                            )
                        })
                    }
                </Grid>
            </Container>
            <Separator /> */}
        </Stack>

    );
}

export default Home;
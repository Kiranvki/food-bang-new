import React from 'react';
import { CommonContainer, CommonDescription, CommonHeader, CommonTitle } from '../styles/about';
import { Grid, Stack, Typography, Container, Box } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Separator } from '../styles/theme';
import Avatar from '@mui/material/Avatar';
import { Colors } from '../styles/theme';

function About() {

    return (
        <Stack direction="column">
            <CommonContainer>
                <CommonTitle>
                    About Us
                    <Breadcrumbs aria-label="breadcrumb" color="primary">
                        <Link underline="hover" color="secondary" href="/" fontWeight="bold">
                            HOME
                        </Link>
                        <Link
                            underline="hover"
                            color="secondary"
                            href="/"
                            fontWeight="bold"
                        >
                            PAGES
                        </Link>
                        <Link
                            underline="hover"
                            color="primary"
                            href="/about"
                            aria-current="page"
                            fontWeight="bold"
                        >
                            ABOUT US
                        </Link>
                    </Breadcrumbs>
                </CommonTitle>
            </CommonContainer>
            <Separator />
            <Container >
                <Grid container sx={{ padding: "5px 30px 5px 30px " }} spacing={3}>
                    <Grid item md={6} sm={12} xm={12} lg={6}>
                        <CommonHeader className='underbar'>
                            Who are we?
                        </CommonHeader>
                        <CommonDescription color="text.secondary" mt={3}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolorem eius consectetur, minus distinctio vitae magnam facilis odio perspiciatis iusto consequuntur assumenda perferendis saepe aut ullam nam veniam. Delectus, saepe? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, facere itaque corporis consequuntur odit consequatur veritatis necessitatibus quas, alias repudiandae corrupti cumque, ducimus voluptatem velit enim sunt dicta. Fugit, laudantium? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, itaque perspiciatis assumenda, eos hic perferendis iste laboriosam beatae, ullam odit quo neque placeat explicabo fuga quod excepturi commodi consectetur. Natus!
                        </CommonDescription>
                    </Grid>
                    <Grid item md={6} sm={12} xm={12} lg={6}>
                        <img alt="Delivery" src={"https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660627973/food-bang/delivery_ldjmia.jpg"} sx={{ width: "100%", height: "100%" }} />
                    </Grid>
                </Grid>
            </Container>
            <Container>
                <Grid container sx={{ padding: "30px 30px 5px 30px" }} spacing={3} >
                    <Grid item md={12} xm={12} sm={12} lg={12} >
                        <CommonHeader mb={1} >
                            Peoples you may work with
                        </CommonHeader>
                        <CommonDescription color="text.secondary" className='underbar'>
                            Here are some of the key peoples who lead our vision towards better food for more people.
                        </CommonDescription>
                    </Grid>
                    <Grid item xm={1} sm={6} md={4} lg={3} mb={8} mt={1}  >
                        <Box className='cover' component="div">
                            <img src={"https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660627974/food-bang/mine2_ov8zeb.jpg"} alt="" width="100%" height="100%" />
                            <Box component="div" className='effect'>
                                <Typography component="body1" variant='p' className='effect2'>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium alias omnis officia, dolore reprehenderit laboriosam, dolorem fugit, quis adipisci rem dolor. Ratione consequatur itaque incidunt atque.
                                </Typography>
                            </Box>
                        </Box>
                        <Typography component="div" variant='h5' textAlign="left" py={1}>
                            Kiran
                        </Typography>

                        <Box component="div" >
                            <Link href="/" sx={{ color: Colors.secondary }}><i className="fa-brands fa-twitter" style={{ fontSize: "20px", margin: "5px 25px 0px 0px" }} href="/">
                            </i></Link>
                            <Link href="https://www.linkedin.com/in/kiran-v-6273a3165/" target="_blank" sx={{ color: Colors.secondary }}>
                                <i className="fa-brands fa-linkedin-in" style={{ fontSize: "20px", margin: "5px 5px 0px 0px" }}></i>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xm={1} sm={6} md={4} lg={3} mb={8} mt={1}  >
                        <Box className='cover' component="div">
                            <img src={"https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660627975/food-bang/order_knycmh.jpg"} alt="" width="100%" height="100%" />
                            <Box component="div" className='effect'>
                                <Typography component="body1" variant='p' className='effect2'>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium alias omnis officia, dolore reprehenderit laboriosam, dolorem fugit, quis adipisci rem dolor. Ratione consequatur itaque incidunt atque.
                                </Typography>
                            </Box>
                        </Box>
                        <Typography component="div" variant='h5' textAlign="left" py={1}>
                            Sidharth
                        </Typography>

                        <Box component="div" >
                            <Link href="/" sx={{ color: Colors.secondary }}><i className="fa-brands fa-twitter" style={{ fontSize: "20px", margin: "5px 25px 0px 0px" }} href="/">
                            </i></Link>
                            <Link href="/" sx={{ color: Colors.secondary }}>
                                <i className="fa-brands fa-linkedin-in" style={{ fontSize: "20px", margin: "5px 5px 0px 0px" }}></i>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xm={1} sm={6} md={4} lg={3} mb={8} mt={1}  >
                        <div className='cover'>
                            <img src={"https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660627975/food-bang/order_knycmh.jpg"} alt="" width="100%" height="100%" />
                            <Box component="div" className='effect'>
                                <Typography component="body1" variant='p' className='effect2'>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium alias omnis officia, dolore reprehenderit laboriosam, dolorem fugit, quis adipisci rem dolor. Ratione consequatur itaque incidunt atque.
                                </Typography>
                            </Box>
                        </div>
                        <Typography component="div" variant='h5' textAlign="left" py={1}>
                            Srinivas
                        </Typography>

                        <Box component="div" >
                            <Link href="/" sx={{ color: Colors.secondary }}><i className="fa-brands fa-twitter" style={{ fontSize: "20px", margin: "5px 25px 0px 0px" }} href="/">
                            </i></Link>
                            <Link href="/" sx={{ color: Colors.secondary }}>
                                <i className="fa-brands fa-linkedin-in" style={{ fontSize: "20px", margin: "5px 5px 0px 0px" }}></i>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xm={1} sm={6} md={4} lg={3} mb={8} mt={1}  >
                        <div className='cover'>
                            <img src={"https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660627975/food-bang/order_knycmh.jpg"} alt="" width="100%" height="100%" />
                            <Box component="div" className='effect'>
                                <Typography component="body1" variant='p' className='effect2'>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium alias omnis officia, dolore reprehenderit laboriosam, dolorem fugit, quis adipisci rem dolor. Ratione consequatur itaque incidunt atque.
                                </Typography>
                            </Box>
                        </div>
                        <Typography component="div" variant='h5' textAlign="left" py={1}>
                            Sumanth
                        </Typography>

                        <Box component="div" >
                            <Link href="/" sx={{ color: Colors.secondary }}><i className="fa-brands fa-twitter" style={{ fontSize: "20px", margin: "5px 25px 0px 0px" }} href="/">
                            </i></Link>
                            <Link href="/" sx={{ color: Colors.secondary }}>
                                <i className="fa-brands fa-linkedin-in" style={{ fontSize: "20px", margin: "5px 5px 0px 0px" }}></i>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container sx={{ padding: "5px 30px 5px 30px" }} spacing={3} mt={3}>
                    <Grid item xm={1} sm={6} md={3} lg={3} mb={8} mt={1}>
                        <Box className='cover' component="div">
                            <img src={"https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660627975/food-bang/order_knycmh.jpg"} alt="" width="100%" height="100%" />
                            <Box component="div" className='effect'>
                                <Typography component="body1" variant='p' className='effect2'>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium alias omnis officia, dolore reprehenderit laboriosam, dolorem fugit, quis adipisci rem dolor. Ratione consequatur itaque incidunt atque.
                                </Typography>
                            </Box>
                        </Box>
                        <Typography component="div" variant='h5' textAlign="left" py={1}>
                            Praveen
                        </Typography>

                        <Box component="div" >
                            <Link href="/" sx={{ color: Colors.secondary }}><i className="fa-brands fa-twitter" style={{ fontSize: "20px", margin: "5px 25px 0px 0px" }} href="/">
                            </i></Link>
                            <Link href="/" sx={{ color: Colors.secondary }}>
                                <i className="fa-brands fa-linkedin-in" style={{ fontSize: "20px", margin: "5px 5px 0px 0px" }}></i>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xm={1} sm={6} md={3} lg={3} mb={8} mt={1}  >
                        <div className='cover'>
                            <img src={"https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660627975/food-bang/order_knycmh.jpg"} alt="" width="100%" height="100%" />
                            <Box component="div" className='effect'>
                                <Typography component="body1" variant='p' className='effect2'>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium alias omnis officia, dolore reprehenderit laboriosam, dolorem fugit, quis adipisci rem dolor. Ratione consequatur itaque incidunt atque.
                                </Typography>
                            </Box>
                        </div>
                        <Typography component="div" variant='h5' textAlign="left" py={1}>
                            Akshay
                        </Typography>

                        <Box component="div" >
                            <Link href="/" sx={{ color: Colors.secondary }}><i className="fa-brands fa-twitter" style={{ fontSize: "20px", margin: "5px 25px 0px 0px" }} href="/">
                            </i></Link>
                            <Link href="/" sx={{ color: Colors.secondary }}>
                                <i className="fa-brands fa-linkedin-in" style={{ fontSize: "20px", margin: "5px 5px 0px 0px" }}></i>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xm={1} sm={6} md={3} lg={3} mb={8} mt={1}  >
                        <div className='cover'>
                            <img src={"https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660627975/food-bang/order_knycmh.jpg"} alt="" width="100%" height="100%" />
                            <Box component="div" className='effect'>
                                <Typography component="body1" variant='p' className='effect2'>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium alias omnis officia, dolore reprehenderit laboriosam, dolorem fugit, quis adipisci rem dolor. Ratione consequatur itaque incidunt atque.
                                </Typography>
                            </Box>
                        </div>
                        <Typography component="div" variant='h5' textAlign="left" py={1}>
                            Shalu
                        </Typography>
                        <Box component="div" >
                            <Link href="/" sx={{ color: Colors.secondary }}><i className="fa-brands fa-twitter" style={{ fontSize: "20px", margin: "5px 25px 0px 0px"}} href="/">
                            </i></Link>
                            <Link href="/" sx={{ color: Colors.secondary }}>
                                <i className="fa-brands fa-linkedin-in" style={{ fontSize: "20px", margin: "5px 5px 0px 0px" }}></i>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xm={1} sm={6} md={3} lg={3} mb={8} mt={1}  >
                        <div className='cover'>
                            <img src={"https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660627975/food-bang/order_knycmh.jpg"} alt="" width="100%" height="100%" />
                            <Box component="div" className='effect'>
                                <Typography component="body1" variant='p' className='effect2'>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium alias omnis officia, dolore reprehenderit laboriosam, dolorem fugit, quis adipisci rem dolor. Ratione consequatur itaque incidunt atque.
                                </Typography>
                            </Box>
                        </div>
                        <Typography component="div" variant='h5' textAlign="left" py={1}>
                            Dinakaran
                        </Typography>
                        <Box component="div" >
                            <Link href="/" sx={{ color: Colors.secondary }}><i className="fa-brands fa-twitter" style={{ fontSize: "20px", margin: "5px 25px 0px 0px" }} href="/">
                            </i></Link>
                            <Link href="/" sx={{ color: Colors.secondary }}>
                                <i className="fa-brands fa-linkedin-in" style={{ fontSize: "20px", margin: "5px 5px 0px 0px" }}></i>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Separator />
        </Stack>




    );

}

export default About;

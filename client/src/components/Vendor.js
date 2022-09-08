import { Grid, Stack, Typography } from '@mui/material';
import { Container, Button, CardActions, Box } from '@mui/material';
import React from 'react';
import Banner from './Banner';
import { Separator } from '../styles/theme';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import { CommonDescription, CommonHeader } from '../styles/about';
import SearchIcon from '@mui/icons-material/Add';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';


function Vendor() {
    return (
        <Container>
            <Box mt={10} sx={{ padding: "30px 30px 0px 30px" }}>
                <Typography variant='h4' >
                    Welcome Food-Bang
                </Typography>
            </Box>
            <Grid container sx={{padding: "30px 30px 0px 30px"}} spacing={3}>
                <Grid item md={4} sm={6} xm={12} lg={3}>
                    <Card elevation={3} >
                        <CardMedia
                            component="img"
                            height="140"
                            image={"https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660627973/food-bang/idly_y2r2yv.jpg"}
                            alt="Order Online"
                        />
                        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Idly
                            </Typography>
                            <Button size="small" color="secondary" sx={{ textAlign: "center" }}>
                                <input className="switch" type="checkbox" style={{ FontSize: "40px" }}></input>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item md={4} sm={6} xm={12} lg={3}>
                    <Card elevation={3} >
                        <CardMedia
                            component="img"
                            height="140"
                            image={"https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660627973/food-bang/dose_zrkipm.jpg"}
                            alt="Order Online"
                        />
                        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Dose
                            </Typography>
                            <Button size="small" color="secondary" sx={{ textAlign: "center" }}>
                                <input className="switch" type="checkbox" style={{ FontSize: "40px" }}></input>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item md={4} sm={6} xm={12} lg={3}>
                    <Card elevation={3} >
                        <CardMedia
                            component="img"
                            height="140"
                            image={"https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660627975/food-bang/pasta_lpe3tv.jpg"}
                            alt="Order Online"
                        />
                        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Pasta
                            </Typography>
                            <Button size="small" color="secondary" sx={{ textAlign: "center" }}>
                                <input className="switch" type="checkbox" style={{ FontSize: "40px" }}></input>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item md={4} sm={6} xm={12} lg={3}>
                    <Card elevation={3} >
                        <CardMedia
                            component="img"
                            height="140"
                            image={"https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660627972/food-bang/butter_j9ppi4.jpg"}
                            alt="Order Online"
                        />
                        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Butter Gravy
                            </Typography>
                            <Button size="small" color="secondary" sx={{ textAlign: "center" }}>
                                <input className="switch" type="checkbox" style={{ FontSize: "40px" }}></input>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item md={4} sm={6} xm={12} lg={3}>
                    <Card elevation={3} >
                        <CardMedia
                            component="img"
                            height="140"
                            image={"https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660627974/food-bang/parota_zo6zew.jpg"}
                            alt="Order Online"
                        />
                        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Parrota Curry
                            </Typography>
                            <Button size="small" color="secondary" sx={{ textAlign: "center" }}>
                                <input className="switch" type="checkbox" style={{ FontSize: "40px" }}></input>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item md={4} sm={6} xm={12} lg={3}>
                    <Card elevation={3} >
                        <CardMedia
                            component="img"
                            height="140"
                            image={"https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660627973/food-bang/cbiryani_juvtyn.jpg"}
                            alt="Order Online"
                        />
                        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Birayani
                            </Typography>
                            <Button size="small" color="secondary" sx={{ textAlign: "center" }}>
                                <input className="switch" type="checkbox" style={{ FontSize: "40px" }}></input>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item md={4} sm={6} xm={12} lg={3}>
                    <Card elevation={3} >
                        <CardMedia
                            component="img"
                            height="140"
                            image={"https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660627972/food-bang/bur_l3kgj9.jpg"}
                            alt="Order Online"
                        />
                        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Burger
                            </Typography>
                            <Button size="small" color="secondary" sx={{ textAlign: "center" }}>
                                <input className="switch" type="checkbox" style={{ FontSize: "40px" }}></input>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item md={4} sm={6} xm={12} lg={3}>
                    <Card elevation={3} >
                        <CardMedia
                            component="img"
                            height="140"
                            image={"https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660627971/food-bang/wow_dh7agw.jpg"}
                            alt="Order Online"
                        />
                        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Meals
                            </Typography>
                            <Button size="small" color="secondary" sx={{ textAlign: "center" }}>
                                <input className="switch" type="checkbox" style={{ FontSize: "40px" }}></input>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item md={4} sm={6} xm={12} lg={3}>
                    <Card elevation={3} >
                        <CardMedia
                            component="img"
                            height="140"
                            image={"https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660627976/food-bang/thali_bu4k7i.jpg"}
                            alt="Order Online"
                        />
                        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Thali Meals
                            </Typography>
                            <Button size="small" color="secondary" sx={{ textAlign: "center" }}>
                                <input className="switch" type="checkbox" style={{ FontSize: "40px" }}></input>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item md={4} sm={6} xm={12} lg={3}>
                    <Card elevation={3} >
                        <CardMedia
                            component="img"
                            height="140"
                            image={"https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660627975/food-bang/pizza_wipeay.jpg"}
                            alt="Order Online"
                        />
                        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Pizza
                            </Typography>
                            <Button size="small" color="secondary" sx={{ textAlign: "center" }}>
                                <input className="switch" type="checkbox" style={{ FontSize: "40px" }}></input>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item md={4} sm={6} xm={12} lg={3}>
                    <Card elevation={3} >
                        <CardMedia
                            component="img"
                            height="140"
                            image={"https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660627972/food-bang/biryani_lk0ft8.jpg"}
                            alt="Order Online"
                        />
                        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Mutton Biryani
                            </Typography>
                            <Button size="small" color="secondary" sx={{ textAlign: "center" }}>
                                <input className="switch" type="checkbox" style={{ FontSize: "40px" }}></input>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item md={4} sm={6} xm={12} lg={3}>
                    <Card elevation={3} >
                        <CardMedia
                            component="img"
                            height="140"
                            image={"https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660627974/food-bang/masalapuri_ue2yej.jpg"}
                            alt="Order Online"
                        />
                        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography gutterBottom variant="h5" component="div">
                            Masalapuri
                            </Typography>
                            <Button size="small" color="secondary" sx={{ textAlign: "center" }}>
                                <input className="switch" type="checkbox" style={{ FontSize: "40px" }}></input>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

            </Grid>

        </Container>
    );
}

export default Vendor;
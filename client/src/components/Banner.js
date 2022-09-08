import React, { useContext } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { BannerAction, BannerActionContainer, BannerContainer, BannerContent, BannerImgContainer, BannerTitle, HomeContent } from '../styles/banner';
import { Box, Container, Grid, Typography } from '@mui/material';
import style from '../styles/css/style.css'
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { GlobalState } from '../GlobalContext';
import { NavLink, useNavigate } from 'react-router-dom'

function Banner() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const data = useContext(GlobalState);
    const [isLogged] = data.authApi.isLogged;


    return (
        <BannerContainer>
            <Container sx={{ mt: 8 }}>
                <Grid container>
                    <Grid item md={6} sm={12} xm={12} lg={6}>
                        <BannerTitle>
                            Enjoy Our
                            Delicious Tender Cut Meats
                        </BannerTitle>
                        <BannerContent color="primary">
                            Discover the best meats & spread in Everwhere with the loved ones .....
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam officia eligendi corrupti velit repellat deleniti doloribus fugit vitae laborum modi placeat pariatur sit soluta alias et tenetur itaque, quam quidem.
                        </BannerContent>
                        <BannerActionContainer>
                            {
                                isLogged ? (<NavLink to={"/products"} style={{ textDecoration: "none" }}>
                                    <BannerAction variant='contained' size='large' color='secondary'>Go To Menu</BannerAction>
                                </NavLink>) : (<NavLink to={"/menulist"} style={{ textDecoration: "none" }}>
                                    <BannerAction variant='contained' size='large' color='secondary'>Go To Menu</BannerAction>
                                </NavLink>)
                            }
                        </BannerActionContainer>
                    </Grid>
                    <Grid item md={6} sm={12} xm={12} lg={6}>
                        <BannerImgContainer>
                            <img src={"https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660627973/food-bang/hero_dby2sz.png"} alt="" className='rotation' />
                        </BannerImgContainer>
                    </Grid>
                </Grid>
            </Container>
        </BannerContainer>
    );
}

export default Banner;
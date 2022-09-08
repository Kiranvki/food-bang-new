import React from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import { Colors, Separator } from '../styles/theme'
import { FooterButton, FooterContainer, FooterHeader, FooterTitle, FooterMainContainer, FooterDes, StyledTextField, ModListButton } from '../styles/footer';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';

function Footer() {
    return (
        <FooterMainContainer>
            <Container>
                <FooterContainer>
                    <FooterHeader>
                        Food-Bang
                    </FooterHeader>
                    <Typography sx={{ textAlign: "center", }} component="div" >
                        <FooterButton variant='outlined' color='secondary' startIcon={<img src={"https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660627973/food-bang/india_hqk6kr.png"} alt="" height="20px" />} endIcon={<KeyboardArrowDownIcon />}>India</FooterButton>

                        <Button variant='outlined' color='secondary' sx={{ color: "#fff", fontSize: "15px" }} startIcon={<LanguageIcon />} endIcon={<KeyboardArrowDownIcon />}>English</Button>
                    </Typography>
                </FooterContainer>

                <Grid container sx={{ padding: "30px 0px 30px 30px" }} spacing={3}>
                    <Grid item xs={12} sm={4} md={3} lg={3}>
                        <FooterTitle>
                            ABOUT FOOD BANG
                        </FooterTitle>
                        <FooterDes>
                            <List>
                                <ModListButton>
                                    Who we are
                                </ModListButton>
                                <ModListButton>
                                    Blog
                                </ModListButton >
                                <ModListButton>
                                    Work With Us
                                </ModListButton>
                                <ModListButton>
                                    Report Frud
                                </ModListButton>
                            </List>
                        </FooterDes>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3} lg={3}>
                        <FooterTitle>
                            contact
                        </FooterTitle>
                        <FooterDes>
                            <List>
                                <ModListButton>
                                    <i className="fa-solid fa-location-dot"></i>
                                    Karnataka,India
                                </ModListButton>
                                <ModListButton>
                                    <i className="fa-solid fa-phone"></i>
                                    +91 90666---15
                                </ModListButton>
                                <ModListButton>
                                    <i className="fa-solid fa-envelope"></i>
                                    Info@foodbang.com
                                </ModListButton>
                            </List>
                        </FooterDes>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3} lg={3}>
                        <FooterTitle>
                            FOR RESTAURANTS
                        </FooterTitle>
                        <FooterDes>
                            <List>
                                <ModListButton>
                                    Partner With Us
                                </ModListButton>
                                <ModListButton>
                                    Apps For You
                                </ModListButton>
                            </List>
                        </FooterDes>
                        {/* <FooterTitle>
                            news letter
                        </FooterTitle> */}
                        {/* <FooterDes>
                            <StyledTextField label="Your mail" InputLabelProps={{
                                style: { color: Colors.secondary },
                            }} focused InputProps={{
                                endAdornment: (
                                    <Button variant='outlined' color='secondary' sx={{ color: "white" }}>Signup</Button>
                                ),
                            }}>

                            </StyledTextField>
                        </FooterDes> */}


                        

                    </Grid>
                    <Grid item xs={12} sm={4} md={3} lg={3}>
                        <FooterTitle>
                            social links
                        </FooterTitle>
                        <FooterDes>
                            <Stack direction="row" spacing={2}>
                                <Avatar
                                    variant="outlined"
                                    sx={{
                                        bgcolor: Colors.primary, color: "black", "&:hover": {
                                            bgcolor: Colors.secondary, color: "white"
                                        }
                                    }}

                                >
                                    <TwitterIcon />
                                </Avatar>
                                <Avatar
                                    variant="outlined"
                                    sx={{
                                        bgcolor: Colors.primary, color: "black", "&:hover": {
                                            bgcolor: Colors.secondary, color: "white"
                                        }
                                    }}

                                >
                                    <LinkedInIcon />
                                </Avatar>
                                <Avatar
                                    variant="outlined"
                                    sx={{
                                        bgcolor: Colors.primary, color: "black", "&:hover": {
                                            bgcolor: Colors.secondary, color: "white"
                                        }
                                    }}
                                >
                                    <YouTubeIcon />
                                </Avatar>
                            </Stack>
                            <Stack direction="column" spacing={2}>
                                <img src={"https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660627973/food-bang/Google_dammg6.webp"} alt="Download in google" width="58%" height="100%" style={{ marginTop: "20px", marginBottom: "10px" }} />
                                <img src={"https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660627974/food-bang/Iphone_luf5zy.webp"} alt="Download in iphone" width="58%" height="100%" />
                            </Stack>
                        </FooterDes>
                    </Grid>
                </Grid>
                <Container>
                    <Separator />
                    <Divider sx={{ bgcolor: "white", padding: "0px 30px 0px 30px" }} />
                    <FooterDes>
                        By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2022 © FoodBang™ Ltd. All rights reserved.
                    </FooterDes>
                </Container>
            </Container>
        </FooterMainContainer >

    );
}

export default Footer;
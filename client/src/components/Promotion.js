import { Container, Grid, Typography, Box, Stack } from '@mui/material';
import React, { useState } from 'react';
import { CommonHeader } from '../styles/about';
import { PromContainer, PromContentContainer, PromImgContainer, PromImgContent, PromImgIcon, PromImgTitle, PromSubContainer, PromTitle, TabContainer } from '../styles/promotion';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import { Colors } from '../styles/theme';
// import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Add';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Box>{children}</Box>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


function Promotion() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Container>
            <PromContainer container>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <CommonHeader>
                        Most Popular Items
                    </CommonHeader>
                </Grid>
                <Grid item xs={12} sm={8} md={5} lg={5.5}>
                    <Box sx={{ width: '100%' }}>
                        
                        <TabContainer value={value} onChange={handleChange} sx={{ bgcolor: Colors.secondary }} variant="scrollable"
                                scrollButtons
                                allowScrollButtonsMobile>
                            <Tab label={<Box component="div" sx={{
                                display: "flex", flexDirection: "row", alignItems: "center"
                            }} >
                                <FreeBreakfastIcon sx={{ fontSize: "40px", color: "black" }} />
                                <Typography variant='body1' sx={{ textTransform: "capitalize" }} >
                                    Popular <br />
                                    <span style={{ fontWeight: "bold" }}>Breakfast</span>
                                </Typography>
                            </Box>} {...a11yProps(0)} sx={{ fontWeight: "bold" }} />
                            <Tab label={<Box component="div" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }} >
                                <LunchDiningIcon sx={{ fontSize: "40px", color: "black" }} />
                                <Typography variant='body1' sx={{ textTransform: "capitalize" }} >
                                    Special <br />
                                    <span style={{ fontWeight: "bold" }}>Lunch</span>
                                </Typography>
                            </Box>} {...a11yProps(1)} sx={{ fontWeight: "bold" }} />
                            <Tab label={<Box component="div" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <RestaurantIcon sx={{ fontSize: "40px", color: "black" }} />
                                <Typography variant='body1' sx={{ textTransform: "capitalize" }} >
                                    Lovely <br />
                                    <span style={{ fontWeight: "bold" }}>Dinner</span>
                                </Typography>
                            </Box>} {...a11yProps(2)} sx={{ fontWeight: "bold" }} />
                        </TabContainer>
                        {/* </PromSubContainer> */}
                        {/* </PromContentContainer> */}
                    </Box>
                </Grid>
            </PromContainer>

            <TabPanel value={value} index={0}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <PromImgContainer className='PromImgContainer'>
                        <img src={"https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660627973/food-bang/idly_y2r2yv.jpg"} alt="" className="PromImg" />
                            <PromImgTitle className='PromImgTitle'>
                                <PromImgContent >
                                    Idly
                                </PromImgContent>
                            </PromImgTitle>
                            <PromImgIcon className="PromImgIcon">
                                <IconButton><SearchIcon sx={{ fontSize: "25px", color: Colors.primary }} /></IconButton>
                                <IconButton><RemoveIcon sx={{ fontSize: "25px", color: Colors.primary }} /></IconButton>
                            </PromImgIcon>
                        </PromImgContainer>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <PromImgContainer className='PromImgContainer'>
                        <img src={"https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660627973/food-bang/dose_zrkipm.jpg"} alt="" className="PromImg" />
                            <PromImgTitle className='PromImgTitle'>
                                <PromImgContent >
                                    Dose
                                </PromImgContent>
                            </PromImgTitle>
                            <PromImgIcon className="PromImgIcon">
                                <IconButton><SearchIcon sx={{ fontSize: "25px", color: Colors.primary }} /></IconButton>
                                <IconButton><RemoveIcon sx={{ fontSize: "25px", color: Colors.primary }} /></IconButton>
                            </PromImgIcon>
                        </PromImgContainer>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <PromImgContainer className='PromImgContainer'>
                        <img src={"https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660627975/food-bang/pasta_lpe3tv.jpg"} alt="" className="PromImg" />
                            <PromImgTitle className='PromImgTitle'>
                                <PromImgContent >
                                    Pasta
                                </PromImgContent>
                            </PromImgTitle>
                            <PromImgIcon className="PromImgIcon">
                                <IconButton><SearchIcon sx={{ fontSize: "25px", color: Colors.primary }} /></IconButton>
                                <IconButton><RemoveIcon sx={{ fontSize: "25px", color: Colors.primary }} /></IconButton>
                            </PromImgIcon>
                        </PromImgContainer>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <PromImgContainer className='PromImgContainer'>
                        <img src={"https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660627972/food-bang/butter_j9ppi4.jpg"} alt="" className="PromImg" />
                            <PromImgTitle className='PromImgTitle'>
                                <PromImgContent >
                                    Palav
                                </PromImgContent>
                            </PromImgTitle>
                            <PromImgIcon className="PromImgIcon">
                                <IconButton><SearchIcon sx={{ fontSize: "25px", color: Colors.primary }} /></IconButton>
                                <IconButton><RemoveIcon sx={{ fontSize: "25px", color: Colors.primary }} /></IconButton>
                            </PromImgIcon>
                        </PromImgContainer>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <PromImgContainer className='PromImgContainer'>
                        <img src={"https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660627974/food-bang/parota_zo6zew.jpg"} alt="" className="PromImg" />
                            <PromImgTitle className='PromImgTitle'>
                                <PromImgContent >
                                    Chapathi
                                </PromImgContent>
                            </PromImgTitle>
                            <PromImgIcon className="PromImgIcon">
                                <IconButton><SearchIcon sx={{ fontSize: "25px", color: Colors.primary }} /></IconButton>
                                <IconButton><RemoveIcon sx={{ fontSize: "25px", color: Colors.primary }} /></IconButton>
                            </PromImgIcon>
                        </PromImgContainer>
                    </Grid>
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <PromImgContainer className='PromImgContainer'>
                        <img src={"https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660627973/food-bang/cbiryani_juvtyn.jpg"} alt="" className="PromImg" />
                            <PromImgTitle className='PromImgTitle'>
                                <PromImgContent >
                                    Biryani
                                </PromImgContent>
                            </PromImgTitle>
                            <PromImgIcon className="PromImgIcon">
                                <IconButton><SearchIcon sx={{ fontSize: "25px", color: Colors.primary }} /></IconButton>
                                <IconButton><RemoveIcon sx={{ fontSize: "25px", color: Colors.primary }} /></IconButton>
                            </PromImgIcon>
                        </PromImgContainer>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <PromImgContainer className='PromImgContainer'>
                        <img src={"https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660627972/food-bang/bur_l3kgj9.jpg"} alt="" className="PromImg" />
                            <PromImgTitle className='PromImgTitle'>
                                <PromImgContent >
                                    Burger
                                </PromImgContent>
                            </PromImgTitle>
                            <PromImgIcon className="PromImgIcon">
                                <IconButton><SearchIcon sx={{ fontSize: "25px", color: Colors.primary }} /></IconButton>
                                <IconButton><RemoveIcon sx={{ fontSize: "25px", color: Colors.primary }} /></IconButton>
                            </PromImgIcon>
                        </PromImgContainer>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <PromImgContainer className='PromImgContainer'>
                        <img src={"https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660627975/food-bang/pizza_wipeay.jpg"} alt="" className="PromImg" />
                            <PromImgTitle className='PromImgTitle'>
                                <PromImgContent >
                                    Pizza
                                </PromImgContent>
                            </PromImgTitle>
                            <PromImgIcon className="PromImgIcon">
                                <IconButton><SearchIcon sx={{ fontSize: "25px", color: Colors.primary }} /></IconButton>
                                <IconButton><RemoveIcon sx={{ fontSize: "25px", color: Colors.primary }} /></IconButton>
                            </PromImgIcon>
                        </PromImgContainer>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <PromImgContainer className='PromImgContainer'>
                        <img src={"https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660627972/food-bang/butter_j9ppi4.jpg"} alt="" className="PromImg" />
                            <PromImgTitle className='PromImgTitle'>
                                <PromImgContent >
                                    Butter-Curry
                                </PromImgContent>
                            </PromImgTitle>
                            <PromImgIcon className="PromImgIcon">
                                <IconButton><SearchIcon sx={{ fontSize: "25px", color: Colors.primary }} /></IconButton>
                                <IconButton><RemoveIcon sx={{ fontSize: "25px", color: Colors.primary }} /></IconButton>
                            </PromImgIcon>
                        </PromImgContainer>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <PromImgContainer className='PromImgContainer'>
                        <img src={"https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660627971/food-bang/wow_dh7agw.jpg"} alt="" className="PromImg" />
                            <PromImgTitle className='PromImgTitle'>
                                <PromImgContent >
                                    South Indian Meals
                                </PromImgContent>
                            </PromImgTitle>
                            <PromImgIcon className="PromImgIcon">
                                <IconButton><SearchIcon sx={{ fontSize: "25px", color: Colors.primary }} /></IconButton>
                                <IconButton><RemoveIcon sx={{ fontSize: "25px", color: Colors.primary }} /></IconButton>
                            </PromImgIcon>
                        </PromImgContainer>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <PromImgContainer className='PromImgContainer'>
                        <img src={"https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660627976/food-bang/thali_bu4k7i.jpg"} alt="" className="PromImg" />
                            <PromImgTitle className='PromImgTitle'>
                                <PromImgContent >
                                    Thali
                                </PromImgContent>
                            </PromImgTitle>
                            <PromImgIcon className="PromImgIcon">
                                <IconButton><SearchIcon sx={{ fontSize: "25px", color: Colors.primary }} /></IconButton>
                                <IconButton><RemoveIcon sx={{ fontSize: "25px", color: Colors.primary }} /></IconButton>
                            </PromImgIcon>
                        </PromImgContainer>
                    </Grid>
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <PromImgContainer className='PromImgContainer'>
                        <img src={"https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660627973/food-bang/cbiryani_juvtyn.jpg"} alt="" className="PromImg" />
                            <PromImgTitle className='PromImgTitle'>
                                <PromImgContent >
                                    Biryani
                                </PromImgContent>
                            </PromImgTitle>
                            <PromImgIcon className="PromImgIcon">
                                <IconButton><SearchIcon sx={{ fontSize: "25px", color: Colors.primary }} /></IconButton>
                                <IconButton><RemoveIcon sx={{ fontSize: "25px", color: Colors.primary }} /></IconButton>
                            </PromImgIcon>
                        </PromImgContainer>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <PromImgContainer className='PromImgContainer'>
                        <img src={"https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660627972/food-bang/bur_l3kgj9.jpg"} alt="" className="PromImg" />
                            <PromImgTitle className='PromImgTitle'>
                                <PromImgContent >
                                    Burger
                                </PromImgContent>
                            </PromImgTitle>
                            <PromImgIcon className="PromImgIcon">
                                <IconButton><SearchIcon sx={{ fontSize: "25px", color: Colors.primary }} /></IconButton>
                                <IconButton><RemoveIcon sx={{ fontSize: "25px", color: Colors.primary }} /></IconButton>
                            </PromImgIcon>
                        </PromImgContainer>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <PromImgContainer className='PromImgContainer'>
                        <img src={"https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660627975/food-bang/pizza_wipeay.jpg"} alt="" className="PromImg" />
                            <PromImgTitle className='PromImgTitle'>
                                <PromImgContent >
                                    Pizza
                                </PromImgContent>
                            </PromImgTitle>
                            <PromImgIcon className="PromImgIcon">
                                <IconButton><SearchIcon sx={{ fontSize: "25px", color: Colors.primary }} /></IconButton>
                                <IconButton><RemoveIcon sx={{ fontSize: "25px", color: Colors.primary }} /></IconButton>
                            </PromImgIcon>
                        </PromImgContainer>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <PromImgContainer className='PromImgContainer'>
                        <img src={"https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660627972/food-bang/butter_j9ppi4.jpg"} alt="" className="PromImg" />
                            <PromImgTitle className='PromImgTitle'>
                                <PromImgContent >
                                    Butter-Curry
                                </PromImgContent>
                            </PromImgTitle>
                            <PromImgIcon className="PromImgIcon">
                                <IconButton><SearchIcon sx={{ fontSize: "25px", color: Colors.primary }} /></IconButton>
                                <IconButton><RemoveIcon sx={{ fontSize: "25px", color: Colors.primary }} /></IconButton>
                            </PromImgIcon>
                        </PromImgContainer>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <PromImgContainer className='PromImgContainer'>
                        <img src={"https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660627971/food-bang/wow_dh7agw.jpg"} alt="" className="PromImg" />
                            <PromImgTitle className='PromImgTitle'>
                                <PromImgContent >
                                    South Indian Meals
                                </PromImgContent>
                            </PromImgTitle>
                            <PromImgIcon className="PromImgIcon">
                                <IconButton><SearchIcon sx={{ fontSize: "25px", color: Colors.primary }} /></IconButton>
                                <IconButton><RemoveIcon sx={{ fontSize: "25px", color: Colors.primary }} /></IconButton>
                            </PromImgIcon>
                        </PromImgContainer>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <PromImgContainer className='PromImgContainer'>
                        <img src={"https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660627976/food-bang/thali_bu4k7i.jpg"} alt="" className="PromImg" />
                            <PromImgTitle className='PromImgTitle'>
                                <PromImgContent >
                                    Thali
                                </PromImgContent>
                            </PromImgTitle>
                            <PromImgIcon className="PromImgIcon">
                                <IconButton><SearchIcon sx={{ fontSize: "25px", color: Colors.primary }} /></IconButton>
                                <IconButton><RemoveIcon sx={{ fontSize: "25px", color: Colors.primary }} /></IconButton>
                            </PromImgIcon>
                        </PromImgContainer>
                    </Grid>
                </Grid>
            </TabPanel>


        </Container >
    );
}

export default Promotion;
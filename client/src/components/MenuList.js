import { Container, Grid, Box, Stack } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { PromContainer, PromImgContainer, PromImgContent, PromImgIcon, PromImgTitle, TabContainer } from '../styles/promotion';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import { Colors, Separator } from '../styles/theme';
// import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Add';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import { CommonContainer, CommonDescription, CommonTitle, MainCont } from '../styles/about';
import Chip from '@mui/material/Chip';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { GlobalState } from '../GlobalContext';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';


function MenuList() {
    const [value, setValue] = useState(0);

    const data = useContext(GlobalState)

    const [products, setProducts] = data.productApi.products;
    const [curItems, setCurItems] = useState([])
    const [isUser] = data.authApi.isUser;
    const [isAdmin] = data.authApi.isAdmin;
    const [isLogged] = data.authApi.isLogged;
    const [categories, setCategories] = data.categoryApi.categories;
    const [token] = data.token

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    const filterResult = (catItem) => {
        // console.log('cate item =', catItem)
       
        if(catItem === "All") {
            setCurItems(products);
        } else {
            let result = products.filter((curData) => {
                return curData.category === catItem
            });
            console.log('filtered result =', result)
            setCurItems(result)
        }
    }

    const message=()=>{
        alert("Please login to add into cart")
    }


    useEffect(() => {
        filterResult("All")
    }, [products])

    return (
        <Stack>
            <CommonContainer>
                <CommonTitle>
                    Menu
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
                            href="/menulist"
                            aria-current="page"
                            fontWeight="bold"
                        >
                            Menu
                        </Link>
                    </Breadcrumbs>
                </CommonTitle>
            </CommonContainer>
            <Container>
                <Separator />
                <PromContainer container>
                    <Grid item xs={12} sm={8} md={6} lg={7}>
                        <Box sx={{ width: '100%' }}>
                            <TabContainer value={value} onChange={handleChange} indicatorColor="secondary" variant="scrollable"
                                scrollButtons
                                allowScrollButtonsMobile>
                                    <Tab label={<Box component="div" sx={{
                                    display: "flex", flexDirection: "row", alignItems: "center"
                                }} onClick={()=>filterResult("All")} >
                                    <Chip label="All" variant="outlined" sx={{
                                        "&:hover": {
                                            background: Colors.secondary,
                                            color: "white"
                                        }, fontWeight: "bold"
                                    }} />

                                </Box>} />
                                <Tab label={<Box component="div" sx={{
                                    display: "flex", flexDirection: "row", alignItems: "center"
                                }} onClick={()=>filterResult("chicken")} >
                                    <Chip label="Chicken" variant="outlined" sx={{
                                        "&:hover": {
                                            background: Colors.secondary,
                                            color: "white"
                                        }, fontWeight: "bold"
                                    }} />

                                </Box>} />
                                <Tab label={<Box component="div" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }} onClick={()=>filterResult("mutton")} >

                                    <Chip label="Mutton" variant="outlined" sx={{
                                        "&:hover": {
                                            background: Colors.secondary,
                                            color: "white"
                                        }, fontWeight: "bold"
                                    }} />

                                </Box>}  />
                                <Tab label={<Box component="div" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }} onClick={()=>filterResult("fish")}  >
                                    <Chip label="Fish & Seafood" variant="outlined" sx={{
                                        "&:hover": {
                                            background: Colors.secondary,
                                            color: "white"
                                        }, fontWeight: "bold"
                                    }} />

                                </Box>}  />
                            </TabContainer>
                        </Box>
                    </Grid>
                </PromContainer>
                <Box component="div" mt={2}>
                    <Grid container spacing={3}>
                        {
                            curItems && curItems.map((item, index) => {
                                return (
                                    <Grid item xs={12} sm={12} md={4} lg={4} key={index}>
                                        <PromImgContainer className='PromImgContainer'>
                                            <img src={item.image.url} alt="" className="PromImg" />
                                            <PromImgTitle className='PromImgTitle'>
                                                <PromImgContent >
                                                    {item.title}
                                                </PromImgContent>
                                                <PromImgContent >
                                                    &#8377; {item.price}
                                                </PromImgContent>
                                            </PromImgTitle>
                                            <PromImgIcon className="PromImgIcon">
                                               <NavLink to={"/product/details/:id"}><IconButton color='primary' onClick={()=>message()}><ShoppingCartIcon sx={{ color:"#fff"}}></ShoppingCartIcon></IconButton></NavLink>
                                            </PromImgIcon>
                                        </PromImgContainer>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Box>




            </Container >
        </Stack>


    );

}

export default MenuList;
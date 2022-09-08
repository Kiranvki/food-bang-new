import React, { useContext, useEffect, useState } from 'react';
import { Grid, IconButton, Stack, Container, Box } from '@mui/material';
import { GlobalState } from '../../../GlobalContext';
import Product from '../products/Product';
import { Colors, CommSeparator, Separator } from '../../../styles/theme';
import { CommonHeader } from '../../../styles/about';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Chip from '@mui/material/Chip';
import { PromContainer, TabContainer } from '../../../styles/promotion';
import Tab from '@mui/material/Tab';




function AdminProducts(props) {
    const data = useContext(GlobalState)
    const [products, setProducts] = data.productApi.products;
    const [isUser] = data.authApi.isUser;
    const [isAdmin] = data.authApi.isAdmin
    const [isLogged] = data.authApi.isLogged

    const [token] = data.token
    const navigate = useNavigate()
    const [value, setValue] = useState(0);
    const [curItems, setCurItems] = useState([])


    const delHandler = async (id) => {
        if (window.confirm(`Are you sure to delete product?`)) {
            try {
                let product = await axios.get(`/api/v1/product/get/${id}`)
                if (!product) {
                    toast.error('no product found')
                } else {
                    // delete image
                    axios.post(`/api/v1/image/product/destroy`, { public_id: product.public_id }, {
                        headers: { Authorization: token }
                    })
                    await axios.delete(`/api/v1/product/delete/${id}`, {
                        headers: { Authorization: token }
                    })
                        .then(res => {
                            toast.success("Product deleted succssfully");
                            navigate("/products")
                            window.location.reload();

                        }).catch(err => toast.error(err.message))
                }
            } catch (err) {
                toast.error(err.message)
            }
        } else {
            toast.warning('delete terminated')
        }
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const filterResult = (catItem) => {
        // console.log('cate item =', catItem)

        if (catItem === "All") {
            setCurItems(products);
        } else {
            let result = products.filter((curData) => {
                return curData.category === catItem
            });
            console.log('filtered result =', result)
            setCurItems(result)
        }
    }

    useEffect(() => {
        filterResult("All")
    }, [products])

    return (
        <Stack>
            <CommSeparator />
            <Container>
                <CommonHeader align='center'>
                    Menu
                </CommonHeader>
                <PromContainer container>
                    <Grid item xs={12} sm={8} md={6} lg={7}>
                        <Box sx={{ width: '100%' }}>
                            <TabContainer value={value} onChange={handleChange} indicatorColor="secondary" variant="scrollable"
                                scrollButtons
                                allowScrollButtonsMobile>
                                <Tab label={<Box component="div" sx={{
                                    display: "flex", flexDirection: "row", alignItems: "center"
                                }} onClick={() => filterResult("All")} >
                                    <Chip label="All" variant="outlined" sx={{
                                        "&:hover": {
                                            background: Colors.secondary,
                                            color: "white"
                                        }, fontWeight: "bold"
                                    }} />

                                </Box>} />
                                <Tab label={<Box component="div" sx={{
                                    display: "flex", flexDirection: "row", alignItems: "center"
                                }} onClick={() => filterResult("chicken")} >
                                    <Chip label="Chicken" variant="outlined" sx={{
                                        "&:hover": {
                                            background: Colors.secondary,
                                            color: "white"
                                        }, fontWeight: "bold"
                                    }} />

                                </Box>} />
                                <Tab label={<Box component="div" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }} onClick={() => filterResult("mutton")} >

                                    <Chip label="Mutton" variant="outlined" sx={{
                                        "&:hover": {
                                            background: Colors.secondary,
                                            color: "white"
                                        }, fontWeight: "bold"
                                    }} />

                                </Box>} />
                                <Tab label={<Box component="div" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }} onClick={() => filterResult("fish")}  >
                                    <Chip label="Fish & Seafood" variant="outlined" sx={{
                                        "&:hover": {
                                            background: Colors.secondary,
                                            color: "white"
                                        }, fontWeight: "bold"
                                    }} />

                                </Box>} />
                            </TabContainer>
                        </Box>
                    </Grid>
                </PromContainer>

                <Grid container sx={{ padding: "30px 30px 5px 30px" }} spacing={3}>
                    {
                        curItems && curItems.map((item, index) => {
                            return (
                                <Product key={index} {...item} isUser={isUser} isAdmin={isAdmin} del={delHandler} />
                            )
                        })
                    }
                </Grid>
            </Container>

        </Stack>

    );
}

export default AdminProducts;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Grid, IconButton, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Badge from '@mui/material/Badge';
import Link from '@mui/material/Link';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import PropTypes from 'prop-types';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { PromContainer, PromContentContainer, PromImgContainer, PromImgContent, PromImgIcon, PromImgTitle, PromSubContainer, PromTitle, TabContainer } from "../../../styles/promotion";


const noImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsNGGjrfSqqv8UjL18xS4YypbK-q7po_8oVQ&usqp=CAU";

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


function UserProduct(props) {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const {
        _id,
        title,
        price,
        image,
        desc,
        stock,
        category,
        quantity,
        rating,
        isAdmin,
        isUser,
        del,
    } = props;

    return (
        <React.Fragment>
            {
                <TabPanel value={value} index={0}>
                    {
                        <NavLink
                            to={`/product/details/${_id}`}
                            style={{ textDecoration: "none" }}
                        >
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={12} md={12} lg={4}>
                                    <PromImgContainer className='PromImgContainer'>
                                        <img src={image.url ? (image.url) : ({ noImage })} alt="" className="PromImg" />
                                        <PromImgTitle className='PromImgTitle'>
                                            <PromImgContent >
                                                {title}
                                            </PromImgContent>
                                            <PromImgContent >
                                                &#8377;{price}
                                            </PromImgContent>
                                        </PromImgTitle>
                                        <PromImgIcon className="PromImgIcon">
                                            <IconButton color='primary'><ShoppingCartIcon sx={{ color: "#fff" }} /> </IconButton>
                                        </PromImgIcon>
                                    </PromImgContainer>
                                </Grid>
                            </Grid>
                        </NavLink>
                    }
                </TabPanel>
                   
            }


        </React.Fragment >
    );
}

export default UserProduct;
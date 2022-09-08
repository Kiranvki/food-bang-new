import React from "react";
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


const noImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsNGGjrfSqqv8UjL18xS4YypbK-q7po_8oVQ&usqp=CAU";

function Product(props) {
    const {
        _id,
        title,
        price,
        image,
        desc,
        stock,
        quantity,
        rating,
        isAdmin,
        isUser,
        del,
    } = props;

    return (
        <React.Fragment>
            {
                stock === 0 ? null : (
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Card elevation={8}>
                            <NavLink
                                to={`/product/details/${_id}`}
                                style={{ textDecoration: "none" }}
                            >
                                <Badge badgeContent={<StarOutlineIcon />} color="secondary" sx={{ position: "absolute" }}></Badge>
                                <CardMedia
                                    component="img"
                                    alt="No image Found"
                                    height="200"
                                    image={image.url ? (image.url) : ({ noImage })}
                                >
                                </CardMedia>
                            </NavLink>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" mb={3}>
                                    {title}
                                </Typography>
                                {/* <Typography gutterBottom variant="body1" component="div" mb={2}>
                                    {desc}
                                </Typography> */}
                                <Typography gutterBottom variant="body1" component="div" >
                                    <strong>Net Wt:</strong> {quantity}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }}>
                                <Box component="div" px={1}>
                                    <Typography variant="body1" component="div" my={1}>
                                        <strong>MRP:</strong> &#8377;{price}
                                    </Typography>
                                </Box>
                                <Box component="div" sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                                    {isAdmin ? (
                                        <Box component="div" sx={{
                                            display: "flex", justifyContent: "space-around", alignItems: "center"
                                        }} >
                                            <NavLink to={`/product/update/${_id}`}><IconButton variant="outlined" color="secondary" sx={{ marginX: "8px" }} >
                                                <EditIcon />
                                            </IconButton></NavLink>
                                            <IconButton variant="outlined" color="secondary" sx={{ marginX: "8px" }} onClick={() => del(_id)} >
                                                <DeleteIcon />
                                            </IconButton>
                                        </Box>
                                    ) : null}
                                </Box>
                            </CardActions>
                        </Card>
                    </Grid>
                )
            }
        </React.Fragment >
    );
}

export default Product;
import React, { useContext, useState } from 'react';
import { Grid, Stack, Typography, Container, Box, Avatar } from '@mui/material';
import { CommSeparator, Separator, theme } from '../../../styles/theme';
import { GlobalState } from '../../../GlobalContext';
import { CommonHeader } from '../../../styles/about';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import { Slide } from '@mui/material';
import { NavLink } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';


function Profile() {
    const data = useContext(GlobalState);
    const [user] = data.authApi.userData;
    const [isUser] = data.authApi.isUser;
    const [allUsers] = data.authApi.allUsers
    const [editableUser, setEditableUser] = useState(false)

    const [isEdit, setIsEdit] = useState(false)

    const toggleEdit = (userId) => {
        let user = allUsers.find(item => item._id === userId)
        setEditableUser(user)
    }
    const cancelEdit = () => {
        setIsEdit(false)
    }

    return (
        <Stack>
            <CommSeparator />
            <Container>
                <CommonHeader textAlign="center">
                    Profile-Info
                </CommonHeader>
                <Separator />
                <Grid container sx={{ padding: "30px 30px 0px 30px" }} spacing={3}>
                    <Grid item xs={12} sm={12} md={6} lg={6} display="flex" justifyContent="flex-end" alignItems="center" sx={{[theme.breakpoints.down("md")]:{
                        display:"flex",
                        justifyContent:"center"
                    }}}>
                        <Card sx={{ maxWidth: 345 }} elevation={0}>
                            <CardMedia component="img"
                                height="400"
                                image={
                                    user.image ? (user.image.url) :
                                        (
                                            <h5 className="text-muted">No-Image</h5>
                                        )
                                }
                            >
                            </CardMedia>
                            <CardContent>
                                <CommonHeader textAlign="center" sx={{ textTransform: "uppercase" }}>
                                    {user.name}
                                </CommonHeader>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Slide direction='left' in={true} timeout={1000}>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Card elevation={2} >
                                <CardContent>
                                    <Typography gutterBottom variant="h4" component="div" mb={3} textAlign="center" >
                                        <strong>Details</strong>
                                    </Typography>
                                    <Typography gutterBottom variant="h6" component="div" mb={3} >
                                        <strong>Id No:</strong> {user._id}
                                    </Typography>
                                    <Typography gutterBottom variant="h6" component="div" mb={3}  >
                                        <strong>Email:</strong> {user.email}
                                    </Typography>
                                    <Typography gutterBottom variant="h6" component="div" mb={3}  >
                                        <strong>Mobile No:</strong> {user.mobile}
                                    </Typography>
                                    <Typography gutterBottom variant="h6" component="div" mb={4}   >
                                        <strong>Role:</strong> {user.role}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Box component="div" sx={{ display: "flex", justifyContent: "center", alignItems: "center"}} mx={1}>
                                        <NavLink to={`/profile/update/${user._id}`} style={{textDecoration:"none"}}>
                                            <Button variant='contained' color='secondary' sx={{fontWeight:"bold"}} endIcon={<img style={{height:"30px"}}  src="https://res.cloudinary.com/dkz3uzlnp/image/upload/v1662459391/food-bang/245-edit-document-outline_1_lcv7ar.gif" />} >
                                                Profile Edit
                                            </Button>
                                        </NavLink>
                                    </Box>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Slide>
                </Grid>
            </Container>
        </Stack>

    );
}

export default Profile;
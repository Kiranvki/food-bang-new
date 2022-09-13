import React, { useContext, useState } from 'react';
import { AppBarContainer, DrawerCloseButton } from '.';
import { Box, } from '@mui/material';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, useNavigate } from 'react-router-dom'
import { AppBarHeader, MyList, AdminAppBarContainer } from '.';
import SearchIcon from '@mui/icons-material/Search';
import Action from './Action'
import CloseIcon from '@mui/icons-material/Close';
import { GlobalState } from '../../GlobalContext';
import axios from 'axios'
import { toast } from 'react-toastify';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import CachedIcon from '@mui/icons-material/Cached';
import GroupIcon from '@mui/icons-material/Group';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Link from '@mui/material/Link';
import { Colors } from '../theme';
import FoodBankOutlinedIcon from '@mui/icons-material/FoodBankOutlined';


function AppBarMobile({ matches }) {

    const context = useContext(GlobalState)
    const [isLogged, setIsLogged] = context.authApi.isLogged;
    const [isAdmin, setIsAdmin] = context.authApi.isAdmin;
    const [isUser, setIsUser] = context.authApi.isUser;
    const [anchorEl, setAnchorEl] = useState(null);

    const navigate = useNavigate();

    const { setShowSearchBar } = context

    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const drawerClose = () => {
        setDrawerOpen(false)
    }

    const AppMobileDrawer = (
        <Box component="div">
            <List>
                <ListItemButton onClick={drawerClose}>
                    <ListItemText ><NavLink to={"/home"} style={{ color: "white", textDecoration: "none" }}>Home</NavLink></ListItemText>
                </ListItemButton >
                <Divider variant='middle' />
                <ListItemButton onClick={drawerClose}>
                    <ListItemText><NavLink to={"/about"} style={{ color: "white", textDecoration: "none" }}>About</NavLink></ListItemText>
                </ListItemButton>
                <Divider variant='middle' />
                <ListItemButton onClick={drawerClose}>
                    <ListItemText><NavLink to={"/menulist"} style={{ color: "white", textDecoration: "none" }}>Menu</NavLink></ListItemText>
                </ListItemButton>
                <Divider variant='middle' />
                <ListItemButton onClick={drawerClose}>
                    <ListItemText><NavLink to={"/login"} style={{ color: "white", textDecoration: "none" }}>Login</NavLink></ListItemText>
                </ListItemButton>
                <Divider variant='middle' />
                <ListItemButton onClick={drawerClose}>
                    <ListItemText><NavLink to={"/signup"} style={{ color: "white", textDecoration: "none" }}>SignUp</NavLink></ListItemText>
                </ListItemButton>
            </List>
        </Box>
    )
    const logoutUser = async () => {
        if (window.confirm(`Are you sure to logout`)) {
            await axios.get(`/api/v1/auth/logout`);
            localStorage.clear();
            if (isAdmin) {
                setIsAdmin(false);
            }
            if (isUser) {
                setIsUser(false);
            }
            setIsLogged(false);
            toast.success('Successfully Logout')
            navigate('/')
        } else {
            toast.warning('logout terminated')
        }
    }

    const dashNavigate = () => {
        navigate('/admin/dashboard')
    }

    const commonRoute = (props) => {

        const open = Boolean(anchorEl);
        const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
            setAnchorEl(null);
        };

        return (
            <AdminAppBarContainer>
                <AppBarHeader>
                    <Link href="home">
                        <IconButton
                            sx={{ display: { xs: "block", sm: 'block', md: "block" } }}
                        >
                            <FoodBankOutlinedIcon
                                sx={{ color: "#fa7e1e", fontSize: "30px" }}
                            />
                        </IconButton>
                    </Link>
                    <Link href="home" sx={{ textDecoration: "none", color: Colors.secondary, fontSize: "20px", marginY: "auto" }}>Food-Bang</Link>
                </AppBarHeader>
                <Box>
                    <MyList type="row">
                        <NavLink to={"/home"} className="ModNav">Home</NavLink>
                        <Button
                            id="basic-button"
                            onClick={handleClick}
                            endIcon={<KeyboardArrowDownIcon />}
                            sx={{ marginRight: isUser ? "0px" : "0px", fontSize: 20, marginTop: "5px", textTransform: "capitalize" }}
                        >
                            Accounts
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                        >

                            {/* {
                                    isUser ? <Button size='small' startIcon={<DashboardIcon style={{ color: Colors.secondary, fontSize: "25px" }} />}><NavLink to={`/user/dashboard`} style={{ textDecoration: "none", textTransform: "capitalize", fontSize: "15px", color: "black", fontWeight: "bold" }}>UserDashboard</NavLink></Button> : null
                                } */}
                            {/* {
                                    isAdmin ? <Button size='small' startIcon={<DashboardIcon style={{ color: Colors.secondary, fontSize: "25px" }} />}><NavLink to={`/admin/dashboard`} style={{ textDecoration: "none", textTransform: "capitalize", fontSize: "15px", color: "black", fontWeight: "bold" }}>AdminDashboard</NavLink></Button> : null
                                } */}
                            {
                                isAdmin ?
                                    <NavLink to={`/admin/dashboard`} style={{ textDecoration: "none" }}>
                                        <MenuItem onClick={handleClose} color="error">
                                            <Button size='medium' startIcon={<DashboardIcon sx={{ color: Colors.secondary, fontSize: "25px" }} />} sx={{ color: "black", textTransform: "capitalize", my: 'auto', fontSize: "15px", fontWeight: "bold" }}>AdminDashboard</Button>
                                        </MenuItem></NavLink> : null
                            }

                            <NavLink to={`/profile`} style={{ textDecoration: "none" }}>
                                <MenuItem onClick={handleClose}>
                                    <Button size='small' sx={{ color: "black", textTransform: "capitalize", my: 'auto', fontSize: "15px", fontWeight: "bold" }} startIcon={<AccountCircleIcon style={{ color: Colors.secondary, fontSize: "25px" }} />}>Profile</Button>
                                </MenuItem>
                            </NavLink>

                            <NavLink to={`/products`} style={{ textDecoration: "none" }}>
                                <MenuItem onClick={handleClose}><Button sx={{ color: "black", textTransform: "capitalize", my: 'auto', fontSize: "15px", fontWeight: "bold" }} size='small' startIcon={<ListAltIcon style={{ color: Colors.secondary, fontSize: "25px" }} />}>Menu</Button></MenuItem>
                            </NavLink>

                            {
                                isAdmin ? (
                                    <NavLink to={`/users`} style={{ textDecoration: "none" }}>
                                        <MenuItem onClick={handleClose}>
                                            <Button size='small' sx={{ color: "black", textTransform: "capitalize", my: 'auto', fontSize: "15px", fontWeight: "bold" }} startIcon={<GroupIcon style={{ color: Colors.secondary, fontSize: "25px" }} />}>Users</Button>
                                        </MenuItem>
                                    </NavLink>) : null
                            }

                            <NavLink to={`/orders`} style={{ textDecoration: "none" }}>
                                <MenuItem onClick={handleClose}>
                                    <Button size='small' sx={{ color: "black", textTransform: "capitalize", my: 'auto', fontSize: "15px", fontWeight: "bold" }} startIcon={<CachedIcon style={{ color: Colors.secondary, fontSize: "25px" }} />}>Orders</Button>
                                </MenuItem></NavLink>

                            <NavLink to={`/`} onClick={logoutUser} style={{ textDecoration: "none" }}>
                                <MenuItem onClick={handleClose}>
                                    <Button size='small' sx={{ color: "black", textTransform: "capitalize", my: 'auto', fontSize: "15px", fontWeight: "bold" }} startIcon={<LogoutIcon style={{ color: Colors.secondary, fontSize: "25px" }} />}>Logout</Button>
                                </MenuItem>
                            </NavLink>
                        </Menu>
                        <Box>
                            {
                                isAdmin ? null : <Action matches={matches} />
                            }
                        </Box>
                    </MyList>
                </Box>
            </AdminAppBarContainer >

        )
    }
    return (
        <>
            {
                isLogged ? null : (drawerOpen && (<DrawerCloseButton onClick={() => setDrawerOpen(false)}><CloseIcon sx={{ fontSize: "2.5rem", color: "white" }} /></DrawerCloseButton>))
            }

            <AppBarContainer>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ display: { sm: 'block' } }}
                    onClick={handleDrawerToggle}
                >
                    <MenuIcon sx={{ color: "#fff" }} />
                </IconButton>
                <AppBarHeader justifyContent="center">
                    <NavLink to={"/food-bang"} className="MobileNav" style={{ textDecoration: "none", color: "#fa7e1e", textAlign: "center" }}>Food-Bang</NavLink>
                </AppBarHeader>

                {
                    isLogged ? commonRoute() : (<IconButton onClick={() => setShowSearchBar(true)}>
                        <SearchIcon sx={{ color: "#fff", mr: 3 }} />
                    </IconButton>)
                }


                {
                    isAdmin ? null : <Action matches={matches} />
                }

                {
                    isLogged ? null : (<Drawer
                        variant="temporary"
                        open={drawerOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {AppMobileDrawer}
                    </Drawer>)
                }
            </AppBarContainer>
        </>
    );
}



export default AppBarMobile;
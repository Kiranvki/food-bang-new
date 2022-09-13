import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { NavLink, useNavigate } from 'react-router-dom'
import FoodBankOutlinedIcon from '@mui/icons-material/FoodBankOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Action from './Action'
import { AppBarContainer, AppBarHeader, MyList, AdminAppBarContainer } from '.';
import { GlobalState, useGlobalState } from '../../GlobalContext';
import Link from '@mui/material/Link';
import { Colors } from '../theme';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import CachedIcon from '@mui/icons-material/Cached';
import GroupIcon from '@mui/icons-material/Group';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Badge from '@mui/material/Badge';


function AppBarDesktop({ matches }) {

  const context = useContext(GlobalState);

  const { setShowSearchBar } = context

  const [isLogged, setIsLogged] = context.authApi.isLogged;
  const [isAdmin, setIsAdmin] = context.authApi.isAdmin;
  const [isUser, setIsUser] = context.authApi.isUser;
  const [cart, setCart] = context.authApi.cart;
  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();

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
              sx={{ display: { xs: "none", sm: 'block', md: "block" } }}
            >
              <FoodBankOutlinedIcon
                sx={{ color: "#fa7e1e", fontSize: "30px" }}
              />

            </IconButton>
          </Link>
          <Link href="home" sx={{ textDecoration: "none", color: Colors.secondary }}>Food-Bang</Link>
        </AppBarHeader>
        <Box>
          <MyList type="row">
            <NavLink to={"/home"} className="ModNav">Home</NavLink>
            <Button
              id="basic-button"
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
              sx={{ marginRight: isUser ? "0px" : "10px", fontSize: 20, marginTop: "5px", textTransform: "capitalize" }}
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
              {
                isAdmin ?
                  <NavLink to={`/admin/dashboard`} style={{ textDecoration: "none" }}>
                    <MenuItem onClick={handleClose}>
                      <Button size='small' sx={{ color: "black", textTransform: "capitalize", my: 'auto', fontSize: "15px", fontWeight: "bold" }} startIcon={<DashboardIcon style={{ color: Colors.secondary, fontSize: "25px" }} />}>AdminDashboard</Button>
                    </MenuItem></NavLink> : null
              }

              <NavLink to={`/profile`} style={{ textDecoration: "none" }}>
                <MenuItem onClick={handleClose}>
                  <Button size='small' sx={{ color: "black", textTransform: "capitalize", my: 'auto', fontSize: "15px", fontWeight: "bold" }} startIcon={<AccountCircleIcon style={{ color: Colors.secondary, fontSize: "25px" }} />}>Profile</Button>
                </MenuItem>
              </NavLink>

              <NavLink to={`/products`} style={{ textDecoration: "none" }}>
                <MenuItem onClick={handleClose}><Button size='small' sx={{ color: "black", textTransform: "capitalize", my: 'auto', fontSize: "15px", fontWeight: "bold" }} startIcon={<ListAltIcon style={{ color: Colors.secondary, fontSize: "25px" }} />}>Menu</Button></MenuItem>
              </NavLink>

              {
                isAdmin ? (<NavLink to={`/users`} style={{ textDecoration: "none" }}>
                  <MenuItem onClick={handleClose}>
                    <Button size='small' sx={{ color: "black", textTransform: "capitalize", my: 'auto', fontSize: "15px", fontWeight: "bold" }} startIcon={<GroupIcon style={{ color: Colors.secondary, fontSize: "25px" }} />}>Users</Button>
                  </MenuItem>
                </NavLink>) : null
              }

              {
                isAdmin ?
                  (
                    <NavLink to={`/admin/allOrders`} style={{ textDecoration: "none" }}>
                      <MenuItem onClick={handleClose}>
                        <Button size='small' sx={{ color: "black", textTransform: "capitalize", my: 'auto', fontSize: "15px", fontWeight: "bold" }} startIcon={<CachedIcon style={{ color: Colors.secondary, fontSize: "25px" }} />}>Orders</Button>
                      </MenuItem>
                    </NavLink>) : (
                    <NavLink to={`/orders`} style={{ textDecoration: "none" }}>
                      <MenuItem onClick={handleClose}>
                        <Button size='small' sx={{ color: "black", textTransform: "capitalize", my: 'auto', fontSize: "15px", fontWeight: "bold" }} startIcon={<CachedIcon style={{ color: Colors.secondary, fontSize: "25px" }} />}>Orders</Button>
                      </MenuItem>
                    </NavLink>)
              }
              <NavLink to={`/`} onClick={logoutUser} style={{ textDecoration: "none" }}>
                <MenuItem onClick={handleClose}>
                  <Button size='small' sx={{ color: "black", textTransform: "capitalize", my: 'auto', fontSize: "15px", fontWeight: "bold" }} startIcon={<LogoutIcon style={{ color: Colors.secondary, fontSize: "25px" }} />}>Logout</Button>
                </MenuItem>
              </NavLink>
            </Menu>
            <Box>

              {
                isAdmin ? null : <NavLink to={`/product/cart`} style={{ textDecoration: "none" }}><Action matches={matches} /></NavLink>
              }
            </Box>
          </MyList>
        </Box>
      </AdminAppBarContainer >
    )
  }

  return (

    <AppBarContainer>
      <AppBarHeader>
        <Link href="home">
          <IconButton
            sx={{ display: { xs: "none", sm: 'block', md: "block" } }}
          >
            <FoodBankOutlinedIcon
              sx={{ color: "#fa7e1e", fontSize: "30px" }}
            />
            {/* <img src={"https://res.cloudinary.com/dkz3uzlnp/image/upload/v1662442810/food-bang/1600-knife-outline_ovwxgb.gif"} alt="" height={50} /> */}

          </IconButton>
        </Link>
        <Link href="home" sx={{ textDecoration: "none", color: Colors.secondary }}>Food-Bang</Link>
      </AppBarHeader>
      {
        isLogged ? commonRoute() : (
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <MyList sx={{ flexGrow: 3 }} type="row">
              <NavLink to={"/home"} className="ModNav">Home</NavLink>
              <NavLink to={"/about"} className="ModNav">About</NavLink>
              <NavLink to={"/menulist"} className="ModNav">Menu</NavLink>
              <NavLink to={"/login"} className="ModNav">Login</NavLink>
              <NavLink to={"/signup"} className="ModNav">Sign Up</NavLink>
              <ListItemButton sx={{ justifyContent: "center" }}>
                <Divider orientation='vertical' flexItem sx={{ bgcolor: "#fff" }} />
                <ListItemIcon
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: "4px"
                  }}
                  onClick={() => setShowSearchBar(true)}
                >
                  <SearchIcon sx={{ color: "#fff" }} />
                </ListItemIcon>
              </ListItemButton>
              {/* <Action matches={matches} /> */}
            </MyList>
          </Box>
        )
      }

    </AppBarContainer>
  )
}


export default AppBarDesktop;


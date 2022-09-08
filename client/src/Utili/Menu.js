import React, { useContext, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { AppBarContainer, AppBarHeader, ModNav, MyList } from '../styles/appbar';
import AppBarMobile from '../styles/appbar/AppBarMobile';
import AppBarDesktop from '../styles/appbar/AppBarDesktop';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { NavLink, useNavigate } from 'react-router-dom'
import { GlobalState } from '../GlobalContext';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import style from '../styles/css/style.css'


function MenuBar(props) {

  const context = useContext(GlobalState);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));


  return (
    <>
      {matches ? <AppBarMobile matches={matches} /> : <AppBarDesktop matches={matches} sx={{ position: "fixed" }} />}
    </>
  )
}


export default MenuBar;


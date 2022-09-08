import React, { useContext, useState } from 'react';
import { MyList } from '.';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Divider } from '@mui/material';
import { ActionIconContainerDesktop, ActionIconContainerMobile, AppBarContainer, AppBarHeader } from '.';
import { GlobalState } from '../../GlobalContext';
import Badge from '@mui/material/Badge';
import { NavLink, useNavigate } from 'react-router-dom'
import { Colors } from '../theme';


function Action({ matches }) {
    const context = useContext(GlobalState);
    const Component = matches ? ActionIconContainerMobile : ActionIconContainerDesktop;

    const [cart, setCart] = context.authApi.cart;


    return (
        <Component>
            <MyList type='row'>
                <ListItemButton sx={{ justifyContent: "center" }}>
                    <Divider orientation='vertical' flexItem sx={{ display: { sm: "none", xs: "none", md: "block" }, bgcolor: 'white' }} />
                    <ListItemIcon
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            paddingTop: "4px"
                        }} >
                        <Badge
                            color="error"
                            badgeContent={cart.length > 0 ? cart.length : 0}
                        >
                            <NavLink to={"/product/cart"}><ShoppingCartIcon sx={{color:{xs:"gray",lg:"white"}}}/></NavLink>
                        </Badge>
                    </ListItemIcon>
                </ListItemButton>
            </MyList>

        </Component>
    );
}

export default Action;
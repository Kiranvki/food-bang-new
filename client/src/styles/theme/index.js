import { createTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { Box, List, ListItemText,Button, Toolbar } from "@mui/material";

export const Colors = {
    primary: "#fff",
    secondary: "#fa7e1e",
    white: "#fff",
    black: "#000",
    gray:"#666565",
    light:"rgba(250, 126, 30,0.8)",
    
}

export const Separator = styled(Box)(() => ({
    width:"100%",
    margin:"2.5% 0%",
    

}));

export const CommSeparator = styled(Toolbar)(({theme}) => ({
    [theme.breakpoints.down('sm')]:{
        margin:"5% 0%",
    },
    

}));


export const theme = createTheme({
    palette: {
        primary: {
            main: Colors.primary
        },
        secondary:{
            main:Colors.secondary,
            light:Colors.light,
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true,
                disableElevation: true
            }
        },
        MuiDrawer:{
            styleOverrides:{
                paper:{
                    width:250,
                    background:Colors.secondary,
                    color:Colors.primary,
                    borderRadius:"0px 100px 0px 0px",
                    borderRight:`2px solid ${Colors.primary}`
                }
            }
        }
        

    }
})

import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Box, List, ListItemText, Button, Grid, Tab, Tabs } from "@mui/material";
import { Colors } from '../theme'


export const PromContainer = styled(Grid)(() => ({
    padding: "30px 30px 5px 30px ",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
}));

export const PromSubContainer = styled(Box)(({ theme }) => ({
    padding: "30px 30px 5px 30px ",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    float: "right",


}));
export const TabContainer = styled(Tabs)(({ theme }) => ({
    // [theme.breakpoints.down('sm')]: {
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //     justifyContent: "space-evenly"
    // }

}));

export const PromContentContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly"
    }

}));

export const PromImgContainer = styled(Box)(() => ({
    overFlow: "hidden",
    position: "relative",
    background: Colors.secondary,
    backgroundSize:"cover"

}));

export const PromImgTitle = styled(Box)(() => ({
    textAlign: "left",
    width: "100%",
    padding: "10px 10px 0px 10px",
    transform: "scale(0)",
    position: "absolute",
    bottom: "0px",
    left: "0px",
    transition: "all 0.3s ease 0s",
    
}));

export const PromImgContent = styled(Typography)(() => ({
    color: Colors.white,
    fontSize: "20px",
    fontFamily:"Bai Jamjuree",
   
}));

export const PromImgIcon = styled(Box)(() => ({
    textAlign: "left",
    width: "100%",
    padding:"10px 3px 0px 5px",
    transform: "scale(0)",
    position: "absolute",
    top: "0px",
    left: "0px",
    transition: "all 0.3s ease 0s",
    display:"flex",

}));


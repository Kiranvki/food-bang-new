import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Box, List, ListItemText, Button } from "@mui/material";
import { Colors } from '../theme'


export const CommonContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    background: `linear-gradient(rgba(15, 23, 43, .9), rgba(15, 23, 43, .9)),url("https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660627972/food-bang/bg-hero_uhidz9.jpg")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize:"cover",
    height: "50vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down('sm')]: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
}));

export const CommonTitle = styled(Box)(({ theme }) => ({
    lineHeight: 1.5,
    fontSize: "50px",
    color: "white",
    fontWeight: "bold",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
}));

export const CommonDescription = styled(Typography)(() => ({
    fontSize: "20px",
    lineHeight: 1.5,
    
}));

export const CommonHeader=styled(Typography)(()=>({
    fontFamily:"Bai Jamjuree",
    fontWeight:"bold",
    fontSize:"2.5rem"
}));


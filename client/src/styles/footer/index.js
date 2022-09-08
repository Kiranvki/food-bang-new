import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Box, Button } from "@mui/material";
import { Colors } from '../theme'
import TextField from '@mui/material/TextField';
import ListItemButton from '@mui/material/ListItemButton';

export const FooterMainContainer = styled(Box)(({ theme }) => ({
    background: `linear-gradient(rgba(15, 23, 43, .9), rgba(15, 23, 43, .9)),url("https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660627972/food-bang/bg-hero_uhidz9.jpg")`,
    width: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: "20px 0px 20px 0px"
    // [theme.breakpoints.down('sm')]:{
    //     flexDirection:"column",
    //     alignItems:"center",
    //     justifyContent:"center",
    // }
}));

export const FooterContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 30px 5px 30px",
    [theme.breakpoints.down('md')]: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    }
}));

export const FooterTitle = styled(Typography)(() => ({
    fontSize: "1.2rem",
    textTransform: "uppercase",
    letterSpacing: "0.2rem",
    fontWeight: 500,
    fontFamily: "Bai Jamjuree",
    color: Colors.primary
}));

export const FooterHeader = styled(Typography)(() => ({
    color: Colors.secondary,
    fontWeight: "bold",
    fontSize: "30px",
}))

export const FooterButton = styled(Button)(({ theme }) => ({
    color: Colors.primary,
    fontSize: "15px",
    margin: "0px 20px 0px 20px",
    [theme.breakpoints.down('md')]: {
        margin: "20px 20px 20px 20px"
    }
}))

export const FooterDes = styled(Box)(() => ({
    fontSize: "1rem",
    color: Colors.primary,
    padding: "20px 0px 20px 0px",
    display: "flex",
    flexDirection: "column",

}));

export const StyledTextField = styled(TextField)(() => ({
    input: {
        color: Colors.primary,
    },
}));

export const ModListButton=styled(ListItemButton)(()=>({
    padding:"0px 0px 20px 0px ",
}))




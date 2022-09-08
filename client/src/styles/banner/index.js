import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Box,Button } from "@mui/material";
import {Colors} from '../theme'


export const BannerContainer = styled(Box)(({theme}) => ({
    background:`linear-gradient(rgba(15, 23, 43, .9), rgba(15, 23, 43, .9)),url("https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660627972/food-bang/bg-hero_uhidz9.jpg")`,
    width:"100%",
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.down('sm')]:{
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        
    }
}));

export const BannerTitle = styled(Typography)(() => ({
    lineHeight: 1.5,
    fontSize: "50px",
    color:"white",
    fontWeight:"bold",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px 30px 5px 30px ",
    marginTop:"50px"
}));

export const BannerContent = styled(Typography)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "5px 30px 30px 30px",
    fontSize:"20px"
    
}));

export const BannerActionContainer = styled(Box)(() => ({
    padding: "5px 30px 5px 30px",
  
}));

export const BannerAction = styled(Button)(({theme}) => ({
    width:"50%",
    height:"60px",
    color:Colors.primary,
    fontSize:"20px",
    [theme.breakpoints.down('sm')]:{
        width:"100%"
    }
}));

export const BannerImgContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px 30px 5px 30px ",
    marginTop:"30px",
}));

export const HomeContent= styled(Box)(() => ({
    position:"absolute"
}));

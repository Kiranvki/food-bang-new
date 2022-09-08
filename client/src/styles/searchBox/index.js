import { styled } from '@mui/material/styles';
import { Box, TextField } from "@mui/material";
import {Colors} from '../theme'


export const SearchBarContainer=styled(Box)(({theme})=>({
    position:"absolute",
    top:0,
    left:0,
    width:"100%",
    height:"100%",
    background:Colors.secondary,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    zIndex:9999,
    opacity:0.9,

}))

export const SearchField=styled(TextField)(({theme})=>({
    ".MuiInputLabel-root":{
        color:Colors.primary,
    },
    input: {
        color: Colors.black,
        fontWeight:"bold",
        
    },
    ".MuiInput-root":{
        fontSize:"1.5rem",
        [theme.breakpoints.up("md")]:{
            fontSize:"2rem",
        },
    },
    "MuiInput.root::before":{
        borderBottom:`1px solid ${Colors.primary}`
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: Colors.primary,
      },
    padding:"0 0 0 40px"

}))
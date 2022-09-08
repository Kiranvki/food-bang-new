import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Box,IconButton,List, } from "@mui/material";
import { Colors } from "../theme";


//container

export const AppBarContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection:"row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "2px 0px",
    fontWeight:"bold",
    position:"fixed",
    top: 0,
    zIndex:99,
    width:"100%",
    background:`linear-gradient(rgba(15, 23, 43, .9), rgba(15, 23, 43, .9))`,
    backgroundColor:"transparent",
    
}))

export const AdminAppBarContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection:"row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "2px 0px",
    fontWeight:"bold",
    position:"fixed",
    top: 0,
    zIndex:99,
    width:"100%",
    background:`linear-gradient(rgba(15, 23, 43, .9), rgba(15, 23, 43, .9))`,
    backgroundColor:"transparent",
    
}))

export const AppBarHeader=styled(Typography)(()=>({
    color:Colors.secondary,
    padding:"4px",
    fontWeight:"bold",
    fontSize:"30px",
    display:"flex",
    flexDirection:"row",
    zIndex:99,
    
}))

export const MyList=styled(List)(({type})=>({
    display: type=== 'row' ? "flex":"block",
    color:Colors.black,
    padding:"4px",
    fontWeight:"bold",
    fontSize:"20px",
    flexDirection:"row",
    flexGrow:5,
    textDecoration:"none",
    justifyContent:"center",
    alignItems:"center",
    zIndex:99,
    
    
}))

export const ActionIconContainerMobile=styled(Box)(()=>({
    display:"flex",
    position:"fixed",
    zIndex:99,
    width:"100%",
    alignItems:"center",
    bottom:0,
    borderTop:`1px solid white`

}))
;
export const ActionIconContainerDesktop=styled(Box)(()=>({
    flexGrow:0,
}))

export const DrawerCloseButton=styled(IconButton)(()=>({
  position:"absolute",
  top:10,
  left:250,
  zIndex:1999
}))

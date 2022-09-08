import { styled } from '@mui/material/styles';
import { Box, TextField, Paper} from "@mui/material";
import { Colors } from '../theme'



export const LoginPaper = styled(Paper)(({ theme }) => ({
  padding: "20px 20px 20px 20px",
  height: "auto",
  
}))

export const StyledTextField = styled(TextField)(({ theme }) => ({
  input: {
    color: Colors.black,

  },
  '& .MuiInput-underline:after': {
    borderBottomColor: Colors.secondary,
  },
  ".MuiInputLabel-root": {
    color: Colors.primary,
    fontFamily: "Bai Jamjuree",
    fontWeight: 500
  },
}));

export const DividerRoot = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing(2),
  },
  marginTop: "20px",
  marginBottom: "20px",
  color: Colors.secondary,
  fontSize: "15px"

}));

export const SignUpPaper = styled(Paper)(({ theme }) => ({
  padding: "20px 20px 20px 20px",
  height: "auto",
  
}))
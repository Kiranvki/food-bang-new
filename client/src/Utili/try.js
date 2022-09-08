import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../GlobalContext";
import { NavLink } from "react-router-dom";
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { Card, CardActions, CardContent, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const LoadingSpinner = () => {
    return (
      <div className="spinner-border text-success" style={{ width: '3em', height: '3em' }} role="status">
        <span className='visually-hidden'>Loading....</span>
      </div>
    )
  }

export default function ProfileUpdate() {
  const data = useContext(GlobalContext);
  const [userData] = data.authApi.userData;
  const [isUser] = data.authApi.isUser;
  const [token] = data.token
 
    //ref for navigation
    const navigate = useNavigate()
    const params = useParams()

    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState(false)
    const [user, setUser] = useState({
      name: '',
      email: '',
      mobile: '',
      role: userData.role
    })

    useEffect(()=>{        
        setUser(userData)
        setImage(userData.image)
    },[])


     //image upload handler
    const handleUpload = async (e) => {
    e.preventDefault();
    try {
      //to read file content from input
      const file = e.target.files[0];
      if (!file)
        return toast.error("file not exists..")
      //file size
      if (file.size > 1 * 1024 * 1024)
        return toast.error("file size is too large");
      //ref formData
      let formData = new FormData()
      formData.append('profileImg', file)

      setLoading(true)
      const res = await axios.post(`/api/v1/image/profile/upload`, formData, {
        headers: {
          'content-type': 'multipart/form-data',
          Authorization: token
        }
      })
      //after upload
      setLoading(false);
      setImage(res.data)
    //   setImage(res.data)
    } catch (err) {
      toast.error(err.response.data.msg)
    }
  }

   //image delete handler
   const handleDestroy = async (e) => {
    try {
      if (window.confirm("are you sure to delete image?")) {
        setLoading(true)
        await axios.post(`/api/v1/image/profile/destroy`, { public_id: image.public_id }, {
          headers: { Authorization: token }
        })
        setImage(false)
        setLoading(false)
      } else {
        toast.warning('delete terminated')
      }
    } catch (err) {
      toast.error(err.response.data.msg)
    }
  }

 
  const submitHandler = async (e) => {
    e.preventDefault()
    if (!image)
      return toast.error("Image doesn't exists")

    const res = await axios.patch(`/api/v1/auth/update/${params.id}`, { ...user, image }, {
      headers: {
        Authorization: token
      }
    })
    setImage(false)
    toast.success("Profile Updated successfully")
    navigate(`/profile`)
  }
  const readValue = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }


  return (
    <Box  m={20}>
    <Typography variant="h3" align="center" color="primary.main" >Update Profile</Typography>
    <Grid container bgColor="primary.main">
    <Grid item lg={5} sm={12} md={6} >
        <Card >
          <CardContent>
            <input
              variant="filled"
              type="file"
              name="profileImg"
              onChange={handleUpload}
              required
              style={{
                border: "2px solid #726f6f",
                padding: "10px",
                borderRadius: "5px",
              }}
            />
          </CardContent>
          <CardActions>
            {loading ? (
              <Box>
                <LoadingSpinner />
              </Box>
            ) : (
              <Box>
                <img src={image ? image.url : ""} alt="" width="100%" height={500}/>
                <Box onClick={handleDestroy}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#f4474a",
                      ":hover": { backgroundColor: "#f4474a" },
                    }}
                    endIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                </Box>
              </Box>
            )}
          </CardActions>
        </Card>
   
      </Grid>

      <Grid item lg={7} sm={12} md={6}>
        <Card sx={{ margin: "20px", padding: "20px" }}>
          <Box variant="form" >
            <TextField
              style={{ marginTop: "10px" }}
              type="text"
              label="Name"
              variant="outlined"
              fullWidth
              value={user.name}
              onChange={readValue}
              name="name"
              required
            />
           
            <TextField
              style={{ marginTop: "10px" }}
              type="text"
              label="Email"
              variant="outlined"
              onChange={readValue}
              fullWidth
              name="email"
              value={user.email} 
              required
            />

            <TextField
              style={{ marginTop: "10px" }}
              type="number"
              label="Mobile"
              variant="outlined"
              onChange={readValue}
              fullWidth
              name="mobile"
              value={user.mobile} 
              required
            />

            <TextField
              sx={{ marginTop: "10px" }}
              type="text"
              label="Role"
              variant="outlined"
              onChange={readValue}
              fullWidth
              disabled
              name="role"
              value={user.role}
              required
            />
            <Button variant="contained" color="primary" sx={{ marginTop: "20px", padding: "10px" }} type="submit" fullWidth onClick={(event) => submitHandler(event)}>
              Submit
            </Button>
          </Box >
        </Card>
      </Grid>
    </Grid>

  </Box>
  );
}
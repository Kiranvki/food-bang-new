import React, { useContext, useEffect, useState } from 'react';
import { Grid, Stack, Typography, Container, Box } from '@mui/material';
import { Colors, CommSeparator, Separator } from '../../../styles/theme';
import { GlobalState } from '../../../GlobalContext';
import { CommonHeader } from '../../../styles/about';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import { Slide } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import TextField from '@mui/material/TextField';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Avatar from '@mui/material/Avatar';




function UpdateProduct() {
    const data = useContext(GlobalState)
    const [categories, setCategories] = data.categoryApi.categories;
    const [token] = data.token
    const [products] = data.productApi.products

    const navigate = useNavigate();
    const params = useParams()

    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState()
    const [product, setProduct] = useState({
        title: '',
        category: '',
        price: 0,
        quantity: '',
        desc: '',
        stock: 0
    })

    useEffect(() => {
        let single = products.find(item => item._id === params.id)
        setProduct(single)
        setImage(single.image)

    }, [])


    const handleDestroy = async (e) => {
        try {
            if (window.confirm(`Are you sure to delete image?`)) {
                setLoading(true)
                await axios.post(`/api/v1/image/product/destroy`, { public_id: image.public_id }, {
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

    const handleUpload = async (e) => {
        e.preventDefault();
        try {
            // to read file content from input
            const file = e.target.files[0];
            if (!file)
                return toast.error("file not exists..")
            //file size
            if (file.size > 5 * 1024 * 1024)
                return toast.error('file size is too large');
            // ref formdata
            let formData = new FormData()
            formData.append('productImg', file)

            setLoading(true)
            // upload logic
            const res = await axios.post(`/api/v1/image/product/upload`, formData, {
                headers: {
                    'content-type': 'multipart/form-data',
                    Authorization: token
                }
            })
            //after upload
            setLoading(false);
            setImage(res.data)

        } catch (err) {
            toast.error(err.response.data.msg)

        }
    }

    const readValue = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value })
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        if (!image)
            return toast.error("Image doesn't exists.")

        const res = await axios.put(`/api/v1/product/update/${params.id}`, { ...product, image }, {
            headers: {
                Authorization: token
            }
        })
        setImage(false)
        toast.success("Product Updated successfully")
        navigate('/products')
    }

    return (
        <Stack>
            <CommSeparator />
            <Container>
                <CommonHeader textAlign="center">
                    Update Product
                </CommonHeader>
                <Grid container sx={{ padding: "30px 30px 0px 30px" }} spacing={3}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Card className='upload' elevation={0}>
                            <CardContent>
                                <Box
                                    component="form"
                                    noValidate
                                    sx={{ objectFit: "contain", width: "100%" }}
                                >
                                    <TextField variant="outlined" type="file" name="productImg" onChange={handleUpload} required fullWidth />
                                    <Box border="1px solid black" borderRadius="5px">
                                        {
                                            loading ? (
                                                <Box component="div" sx={{ display: "flex", justifyContent: "flexStart", alignItems: "center" }}><Avatar alt="Loading" src="https://res.cloudinary.com/dkz3uzlnp/image/upload/v1662446795/food-bang/334-loader-5_gdf9yd.gif" sx={{ height: "20%", width: "20%" }} /></Box>) :

                                                <Box component="div" id="file_img">
                                                    <img src={image ? image.url : ""} alt="" style={{ width: "100%", objectFit: "contain", height: "300px" }} />
                                                    <IconButton onClick={handleDestroy}>
                                                        <img src="https://res.cloudinary.com/dkz3uzlnp/image/upload/v1662459738/food-bang/39-trash-solid_ga3yxr.gif" alt="" style={{ height: "30px" }} />
                                                    </IconButton>
                                                </Box>
                                        }
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Card elevation={0}>
                            <CardContent>
                                <Box
                                    component="form"
                                    noValidate
                                    onSubmit={submitHandler}
                                >
                                    <TextField variant="outlined" color='secondary' type="type" name="title" id="title" value={product.title} onChange={readValue} required fullWidth label="Product title" />

                                    <FormControl fullWidth sx={{ marginTop: "20px", color: "red" }} required label="Product title" color='secondary'  >
                                        <InputLabel>Categories</InputLabel>
                                        <Select
                                            name="category" id="category"
                                            value={product.category}
                                            label="Category"
                                            onChange={readValue}
                                        >
                                            {
                                                categories && categories.map((item, index) => {
                                                    return (
                                                        <MenuItem key={index} value={item.title} sx={{ textTransform: "capitalize" }}>{item.title}</MenuItem>
                                                    )
                                                })
                                            }
                                        </Select>
                                    </FormControl>

                                    <TextField variant="outlined" color='secondary' type="number" name="price" id="price" value={product.price} onChange={readValue} required fullWidth label="Price" sx={{ marginTop: "20px" }} />

                                    <TextField variant="outlined" color='secondary' type="text" name="quantity" id="quantity" value={product.quantity} onChange={readValue} required fullWidth label="Quantity" sx={{ marginTop: "20px" }} />

                                    <TextField variant="outlined" color='secondary' type="number" name="stock" id="stock" value={product.stock} onChange={readValue} required fullWidth label="Stock" sx={{ marginTop: "20px" }} />

                                    <TextField variant="outlined" color='secondary' type="text" name="desc" id="desc" value={product.desc} onChange={readValue} required fullWidth label="Product Description" sx={{ marginTop: "20px" }} multiline
                                        rows={4}
                                        maxRows={4} />

                                    <Box textAlign="center" mt={2}>
                                        <Button type="submit" variant='contained' endIcon={<img height={30} src='https://res.cloudinary.com/dkz3uzlnp/image/upload/v1662460728/food-bang/49-upload-file-outline_hir2x0.gif' />} value="Create" color='secondary' sx={{ fontWeight: "bold"}}>Update Product</Button>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
            </Container>
        </Stack>

    );
}

export default UpdateProduct;
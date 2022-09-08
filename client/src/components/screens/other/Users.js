import React, { useContext, useState } from 'react';
import { Grid, Stack, Typography, Container, Paper, Box } from '@mui/material';
import { Separator } from '../../../styles/theme';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { CommSeparator } from '../../../styles/theme';
import { CommonHeader } from '../../../styles/about';
import { GlobalState } from '../../../GlobalContext';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material'; 
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { NavLink } from 'react-router-dom';

function Users() {
    const data = useContext(GlobalState)
    const [allUsers] = data.authApi.allUsers
    const [products] = data.productApi.products
    const [editableUser, setEditableUser] = useState(false)

    const [isEdit, setIsEdit] = useState(false)

    const toggleEdit = (userId) => {
        let user = allUsers.find(item => item._id === userId)
        setEditableUser(user)
    }
    const cancelEdit = () => {
        setIsEdit(false)
    }


    return (
        <Stack direction="column">
            <CommSeparator />
            <Container>
                <CommonHeader textAlign="center">
                    All Users
                </CommonHeader>
                <Grid container spacing={3} sx={{ padding: "30px 30px 0px 30px" }}>
                    <Grid item xs={12} sm={12} md={12} lg={12} >
                        <TableContainer component={Paper} elevation={3}>
                            <Table >
                                <TableHead >
                                    <TableRow >
                                        <TableCell align="left" sx={{ fontSize: "20px", fontFamily: "Bai Jamjuree", fontWeight: "bold" }}>User Id</TableCell>
                                        <TableCell align="left" sx={{ fontSize: "20px", fontFamily: "Bai Jamjuree", fontWeight: "bold" }}>Name</TableCell>
                                        <TableCell align="left" sx={{ fontSize: "20px", fontFamily: "Bai Jamjuree", fontWeight: "bold" }}>Email Id</TableCell>
                                        <TableCell align="left" sx={{ fontSize: "20px", fontFamily: "Bai Jamjuree", fontWeight: "bold" }}>Mobile No</TableCell>
                                        <TableCell align="left" sx={{ fontSize: "20px", fontFamily: "Bai Jamjuree", fontWeight: "bold" }}>Role</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        allUsers && allUsers.map((item, index) => {
                                            const { _id, title, image, price, quantity } = item;
                                            return (
                                                <TableRow key={index}>
                                                    <TableCell>
                                                        {item._id}
                                                    </TableCell>
                                                    <TableCell>
                                                        {item.name}
                                                    </TableCell>
                                                    <TableCell>
                                                        {item.email}
                                                    </TableCell>
                                                    <TableCell>
                                                        {item.mobile}
                                                    </TableCell>
                                                    <TableCell>
                                                        <Box component="div" sx={{ display: "flex", justifyContent: "flexStart", alignItems: "center" }}>
                                                            {item.role}
                                                            <NavLink to={`/profile/update/${_id}`}>
                                                                <IconButton color='secondary' onClick={() => toggleEdit(item._id)}>
                                                                    <EditIcon />
                                                                </IconButton>
                                                            </NavLink>
                                                        </Box>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        })
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Container>
        </Stack >

    );
}

export default Users;
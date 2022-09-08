import React, { useContext } from 'react';
import { Slide } from '@mui/material';
import { SearchBarContainer, SearchField } from '../styles/searchBox';
import { GlobalState, useGlobalState } from '../GlobalContext';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBox() {

    // const { showSearchBar, setShowSearchBar } = useGlobalState();

    const context=useContext(GlobalState);

    const { showSearchBar, setShowSearchBar }=context

    return (
        <Slide direction='down' in={showSearchBar} timeout={500}>
            <SearchBarContainer>
                <SearchField
                    color='secondary'
                    variant='standard'
                    fullWidth
                    placeholder='Search...'
                >
                </SearchField>
                <IconButton
                >
                    <SearchIcon sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }} color="primary"/>
                </IconButton>
                <IconButton
                    onClick={() => setShowSearchBar(false)}
                    sx={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        fontSize: { xs: "1rem", md: "2rem"}
                    }}>
                    <CloseIcon color='primary' />
                </IconButton>
                

            </SearchBarContainer>
        </Slide>
    )
}
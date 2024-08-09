import React, { useEffect,useState } from 'react';
import { AppBar, Toolbar, Box, Autocomplete, TextField, Tab,Tabs, } from '@mui/material';
import TheatersIcon from '@mui/icons-material/Theaters';
import { getAllMovies } from '../api-helpers/api-helpers';
import { Link } from 'react-router-dom';
const dummyArray=['Memory','Brahmastra','Forest Grump'];
const Header = () => {
    const [value,setValue]=useState(0);
    const [movies,setMovies]=useState([])
    useEffect(()=>{
        getAllMovies().then((data)=>console.log(data)).catch((err)=>console.log(err));
    },[]);
    return <AppBar position={'sticky'} sx={{bgcolor:'#2F3645'}}>
        <Toolbar >
            <Box width={'20%'}>
                <TheatersIcon />
            </Box>
            <Box width={'50%'} margin={'auto'}>
                <Autocomplete
                    id="free-solo-demo"
                    freeSolo
                    options={dummyArray.map((option) => option)}
                    renderInput={(params) => <TextField sx={{input:{color:'white'}}} variant='standard' {...params} placeholder="Search Across Movies" />}
                />
            </Box>
            <Box display={'flex'}>
                <Tabs textColor='inherit' indicatorColor='secondary' value={value} onChange={(e,val)=>setValue(val)} >
                <Tab LinkComponent={Link} to="/movies" label={"MOVIES"}/>
                <Tab LinkComponent={Link} to="/admin" label={"ADMIN"} />
                <Tab LinkComponent={Link} to="/auth" label={"AUTH"} />
                </Tabs>
            </Box>
        </Toolbar>
    </AppBar>


}

export default Header;

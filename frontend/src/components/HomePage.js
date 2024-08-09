import { Box, Typography, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MovieItem from './Movies/MovieItem';
import { Link } from 'react-router-dom';
import { getAllMovies } from '../api-helpers/api-helpers';

const HomePage = () => {
  // const [movies, setMovies] = useState([]);
  useEffect(() => {
    getAllMovies().then((data) => console.log(data)).catch((err) => console.log(err));
  }, []);
  
  return (
    <Box width={"100%"} height="100%" margin='auto' marginTop={2} >
      <Box margin={'auto'} width='60%' height={"120vh"} padding={2}>
        <img src="https://filmfare.wwmindia.com/content/2024/mar/badnewzvickytriptii11710824935.jpg" width={"100%"} height={"100%"} />
      </Box>
      <Box padding={5} margin="auto">
        <Typography variant="h4" textAlign={'center'}>Latest Releases</Typography>
      </Box>
      <Box display="flex" width="100%" justifyContent={'center'} flexWrap="wrap">
         
      </Box>
      <Box display="flex" padding={5} margin="auto">
        <Button LinkComponent={Link} to="/movies" variant="outlined" sx={{ margin: "auto", color: "#2b2d42" }}>
          View All Movies
        </Button>
      </Box>
    </Box>
  )
}

export default HomePage;

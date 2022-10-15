import { Box, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination';
import ExerciseCard from './ExcerciseCard'
import { excerciseOptions, fetchData } from '../utils/fetchData';

const Excercises = ({excercises, setExcercises, bodyPart }) => {
  console.log(excercises)
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);
   // Pagination
   const indexOfLastExercise = currentPage * exercisesPerPage;
   const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
   const currentExercises = excercises.slice(indexOfFirstExercise, indexOfLastExercise);
 
   const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };
  useEffect(()=>{
    const fetchExcerciseData= async ()=>{
      let excerciseData = [];
      if(bodyPart === 'all'){
        excerciseData = await fetchData( 'https://exercisedb.p.rapidapi.com/exercises', excerciseOptions)
      }else{
        excerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, excerciseOptions);
      }
      setExcercises(excerciseData)

    }
    fetchExcerciseData();
  }, [bodyPart])
  return (
    <Box id='excercises'
    sx={{mt: {lg: '110px'}}}
    mt='50px'
    p='20px'>
      <Typography variant='h3' mb='46px'>
        Showing Results 
      </Typography>
      <Stack
      direction='row' sx={{gap: {lg: '110px' , xs: '50px'}}}
      flexWrap='wrap' justifyContent='center'>
       {currentExercises?.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}


      </Stack>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
      {excercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(excercises?.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />)}
        </Stack>
    </Box>
  )
}

export default Excercises

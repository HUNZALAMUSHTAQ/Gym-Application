import {Box, Button, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { fetchData, excerciseOptions } from '../utils/fetchData'
import HorizontallScrollBar from './HorizontallScrollBar'
const SearchExcercises = ({setExcercises, bodyPart, setBodyPart}) => {
    const [search, setSearch] = useState('')
    const [bodyParts, setBodyParts] = useState([])
    
    useEffect(()=>{
        const fetchExcerciseData = async () => {
            const bodyPartsData = await fetchData(
            'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
            excerciseOptions) 

            setBodyParts(['all', ...bodyPartsData])
        }
        fetchExcerciseData()
    }, [])
    
    
    const handleSearch = async () =>{
        console.log(search)
        if(search){
            const exceriseData  = await fetchData(
                'https://exercisedb.p.rapidapi.com/exercises',
                excerciseOptions
            )
            const searchedExcercises = exceriseData.filter(
                (excercise) => excercise.name.toLowerCase().includes(search)
                || excercise.target.toLowerCase().includes(search)
                || excercise.equipment.toLowerCase().includes(search)
                || excercise.bodyPart.toLowerCase().includes(search)
            )
            console.log(exceriseData)
            setSearch('')
            setExcercises(searchedExcercises)
        }
    }

  return (

      <Stack alignItems='center' mt='37px'
       justifyContent='center' p='20px'>
        <Typography fontWeight={700} sx={{
            fontSize: {lg: '44px', xs: '30px'}
        }} mb='50px' textAlign='center'>
            Awesome Excercise You Should <br />
            Know

        </Typography>
        <Box position='relative' mb='72px'>
        <TextField
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          value={search}
          onChange={(e) => {setSearch(e.target.value)}}
          placeholder="Search Exercises"
          type="text"
        />
        <Button 
        className='search-btn'
        sx={{ bgcolor: '#b5e447', color: 'black', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }}
        onClick={handleSearch}
        >
            Search</Button>
        </Box>
            <Box sx={{position: 'relative', width: '100%', p: '20px'}}>
                <HorizontallScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts />
            </Box>
      </Stack>
 
  )
}

export default SearchExcercises

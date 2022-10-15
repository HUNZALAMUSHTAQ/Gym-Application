import React, { useState } from 'react'
import {Box} from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExcercises from '../components/SearchExcercises'
import Excercises from '../components/Excercises'


const Home = () => {
    const [excercises, setExcercises ] = useState([])
    const [bodyPart, setBodyPart] = useState('all')
 console.log(bodyPart)

 
    return (
    <div>
      <Box>
        <HeroBanner />
        <SearchExcercises setExcercises={setExcercises}  bodyPart={bodyPart} setBodyPart={setBodyPart} />
        <Excercises setExcercises={setExcercises}  bodyPart={bodyPart} excercises={excercises} />
      </Box>
    </div>
  )
}

export default Home

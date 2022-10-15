import { Box, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import HorizontallScrollBar from './HorizontallScrollBar'
import Loader from './Loader'

const SimilarExcercises = ({equipmentExcercise}) => {
  return (
    <Box sx={{mt: {lg: '100px', xs: '0'}}}>
        <Typography  variant='h3' marginBottom='5rem'>
            Same Excercise With Different Equipments
        </Typography>
        
        <Stack direction='row' paddingTop='20px' sx={{ p: '2px' , position:'relative'}}>
            {equipmentExcercise?.length !==0 ? <HorizontallScrollBar data={equipmentExcercise} />: <Loader/>}

        </Stack>

    </Box>
  )
}

export default SimilarExcercises

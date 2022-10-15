import React from 'react'


import bodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';
import { Stack } from '@mui/system';
import { Button, Typography } from '@mui/material';

const Detail = ({excerciseDetail}) => {
    const {bodyPart, gifUrl, name, target, equipment} = excerciseDetail 
    
    const extraDetail= [
        {
            icon: bodyPartImage,
            name: bodyPart
        },
        {
            icon: TargetImage,
            name: target
        },
        {
            icon: EquipmentImage,
            name: equipment
        }
    ]
    console.log(extraDetail)
    return (
    <Stack
    gap='60px' sx={{flexDirection: { lg: 'row'}, p: '20px', alignItems: 'center' }}
    >
        <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
        <Stack sx={{gap: { lg: '35px', xs: '20px' }}}>
            <Typography variant='h3' >
                {name}
            </Typography>
            <Typography variant='h6'>
                Exercises keep you strong. {name} {` `}
                is one of the best exercise to target your {target}. It will help 
                you improve your mood and gain energy.
            </Typography>
            {extraDetail.map((item, idx)=> ( // changed key to idx instead od item.name
                <Stack key={idx} direction='row' gap='24px' alignItems='center' >
                    <Button sx={{ background: '#b5e44740' , borderRadius: '50%' , width: '100px', height: '100px' }}>
                        <img src={item.icon} alt={bodyPart} style={{width : '50px', height: '50px'}} />
                    </Button>
                    <Typography textTransform='capitalize' variant='h5' >
                        {item.name}
                    </Typography>

                </Stack>
            ))}
        </Stack>
    </Stack>
  )
}

export default Detail

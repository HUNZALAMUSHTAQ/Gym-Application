import { Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'


const ExcerciseVideo = ({excerciseVideos, name}) => {
  if(!excerciseVideos.length) return 'Loading ....'
  
    return (
    <Box sx={{marginTop:{ lg: '200px' , xs: '20px' }}}  p ='20px'>
        <Typography variant='h3' mb='33px' >
            Watch <span  style={{color: '#b5e447', textTransform: 'capitalize'}} >{name}</span>
            {` `} Exercise Video 
        </Typography>
        <Stack
        sx={{flexDirection: {lg: 'row'}, gap: {lg: '110px', xs: '0'}}}
        >
             {excerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img style={{ borderTopLeftRadius: '20px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography sx={{ fontSize: { lg: '28px', xs: '18px' } }} fontWeight={600} color="#000">
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="#0009">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
        </Stack>
    </Box>
  )
}

export default ExcerciseVideo

import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Detail from '../components/Detail'
import ExcerciseVideo from '../components/ExcerciseVideo'
import SimilarExcercises from '../components/SimilarExcercises'
import { excerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData'


const ExcerciseDetail = () => {
    const [excerciseDetail, setExcerciseDetail] = useState({});
    const {id} = useParams()
    const [excerciseVideos, setExcerciseVideos] = useState([])
    const [equipmentExcercise, setEquipmentExcercise] = useState([])
    console.log(id)
    useEffect(()=>{
      const fetchExcerciseData = async () =>{
        const excerciseDBUrl = 'https://exercisedb.p.rapidapi.com'
        const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'
        
        const excerciseDetailData = await fetchData(`${excerciseDBUrl}/exercises/exercise/${id}`, excerciseOptions)
        setExcerciseDetail(excerciseDetailData);

        const excerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${excerciseDetailData.name}`, youtubeOptions)
        setExcerciseVideos(excerciseVideosData.contents)

        
        const equipmentExcerciseData = await fetchData(`${excerciseDBUrl}/exercises/equipment/${excerciseDetailData.equipment}`, excerciseOptions)
        setEquipmentExcercise(equipmentExcerciseData)
        console.log(equipmentExcerciseData, '====')
      }
      fetchExcerciseData()
    }, [id])
  
    
  return (
    <Box>
      <Detail excerciseDetail={excerciseDetail} />
      <ExcerciseVideo excerciseVideos={excerciseVideos} name={excerciseDetail.name} />
      
      <SimilarExcercises equipmentExcercise={equipmentExcercise}  />
    </Box>
  )
}

export default ExcerciseDetail

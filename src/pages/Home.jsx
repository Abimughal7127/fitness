import React, {useState} from 'react'
import { Box } from '@mui/material'
import HeroSection from '../components/HeroSection'
import SearchExercise from '../components/SearchExercise'
import Exercises from '../components/Exercises'

const Home = () => {
  return (
    <Box>
      <HeroSection />
      <SearchExercise />
      <Exercises />
    </Box>
  )
}

export default Home
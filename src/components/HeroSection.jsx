import React from 'react'
import {Box , Stack, Typography, Button} from '@mui/material'
import herosection from '../Assets/herosection.png'

const HeroSection = () => {
  return (
    <Box
      sx={{mt: { lg: '212px', xs:'70px'},ml: {sm:'50px'}}}
      position={'relative'}
      p={'20px'}
    >
      <Typography color={'#FF2625'} fontWeight={'600'} fontSize={'26px'}>
        Fitness Club
      </Typography>
      <Typography fontWeight={700}
      sx={{fontSize: {lg: '28px', xs:"20px"}}}>
        Sweat,Smile <br /> and Repeat
      </Typography>
      <Typography fontSize={'20px'}
      lineHeight={'35px'}
      marginBottom={3}
      >
        Check out the most offective Exercises
      </Typography>
      <Button variant='contained' color='error' href='#exercises'>
        Explore Exercises
      </Button>
      <Typography
      fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}
      >
        Exercise
      </Typography>
      <img src={herosection} alt="Hero Banner" className='hero-banner-img'/>
    </Box>
  )
}

export default HeroSection
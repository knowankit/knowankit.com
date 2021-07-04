import { Box } from '@chakra-ui/react'
import React from 'react'

const Introduction = () => {
  return (
    <Box className='aboutPage' height='100vh' display='flex' justifyContent='center' alignItems='center' textAlign='center'>
    <Box display='flex'>
      <Box className='col-md-6 mx-auto'>
        <Box as='p' fontSize='3rem'><strong>Hi, I'm <Box as='span' color='#FF851B'>Ankit</Box>. Nice to meet you.</strong></Box>
        <Box as='p' fontSize='1.8rem' mt='1rem' mx='8rem'>I'm a Front-end developer and UI Designer from India.
          I love CSS and JavaScript which along with other acroynms gives
          me superpowers to develop compelling front-end, intuitive yet minimalistic interfaces,
          and engaging designs. I work to the principle that simple is beautiful, while carefully
          including the finest details and interactions. I'm quiet confident, naturally curious, and perpetually improving my skills.
        </Box>
      </Box>
    </Box>
  </Box>
  )
}

export default Introduction

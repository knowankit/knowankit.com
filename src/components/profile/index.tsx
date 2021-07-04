import React from 'react'
import { Box } from '@chakra-ui/react'
import Image from 'next/image'

const Profile = () => {
  return (
    <Box height='100vh' backgroundColor='black'>
      <Box display='flex'>
        <Box height='20px' m='1rem'>
          <a href='https://knowankit.com'><Image src='/portfolio-logo.png' alt='knowankit logo' height='50px' width='50px' /></a>
        </Box>
      </Box>
      <Box textAlign='center' mt='6rem'>
          <Box color='#FF851B' fontSize='3rem' fontWeight='bold'>
            <Box className='tech-profile' display='inline-flex' position='relative' overflow='hidden'>
              <Box display='inline-flex' flexDirection='column'>
                <Box>Front-end</Box>
                {/* <Box>Back-end</Box>
                <Box>Full-stack</Box> */}
              </Box>
            </Box>
            <Box color='white' display='inline-block' ml='10px'>
              Developer <Box as='span'>&lt;<Box as='span' className='dash'>_</Box>/&gt;</Box>
            </Box>
          </Box> <br />
          <Box color='white' fontSize='1.8rem'>
            <p>I code beautifully simple things and I love what I do</p>
            <p>And of-course a love for egyptian bracket</p>
            <Box as='img' margin='0px auto' mt='4rem' src='/ankit.png' alt='Ankit' height='200' />
          </Box>
        </Box>
    </Box>
  )
}

export default Profile

import React from 'react'
import { Box } from '@chakra-ui/react'
import SocialIcons from '@/src/components/profile/social-icons'
import Navbar from '@/src/components/navbar'

const Profile = () => {
  return (
    <Box height='100vh' backgroundColor='black' id='profile'>
      <Navbar />
      <Box textAlign='center' mt={['6rem', '6rem', '6rem', '6rem']}>
          <Box color='#FF851B' fontSize={['1.5rem', '1.5rem', '3rem', '3rem']} fontWeight='bold'>
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
          <Box color='white' fontSize={['1.2rem', '1.2rem', '1.8rem', '1.8rem']} mx={['1rem', '1rem', '1rem', '1rem']}>
            <p>I code beautifully simple things and I love what I do</p>
            <p>And of-course a love for egyptian bracket</p>
            <Box as='img' margin='0px auto' mt='4rem' src='/ankit.png' alt='Ankit' height={['100', '100', '200', '200']} />
          </Box>
          <SocialIcons />
        </Box>
    </Box>
  )
}

export default Profile

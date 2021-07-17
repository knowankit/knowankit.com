import React from 'react'
import { Box } from '@chakra-ui/react'
import SocialIcons from '@/src/components/profile/social-icons'
import Navbar from '@/src/components/navbar'

const Profile = () => {
  return (
    <>
    <Box bg='black'>
      <Navbar />
    </Box>
    <Box height='90vh' backgroundColor='black' id='profile' display='flex' justifyContent='center' alignItems='center'>
      <Box textAlign='center' display='flex' justifyContent='space-between' flexDirection='column' alignItems='center'>
          <Box color='#FF851B' fontSize={['2rem', '2.5rem', '3rem', '3rem']} fontWeight='bold'>
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
          </Box>
          <Box color='white' fontSize={['1rem', '1.6rem', '1.8rem', '1.8rem']} mx={['1rem', '1rem', '1rem', '1rem']}>
            <p>I code beautifully simple things and I love what I do</p>
            <p>And of-course a love for egyptian bracket</p>
          </Box>
          <Box as='img' margin='0px auto' mt='4rem' src='/myself.jpg' borderRadius='50%' alt='Ankit' height={['100', '150', '200', '200']} />
          <SocialIcons />
        </Box>
    </Box>
    </>
  )
}

export default Profile

import React from "react";
import { Box }  from '@chakra-ui/react'
import { AiOutlineGithub, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'

const SocialIcons = () => {
  return (
    <Box display='flex' justifyContent='center' alignItems='flex-end'>
      <Box as='a' color='white' fontSize='3rem' mt='2.5rem' mr='20px' href='https://github.com/knowankit'>
          <AiOutlineGithub />
      </Box>
      <Box as='a' color='white' fontSize='3rem' mt='2.5rem' mr='20px' href='https://twitter.com/knowankit'>
          <AiOutlineTwitter />
      </Box>
      <Box as='a' color='white' fontSize='3rem' mt='2.5rem' href='https://www.instagram.com/knowankitt/'>
          <AiOutlineInstagram />
      </Box>
    </Box>
  )
}

export default SocialIcons

import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'
import { AiOutlineGithub, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'

const Links = () => {
  return(
    <Box height='100vh' backgroundColor='black'>
      <Box display='flex' height='50vh' justifyContent='center' alignItems='flex-end'>
        <Box mr='2rem'>
          <Button size='lg'>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </Button>
        </Box>
        <Box>
          <Button size='lg'>
          <Link href="/blog">
            Blog
          </Link>
          </Button>
        </Box>
      </Box>
      <Box display='flex' justifyContent='center' alignItems='flex-end' height='50vh'>
          <Box as='a' color='white' fontSize='50px' mb='2rem' mr='20px' href='https://github.com/knowankit'>
              <AiOutlineGithub />
          </Box>
          <Box as='a' color='white' fontSize='50px' mb='2rem' mr='20px' href='https://twitter.com/knowankit'>
              <AiOutlineTwitter />
          </Box>
          <Box as='a' color='white' fontSize='50px' mb='2rem' href='https://www.instagram.com/knowankitt/'>
              <AiOutlineInstagram />
          </Box>
      </Box>
    </Box>
  )
}

export default Links

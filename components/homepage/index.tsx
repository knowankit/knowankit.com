import React from 'react';
import { Box } from '@chakra-ui/react';
import SocialIcons from '@/components/homepage/social-icons';
import Navbar from '@/components/navbar';

const Profile = () => {
  return (
    <>
      <Navbar />
      <Box
        height="90vh"
        backgroundColor="black"
        id="profile"
        display="flex"
        justifyContent="center"
        alignItems="center">
        <Box
          textAlign="center"
          display="flex"
          justifyContent="space-between"
          flexDirection="column"
          alignItems="center">
          <Box fontSize={['2rem', '2.5rem', '3rem', '3rem']} fontWeight="bold">
            {/* <Box as="p" color="white" fontSize="2rem">
              Hi, I am Ankit
            </Box> */}
            <Box
              className="tech-profile"
              display="inline-flex"
              position="relative"
              overflow="hidden">
              <Box display="inline-flex" flexDirection="column">
                <Box color="#FF851B">Front-end</Box>
                {/* <Box>Back-end</Box>
                <Box>Full-stack</Box> */}
              </Box>
            </Box>
            <Box color="white" display="inline-block" ml="10px">
              Developer &nbsp;
              <Box as="span">
                &lt;
                <Box as="span" className="dash">
                  _
                </Box>
                /&gt;
              </Box>
            </Box>
          </Box>
          <Box
            color="white"
            fontSize={['1rem', '1.6rem', '1.8rem', '1.8rem']}
            mx={['2rem', '1rem', '1rem', '1rem']}>
            <p>I code beautifully simple things and I love what I do</p>
            <p>And of-course a love for egyptian bracket</p>
          </Box>
          <SocialIcons />
        </Box>
      </Box>
    </>
  );
};

export default Profile;

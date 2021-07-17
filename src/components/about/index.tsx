import React from 'react';
import Navbar from '@/src/components/navbar';
import Introduction from '@/src/components/introduction';
import { Box } from '@chakra-ui/react';

const About = () => {
  return (
    <Box height="100vh" backgroundColor="black" id="profile">
      <Navbar />
      <Introduction />
    </Box>
  );
};

export default About;

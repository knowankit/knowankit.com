import React from 'react';
import Navbar from '@/components/navbar';
import Introduction from '@/components/about/introduction';
import { Box } from '@chakra-ui/react';

const About = () => {
  return (
    <Box minHeight="100vh" backgroundColor="black" id="about">
      <Navbar />
      <Introduction />
    </Box>
  );
};

export default About;

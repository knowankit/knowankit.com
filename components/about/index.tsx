import React from 'react';
import Navbar from '@/components/navbar';
import Introduction from '@/components/about/introduction';
import { Box } from '@chakra-ui/react';

const About = ({ setTheme, isLightTheme }) => {
  return (
    <Box minHeight="100vh" id="about" bg="bgColor">
      <Navbar setTheme={setTheme} isLightTheme={isLightTheme} />
      <Introduction />
    </Box>
  );
};

export default About;

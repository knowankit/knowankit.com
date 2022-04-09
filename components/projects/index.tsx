import React from 'react';
import Navbar from '@/components/navbar';
import SearchProject from '@/components/projects/search-project';
import { Box } from '@chakra-ui/react';
import Footer from '@/components/footer';

const Projects = () => {
  return (
    <Box id="profile">
      <Navbar />
      <Box height="100%">
        <SearchProject />
        <Footer />
      </Box>
    </Box>
  );
};

export default Projects;

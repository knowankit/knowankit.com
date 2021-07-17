import React from 'react';
import Navbar from '@/src/components/navbar';
import SearchProject from '@/src/components/projects/search-project';
import { Box } from '@chakra-ui/react';

const Projects = () => {
  return (
    <Box id="profile">
      <Box bg="black">
        <Navbar />
      </Box>
      <SearchProject />
    </Box>
  );
};

export default Projects;

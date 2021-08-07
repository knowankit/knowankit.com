import React from 'react';
import Navbar from '@/components/navbar';
import SearchProject from '@/components/projects/search-project';
import { Box } from '@chakra-ui/react';

const Projects = () => {
  return (
    <Box id="profile">
      <Navbar />
      <Box height="100%">
        <SearchProject />
      </Box>
    </Box>
  );
};

export default Projects;

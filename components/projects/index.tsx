import React from 'react';
import Navbar from '@/components/navbar';
import SearchProject from '@/components/projects/search-project';
import { Box } from '@chakra-ui/react';
import Footer from '@/components/footer';

const Projects = () => {
  return (
    <Box id="profile">
      <Navbar />
      <Box height="80vh" overflowY={'scroll'}>
        <SearchProject />
      </Box>
      <Footer />
    </Box>
  );
};

export default Projects;

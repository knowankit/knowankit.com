import React from 'react';
import Card from '@/src/components/projects/card';
import { Box } from '@chakra-ui/react';
import projects from '@/src/components/projects/project-list';

const SearchProject = () => {
  return (
    <Box bg="white" display="flex" m="2rem" flexWrap="wrap" justifyContent="center">
      {projects.map((project, index) => (
        <Card project={project} key={index} />
      ))}
    </Box>
  );
};

export default SearchProject;

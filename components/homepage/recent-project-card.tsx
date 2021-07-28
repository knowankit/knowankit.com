import React from 'react';

import { Box, Heading, Text, Stack, Avatar, useColorModeValue } from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';

const ProjectCard = ({ project }) => {
  return (
    <Box
      w={['full', '32rem', '32rem', '50vw']}
      minW={'250px'}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'lg'}
      rounded={'md'}
      p={6}
      m="1rem"
      mx="auto"
      overflow={'hidden'}>
      <Stack>
        <Text
          color="brand"
          textTransform={'uppercase'}
          fontWeight={800}
          fontSize={['xs', 'xs', 'sm', 'sm']}
          letterSpacing={1.1}>
          Project
        </Text>
        <Heading
          color={useColorModeValue('gray.700', 'white')}
          fontSize={['md', 'xl', '2xl', '2xl']}
          fontFamily={'body'}>
          {project.name}
        </Heading>
        {/* <Text color={'gray.500'} fontSize={['sm', 'sm', 'xl', 'xl']}>
          {project.description}
        </Text> */}
        <Box display="flex">
          {project.demo && (
            <Box as="a" href={project.demo} mr="1rem" fontSize={'sm'}>
              Preview
            </Box>
          )}
          {project.github && (
            <Box as="a" href={project.github} fontSize="1.2rem">
              <AiFillGithub />
            </Box>
          )}
        </Box>
      </Stack>
    </Box>
  );
};

export default ProjectCard;

import React from 'react';

import { Box, Heading, Text, Stack, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';

const ProjectCard = ({ project }) => {
  if (project.fork) return <></>;

  return (
    <Link href={project['html_url'] || ''}>
      <Box
        maxW={'350px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'md'}
        rounded={'md'}
        p={6}
        m="1rem"
        cursor="pointer"
        overflow={'hidden'}>
        <Stack>
          <Text
            color="project"
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            Project
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {project.name}
          </Heading>
          <Text color={'gray.500'}>{project.description}</Text>
        </Stack>
      </Box>
    </Link>
  );
};

export default ProjectCard;

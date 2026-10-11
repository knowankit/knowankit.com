'use client';

import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const ProjectCard = ({ project }) => {
  const href = project.html_url || project.github || project.demo || '#';

  if (project.fork) return null;

  return (
    <Box
      asChild
      display="flex"
      flexDirection="column"
      h="100%"
      bg="site.card"
      borderWidth="1px"
      borderColor="site.line"
      boxShadow="md"
      rounded="xl"
      p={6}
      overflow="hidden"
      transition="border-color 0.2s ease, transform 0.2s ease"
      _hover={{ borderColor: 'brand.500', transform: 'translateY(-2px)', textDecoration: 'none' }}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Text
          color="brand.400"
          textTransform="uppercase"
          fontWeight={800}
          fontSize="xs"
          letterSpacing="0.14em"
          fontFamily="mono">
          {project.stargazers_count ? `${project.stargazers_count} stars` : 'Project'}
        </Text>
        <Heading color="site.strong" fontSize="xl" mt={3} mb={2} letterSpacing="-0.02em">
          {project.name}
        </Heading>
        <Text color="site.subtext" fontSize="sm" lineHeight="1.6">
          {project.description}
        </Text>
      </a>
    </Box>
  );
};

export default ProjectCard;

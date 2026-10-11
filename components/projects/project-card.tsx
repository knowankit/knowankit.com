import React from 'react';

import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';

const ProjectCard = ({ project }) => {
  const bg = useColorModeValue('white', 'ink.800');
  const border = useColorModeValue('blackAlpha.100', 'whiteAlpha.100');
  const heading = useColorModeValue('ink.800', 'ink.50');
  const body = useColorModeValue('ink.600', 'ink.300');
  const href = project.html_url || project.github || project.demo || '#';

  if (project.fork) return null;

  return (
    <Box
      as={Link}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      display="flex"
      flexDirection="column"
      h="100%"
      bg={bg}
      borderWidth="1px"
      borderColor={border}
      boxShadow="md"
      rounded="xl"
      p={6}
      overflow="hidden"
      transition="border-color 0.2s ease, transform 0.2s ease"
      _hover={{ borderColor: 'brand.500', transform: 'translateY(-2px)', textDecoration: 'none' }}>
      <Text
        color="brand.400"
        textTransform="uppercase"
        fontWeight={800}
        fontSize="xs"
        letterSpacing="0.14em"
        fontFamily="mono">
        {project.stargazers_count ? `${project.stargazers_count} stars` : 'Project'}
      </Text>
      <Heading color={heading} fontSize="xl" mt={3} mb={2} letterSpacing="-0.02em">
        {project.name}
      </Heading>
      <Text color={body} fontSize="sm" lineHeight="1.6">
        {project.description}
      </Text>
    </Box>
  );
};

export default ProjectCard;

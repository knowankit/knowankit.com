'use client';

import Introduction from '@/components/about/introduction';
import { Box, Container, Text } from '@chakra-ui/react';
import { GitHubCalendar } from 'react-github-calendar';
import { useColorMode } from '@/components/ui/color-mode';

const About = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Introduction />
      <Box borderTopWidth="1px" borderColor="site.line" py={{ base: 10, md: 14 }}>
        <Container maxW="1100px" px={{ base: 5, md: 8 }}>
          <Text fontFamily="mono" fontSize="xs" letterSpacing="0.18em" color="brand.400" mb={6}>
            CONTRIBUTIONS
          </Text>
          <Box overflowX="auto">
            <GitHubCalendar username="knowankit" colorScheme={colorMode} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default About;

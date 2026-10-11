import Introduction from '@/components/about/introduction';
import { Box, Container, Text, useColorModeValue } from '@chakra-ui/react';
import GitHubCalendar from 'react-github-calendar';
import ContentWithNavbarFooter from '@/layouts/content-with-navbar-footer';

const About = (): JSX.Element => {
  const border = useColorModeValue('blackAlpha.100', 'whiteAlpha.100');

  return (
    <ContentWithNavbarFooter>
      <Introduction />
      <Box borderTopWidth="1px" borderColor={border} py={{ base: 10, md: 14 }}>
        <Container maxW="1100px" px={{ base: 5, md: 8 }}>
          <Text fontFamily="mono" fontSize="xs" letterSpacing="0.18em" color="brand.400" mb={6}>
            CONTRIBUTIONS
          </Text>
          <Box overflowX="auto">
            <GitHubCalendar username="knowankit" />
          </Box>
        </Container>
      </Box>
    </ContentWithNavbarFooter>
  );
};

export default About;

import Navbar from '@/components/navbar';
import Introduction from '@/components/about/introduction';
import { Box } from '@chakra-ui/react';
import Footer from '@/components/footer';
import GitHubCalendar from 'react-github-calendar';
import SocialIcons from '@/components/homepage/social-icons';

const About = (): JSX.Element => {
  return (
    <Box minHeight="100vh" id="about">
      <Navbar />
      <Introduction />
      <Box display="flex" justifyContent="center" alignItems="center">
        <GitHubCalendar username="knowankit" />
      </Box>
      <SocialIcons />
      <Footer />
    </Box>
  );
};

export default About;

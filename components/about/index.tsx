import Navbar from '@/components/navbar';
import Introduction from '@/components/about/introduction';
import { Box } from '@chakra-ui/react';
import Footer from '@/components/footer';
import GitHubCalendar from 'react-github-calendar';
import SocialIcons from '@/components/homepage/social-icons';

const About = (): JSX.Element => {
  return (
    <>
      <Box minHeight="90vh" id="about">
        <Navbar />
        <Introduction />
        <Box display="flex" justifyContent="center" alignItems="center" p="1rem">
          <GitHubCalendar username="knowankit" />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default About;

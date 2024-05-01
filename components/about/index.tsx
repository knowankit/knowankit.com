import Navbar from '@/components/navbar';
import Introduction from '@/components/about/introduction';
import { Box } from '@chakra-ui/react';
import Footer from '@/components/footer';
import GitHubCalendar from 'react-github-calendar';
import ContentWithNavbarFooter from '@/layouts/content-with-navbar-footer';

const About = (): JSX.Element => {
  return (
    <>
      <ContentWithNavbarFooter>
        <Introduction />
        <Box display="flex" justifyContent="center" alignItems="center" p="1rem">
          <GitHubCalendar username="knowankit" />
        </Box>
      </ContentWithNavbarFooter>
    </>
  );
};

export default About;

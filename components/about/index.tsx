import Navbar from '@/components/navbar';
import Introduction from '@/components/about/introduction';
import { Box } from '@chakra-ui/react';
import Footer from '@/components/footer';

const About = (): JSX.Element => {
  return (
    <Box minHeight="100vh" id="about">
      <Navbar />
      <Introduction />
      <Footer />
    </Box>
  );
};

export default About;

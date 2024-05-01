import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Box } from '@chakra-ui/react';

const ContentWithNavbarFooter = ({ children }) => (
  <Box>
    <Box
      height="5.25rem"
      bgColor="transparent"
      backdropFilter="blur(5px)"
      position="fixed"
      width="100vw">
      <Navbar />
    </Box>
    <Box height="calc(100vh - 5rem)" overflow="scroll" display="inline-block">
      <Box as="main" display="flex" justifyContent="center" mt="5.25rem">
        {children}
      </Box>
    </Box>
    <Box>
      <Footer />
    </Box>
  </Box>
);

export default ContentWithNavbarFooter;

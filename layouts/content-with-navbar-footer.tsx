import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Box } from '@chakra-ui/react';

const ContentWithNavbarFooter = ({ children }) => (
  <Box>
    <Box height="5.25rem" width="100vw">
      <Navbar />
    </Box>
    <Box overflowY="scroll" height="calc(100vh - 10.4rem)">
      <Box as="main" height="inherit">
        {children}
      </Box>
    </Box>
    <Box>
      <Footer />
    </Box>
  </Box>
);

export default ContentWithNavbarFooter;

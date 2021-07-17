import { ChakraProvider, Box } from '@chakra-ui/react';
import '@/src/styles/global.scss';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Box fontFamily="Titillium Web">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}
export default MyApp;

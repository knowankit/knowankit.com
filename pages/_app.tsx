import { ChakraProvider, Box, extendTheme } from '@chakra-ui/react';
import '@/src/styles/global.scss';

function MyApp({ Component, pageProps }) {
  const theme = extendTheme({
    colors: {
      brand: '#ff851b'
    }
  });

  return (
    <ChakraProvider theme={theme}>
      <Box fontFamily="Titillium Web">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}
export default MyApp;

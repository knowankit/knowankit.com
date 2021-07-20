import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import '@/src/styles/global.scss';
import MDXComponents from '@/src/components/mdx';

function MyApp({ Component, pageProps }) {
  const theme = extendTheme({
    colors: {
      brand: '#ff851b'
    },
    fonts: {
      body: 'Titillium Web'
    }
  });

  return (
    <ChakraProvider theme={theme}>
      <MDXProvider components={MDXComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </ChakraProvider>
  );
}
export default MyApp;

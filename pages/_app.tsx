import { ChakraProvider } from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import '@/styles/global.scss';

import MDXComponents from '@/components/mdx';
import theme from '@/lib/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <MDXProvider components={MDXComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </ChakraProvider>
  );
}
export default MyApp;

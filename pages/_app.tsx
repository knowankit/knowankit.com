import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import '@/styles/global.scss';

import MDXComponents from '@/components/mdx';

function MyApp({ Component, pageProps }) {
  const theme = extendTheme({
    colors: {
      brand: '#ff851b',
      link: '#1890ff',
      project: '#0275d8',
      blog: 'tomato',
      textColor: 'black',
      bgColor: 'white'
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

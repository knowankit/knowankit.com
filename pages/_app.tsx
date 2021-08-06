import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import React, { useState } from 'react';
import '@/styles/global.scss';

import MDXComponents from '@/components/mdx';

function MyApp({ Component, pageProps }) {
  const [isLightTheme, setTheme] = useState(true);

  const lightTheme = extendTheme({
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

  const darkTheme = extendTheme({
    colors: {
      brand: '#ff851b',
      link: '#1890ff',
      project: '#0275d8',
      blog: 'tomato',
      textColor: 'white',
      bgColor: 'black'
    },
    fonts: {
      body: 'Titillium Web'
    }
  });

  const props = { setTheme, isLightTheme, ...pageProps };

  return (
    <ChakraProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <MDXProvider components={MDXComponents}>
        <Component {...props} />
      </MDXProvider>
    </ChakraProvider>
  );
}
export default MyApp;

'use client';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Box } from '@chakra-ui/react';
import React from 'react';

const bar = {
  h: '4rem',
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  borderColor: 'site.line'
} as const;

const ContentWithNavbarFooter = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box display="flex" flexDirection="column" h="100dvh" w="100%" overflow="hidden">
      <Box
        as="header"
        {...bar}
        zIndex={20}
        borderBottomWidth="1px"
        bg="site.header"
        backdropFilter="blur(12px)"
        css={{ WebkitBackdropFilter: 'blur(12px)' }}>
        <Navbar />
      </Box>
      <Box as="main" flex="1" minH={0} overflowY="auto" overflowX="hidden">
        {children}
      </Box>
      <Box as="footer" {...bar} borderTopWidth="1px">
        <Footer />
      </Box>
    </Box>
  );
};

export default ContentWithNavbarFooter;

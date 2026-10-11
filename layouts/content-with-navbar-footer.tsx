'use client';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Box } from '@chakra-ui/react';
import React from 'react';

type Props = {
  children: React.ReactNode;
  /** Lock shell to one viewport height and clip overflow (home landing only). */
  viewportLock?: boolean;
};

const ContentWithNavbarFooter = ({ children, viewportLock = false }: Props) => {
  return (
    <Box
      minH={viewportLock ? '100dvh' : '100vh'}
      h={viewportLock ? '100dvh' : undefined}
      maxH={viewportLock ? '100dvh' : undefined}
      display="flex"
      flexDirection="column"
      position="relative"
      w="100%"
      maxW="100%"
      overflow={viewportLock ? 'hidden' : 'visible'}
      overflowX="hidden">
      <Box
        position="sticky"
        top={0}
        zIndex={20}
        flexShrink={0}
        borderBottomWidth="1px"
        borderColor="site.line"
        bg="site.header"
        backdropFilter="blur(12px)"
        css={{ WebkitBackdropFilter: 'blur(12px)' }}>
        <Navbar />
      </Box>
      <Box
        as="main"
        flex={viewportLock ? '1' : undefined}
        flexGrow={viewportLock ? 1 : undefined}
        minH={viewportLock ? 0 : undefined}
        minW={0}
        width="100%"
        maxW="100%"
        position="relative"
        overflowX="hidden"
        overflowY={viewportLock ? 'hidden' : 'visible'}
        display={viewportLock ? 'flex' : undefined}
        flexDirection={viewportLock ? 'column' : undefined}>
        {children}
      </Box>
      <Box flexShrink={0}>
        <Footer />
      </Box>
    </Box>
  );
};

export default ContentWithNavbarFooter;

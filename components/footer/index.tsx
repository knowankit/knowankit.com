'use client';

import { Box, Flex, Text } from '@chakra-ui/react';
import SocialIcons from '@/components/homepage/social-icons';
import React from 'react';

const Footer = () => {
  return (
    <Box as="footer" borderTopWidth="1px" borderColor="site.line" py={{ base: 4, md: 6 }} mt="auto">
      <Flex
        maxW="1100px"
        mx="auto"
        px={{ base: 5, md: 8 }}
        direction={{ base: 'column', sm: 'row' }}
        align="center"
        justify="space-between"
        gap={4}>
        <Text fontSize="sm" color="site.faint" textAlign={{ base: 'center', sm: 'left' }}>
          © {new Date().getFullYear()} Ankit Kumar
        </Text>
        <SocialIcons />
      </Flex>
    </Box>
  );
};

export default Footer;

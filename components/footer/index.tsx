import { Box, HStack, Link as _Link, Text } from '@chakra-ui/react';
import SocialIcons from '@/components/homepage/social-icons';
import React from 'react';

const Footer = () => {
  return (
    <Box px={4} as="footer" height={'10vh'} d="flex" alignItems="center">
      <Box maxW="6xl" mx="auto" fontSize="xs">
        <Box d="flex" justifyContent="center" alignItems="center">
          <SocialIcons />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

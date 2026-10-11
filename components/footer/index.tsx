'use client';

import { Flex, Text } from '@chakra-ui/react';
import SocialIcons from '@/components/social-icons';

const Footer = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      w="100%"
      h="100%"
      maxW="1100px"
      mx="auto"
      px={{ base: 4, md: 8 }}
      gap={4}>
      <Text fontSize="sm" color="site.faint">
        © {new Date().getFullYear()} Ankit Kumar
      </Text>
      <SocialIcons />
    </Flex>
  );
};

export default Footer;

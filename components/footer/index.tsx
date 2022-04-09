import { Box, HStack, Link as _Link, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import NowPlaying from 'components/NowPlaying';

const Footer: FC = () => {
  return (
    <Box p={4} as="footer">
      <Box maxW="6xl" mx="auto" fontSize="xs">
        <Box d="flex" textAlign="center" justifyContent="center" alignItems="center">
          <HStack spacing={2}>
            <Box>
              <_Link href="https://github.com/knowankit/knowankit.com" p={4}>
                Source code on Github
              </_Link>
            </Box>
            <Box p={4}>
              <Text>Copyright &copy; {new Date().getFullYear()} Ankit Kumar</Text>
            </Box>
          </HStack>
        </Box>
      </Box>
      <NowPlaying />
    </Box>
  );
};

export default Footer;

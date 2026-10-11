import React from 'react';
import { HStack, IconButton, useColorModeValue } from '@chakra-ui/react';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';

const SocialIcons = () => {
  const subtle = useColorModeValue('ink.600', 'ink.300');
  const hoverBg = useColorModeValue('blackAlpha.50', 'whiteAlpha.100');
  const githubHover = useColorModeValue('ink.900', 'ink.50');

  return (
    <HStack spacing={2}>
      <IconButton
        as="a"
        href="https://github.com/knowankit"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        icon={<AiOutlineGithub />}
        variant="ghost"
        fontSize="xl"
        color={subtle}
        _hover={{ color: githubHover, bg: hoverBg }}
      />
      <IconButton
        as="a"
        href="https://www.linkedin.com/in/knowankit/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        icon={<AiFillLinkedin />}
        variant="ghost"
        fontSize="xl"
        color={subtle}
        _hover={{ color: '#0a66c2', bg: hoverBg }}
      />
    </HStack>
  );
};

export default SocialIcons;

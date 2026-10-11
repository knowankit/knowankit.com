'use client';

import React from 'react';
import { HStack, IconButton } from '@chakra-ui/react';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';

const SocialIcons = () => {
  return (
    <HStack gap={2}>
      <IconButton
        asChild
        aria-label="GitHub"
        variant="ghost"
        fontSize="xl"
        color="site.subtext"
        _hover={{ color: 'site.strongest', bg: 'site.hover' }}>
        <a href="https://github.com/knowankit" target="_blank" rel="noopener noreferrer">
          <AiOutlineGithub />
        </a>
      </IconButton>
      <IconButton
        asChild
        aria-label="LinkedIn"
        variant="ghost"
        fontSize="xl"
        color="site.subtext"
        _hover={{ color: '#0a66c2', bg: 'site.hover' }}>
        <a href="https://www.linkedin.com/in/knowankit/" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin />
        </a>
      </IconButton>
    </HStack>
  );
};

export default SocialIcons;

'use client';

import { HStack, IconButton } from '@chakra-ui/react';
import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';

const links = [
  {
    href: 'https://github.com/knowankit',
    label: 'GitHub',
    hover: 'site.strongest',
    icon: AiOutlineGithub
  },
  {
    href: 'https://www.linkedin.com/in/knowankit/',
    label: 'LinkedIn',
    hover: '#0a66c2',
    icon: AiFillLinkedin
  }
];

const SocialIcons = () => {
  return (
    <HStack gap={2}>
      {links.map(({ href, label, hover, icon: Icon }) => (
        <IconButton
          key={label}
          asChild
          aria-label={label}
          size="sm"
          variant="ghost"
          fontSize="xl"
          color="site.subtext"
          _hover={{ color: hover, bg: 'site.hover' }}>
          <a href={href} target="_blank" rel="noopener noreferrer">
            <Icon />
          </a>
        </IconButton>
      ))}
    </HStack>
  );
};

export default SocialIcons;

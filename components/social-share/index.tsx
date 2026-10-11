'use client';

import { Box, HStack, Link, VStack } from '@chakra-ui/react';
import React, { FC } from 'react';
import { IoLogoFacebook, IoLogoLinkedin } from 'react-icons/io';

interface IProps {
  title: string;
  url?: string;
}

const SocialShare: FC<IProps> = ({ title, url = window.location.href }) => {
  const socialLinks = [
    {
      href: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      label: 'Facebook',
      icon: IoLogoFacebook,
      bg: '#4267B2'
    },
    {
      href: `https://www.linkedin.com/shareArticle?url=${url}&title=${title}`,
      label: 'LinkedIn',
      icon: IoLogoLinkedin,
      bg: '#2867B2'
    }
  ];

  return (
    <Box py={4} rounded="md">
      <VStack gap={2} align="left">
        <HStack gap={2}>
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.label}
                aria-label={`Share on ${link.label}`}
                py={2}
                px={2}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                rounded="md"
                bg={link.bg}
                color="#fff"
                fontWeight="bold"
                _hover={{ color: '#fff' }}>
                <Icon />
              </Link>
            );
          })}
        </HStack>
      </VStack>
    </Box>
  );
};

export default SocialShare;

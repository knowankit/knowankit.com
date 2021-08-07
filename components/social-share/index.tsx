import { Box, HStack, Link, VStack } from '@chakra-ui/react';
import React, { FC } from 'react';
import { IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io';

interface IProps {
  title: string;
  url?: string;
}

const SocialShare: FC<IProps> = ({ title, url = window.location.href }) => {
  const socialLinks = [
    {
      href: `https://twitter.com/intent/tweet?text=${title}&url=${url}`,
      label: 'Twitter',
      icon: IoLogoTwitter,
      bg: '#1DA1F2'
    },
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
      <VStack spacing={2} align="left">
        {/* <Text fontWeight="bold">Share this post</Text> */}
        <HStack spacing={2}>
          {socialLinks.map((link, index) => {
            return (
              <Link
                key={index}
                py={2}
                px={2}
                href={link.href}
                rounded="md"
                bg={link.bg}
                color="#fff"
                fontWeight="bold"
                isExternal>
                <HStack spacing={2} alignItems="center">
                  <Box as={link.icon} />
                  {/* <Text fontSize="xs">{link.label}</Text> */}
                </HStack>
              </Link>
            );
          })}
        </HStack>
      </VStack>
    </Box>
  );
};

export default SocialShare;

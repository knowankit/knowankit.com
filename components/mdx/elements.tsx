'use client';

import NextLink from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Heading, Link } from '@chakra-ui/react';
import HydrateReduxStore from '../../public/static/images/articles/nextjs-with-redux.png';
import SetupLinting from '../../public/static/images/articles/setup-eslint-and-prettier.png';

export const SocialShare = dynamic(() => import('@/components/social-share'), {
  ssr: false
});

export const CustomLink = (props) => {
  const { href, children, ...rest } = props;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link asChild fontWeight="bold" className="mdx" {...rest}>
        <NextLink href={href}>{children}</NextLink>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"

      className="mdx"
      fontWeight="bold"
      {...rest}>
      {children}
    </Link>
  );
};

const fetchImage = (slug) => {
  switch (slug) {
    case 1:
      return HydrateReduxStore;
    case 2:
      return SetupLinting;

    default:
      break;
  }
};

export const H1 = (props) => (
  <Heading as="h1" size={{ base: '4xl', md: '5xl' }} my="0.5rem" {...props} />
);
export const H2 = (props) => (
  <Heading as="h2" size={{ base: '3xl', md: '4xl' }} my="0.5rem" {...props} />
);
export const H3 = (props) => (
  <Heading as="h3" size={{ base: '2xl', md: '3xl' }} my="0.5rem" {...props} />
);
export const H4 = (props) => <Heading as="h4" size="md" my="0.5rem" {...props} />;

export const CImage = ({ id, ...props }) => (
  <Image alt="" {...props} src={fetchImage(id)} placeholder="blur" />
);

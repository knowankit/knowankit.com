import Link from 'next/link';
import { Heading, Link as _Link } from '@chakra-ui/react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const SocialShare = dynamic(
  import(/* webpackChunkName: "SocialShare" */ 'components/social-share'),
  {
    ssr: false
  }
);
const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <_Link color="link" {...props} fontWeight="bold" className="mdx">
          {props.children}
        </_Link>
      </Link>
    );
  }

  return (
    <_Link
      target="_blank"
      rel="noopener noreferrer"
      color="link"
      className="mdx"
      fontWeight="bold"
      {...props}>
      {props.children}
    </_Link>
  );
};

const h1 = (props) => <Heading size="2xl" my="0.5rem" {...props} />;
const h2 = (props) => <Heading size="xl" my="0.5rem" {...props} />;
const h3 = (props) => <Heading size="lg" my="0.5rem" {...props} />;
const h4 = (props) => <Heading size="sm" my="0.5rem" {...props} />;
const CImage = (props) => <Image {...props} />;

const components = {
  a: CustomLink,
  h1,
  h2,
  h3,
  h4,
  Image: CImage,
  SocialShare
};

export default components;

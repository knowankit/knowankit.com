import Link from 'next/link';
import { Heading } from '@chakra-ui/react';
import Image from 'next/image';

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    );
  }

  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {''}
    </a>
  );
};

const h1 = (props) => <Heading size="2xl" {...props} />;
const h2 = (props) => <Heading size="xl" {...props} />;
const h3 = (props) => <Heading size="lg" {...props} />;
const h4 = (props) => <Heading size="sm" {...props} />;

const components = {
  a: CustomLink,
  h1,
  h2,
  h3,
  h4,
  Image
};

export default components;

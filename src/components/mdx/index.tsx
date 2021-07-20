import Link from 'next/link';
import { Heading } from '@chakra-ui/react';

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

const H1 = (props) => <Heading size="2xl" {...props} />;
const H2 = (props) => <Heading size="xl" {...props} />;
const H3 = (props) => <Heading size="lg" {...props} />;
const H4 = (props) => <Heading size="sm" {...props} />;

const components = {
  a: CustomLink
};

export default components;

'use client';

import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { parseISO, format } from 'date-fns';

const ArticleCard = ({ post }) => {
  return (
    <Box
      asChild
      display="block"
      minW="250px"
      w={['full', '32rem', '32rem', '50vw']}
      bg="site.card"
      borderWidth="1px"
      borderColor="site.line"
      boxShadow="md"
      rounded="xl"
      mx="auto"
      mb="1rem"
      p={6}
      overflow="hidden"
      transition="border-color 0.2s ease, transform 0.2s ease"
      _hover={{ borderColor: 'brand.500', transform: 'translateY(-2px)', textDecoration: 'none' }}>
      <NextLink href={`/blogs/${post.slug}`}>
        <Stack>
          <Text
            color="brand.400"
            textTransform="uppercase"
            fontWeight={800}
            fontSize="0.875rem"
            letterSpacing="0.14em"
            fontFamily="mono">
            Writing
          </Text>
          <Heading color="site.strong" fontSize="1.75rem" letterSpacing="-0.02em">
            {post.title}
          </Heading>
          <Text color="site.subtext" fontSize="1rem" lineHeight="1.6">
            {post.summary}
          </Text>
        </Stack>
        <Stack direction="row" gap={4} align="center" mt={4}>
          <Stack direction="column" gap={0} fontSize="1rem">
            <Text fontWeight={600} color="site.strong">
              Ankit Kumar
            </Text>
            <Text color="site.subtext">
              {format(parseISO(post.publishedAt), 'MMMM dd, yyyy')} ·{' '}
              {post.frontMatter.readingTime.text}
            </Text>
          </Stack>
        </Stack>
      </NextLink>
    </Box>
  );
};

export default ArticleCard;

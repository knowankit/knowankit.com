import { Box, Heading, Stack, Image, Text, HStack, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import { parseISO, format } from 'date-fns';

interface BlogAuthorProps {
  date: Date;
  name: string;
}

export const BlogAuthor = (props: BlogAuthorProps): JSX.Element => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center" color="black">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const ArticleCard = ({ post }): JSX.Element => {
  const bg = useColorModeValue('white', 'ink.800');
  const border = useColorModeValue('blackAlpha.100', 'whiteAlpha.100');
  const heading = useColorModeValue('ink.800', 'ink.50');
  const body = useColorModeValue('ink.600', 'ink.300');

  return (
    <Box
      as={Link}
      href={`/blogs/${post.slug}`}
      display="block"
      minW="250px"
      w={['full', '32rem', '32rem', '50vw']}
      bg={bg}
      borderWidth="1px"
      borderColor={border}
      boxShadow="md"
      rounded="xl"
      mx="auto"
      mb="1rem"
      p={6}
      overflow="hidden"
      transition="border-color 0.2s ease, transform 0.2s ease"
      _hover={{ borderColor: 'brand.500', transform: 'translateY(-2px)', textDecoration: 'none' }}>
      <Stack>
        <Text
          color="brand.400"
          textTransform="uppercase"
          fontWeight={800}
          fontSize="xs"
          letterSpacing="0.14em"
          fontFamily="mono">
          Writing
        </Text>
        <Heading color={heading} fontSize="2xl" letterSpacing="-0.02em">
          {post.title}
        </Heading>
        <Text color={body} fontSize="sm" lineHeight="1.6">
          {post.summary}
        </Text>
      </Stack>
      <Stack direction="row" spacing={4} align="center" mt={4}>
        <Stack direction="column" spacing={0} fontSize="sm">
          <Text fontWeight={600} color={heading}>
            Ankit Kumar
          </Text>
          <Text color={body}>
            {format(parseISO(post.publishedAt), 'MMMM dd, yyyy')} ·{' '}
            {post.frontMatter.readingTime.text}
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ArticleCard;

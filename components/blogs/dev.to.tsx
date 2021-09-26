import React from 'react';
import {
  Box,
  Heading,
  Stack,
  Image,
  Text,
  HStack,
  useColorModeValue,
  Link
} from '@chakra-ui/react';
import { parseISO, format } from 'date-fns';

interface BlogAuthorProps {
  date: Date;
  name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props): JSX.Element => {
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

const DevTo = ({ post }): JSX.Element => {
  return (
    <Link href={post.slug} textDecoration="none !important" target="_blank">
      <Box
        cursor="pointer"
        minW={'250px'}
        w={['full', '32rem', '32rem', '50vw']}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'md'}
        rounded={'md'}
        mx="auto"
        mb="1rem"
        p={6}
        overflow={'hidden'}>
        <Stack>
          <Text
            color="blog"
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            Blog
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {post.title}
          </Heading>
          <Text color={'gray.500'}>{post.summary}</Text>
        </Stack>
        <Stack direction={'row'} spacing={4} align={'center'}>
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600} color={useColorModeValue('gray.700', 'white')}>
              Ankit Kumar
            </Text>
            <Text color={'gray.500'}>
              {format(parseISO(post.publishedAt), 'MMMM dd, yyyy')} ·{' '}
              {post.frontMatter?.readingTime.text}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Link>
  );
};

export default DevTo;

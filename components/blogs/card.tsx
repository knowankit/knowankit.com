import React from 'react';
import {
  Box,
  Heading,
  Stack,
  Image,
  Text,
  HStack,
  Avatar,
  // Tag,
  // SpaceProps,
  useColorModeValue
} from '@chakra-ui/react';
import Link from 'next/link';
import { parseISO, format } from 'date-fns';

// interface IBlogTags {
//   tags: Array<string>;
//   marginTop?: SpaceProps['marginTop'];
// }

// const BlogTags: React.FC<IBlogTags> = (props) => {
//   return (
//     <HStack spacing={2} marginTop={props.marginTop}>
//       {props.tags.map((tag) => {
//         return (
//           <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
//             {tag}
//           </Tag>
//         );
//       })}
//     </HStack>
//   );
// };

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

const ArticleCard = ({ post }): JSX.Element => {
  return (
    <Link href={`blogs/${post.slug}`}>
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
        {/* <Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
        <Image
          src={
            'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          }
          layout={'fill'}
        />
      </Box> */}
        <Stack>
          <Text
            color="project"
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
          {/* <Avatar src={'https://avatars0.githubusercontent.com/knowankit'} alt={'Author'} /> */}
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>Ankit Kumar</Text>
            <Text color={'gray.500'}>
              {format(parseISO(post.publishedAt), 'MMMM dd, yyyy')} ·{' '}
              {post.frontMatter.readingTime.text}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Link>
  );
};

export default ArticleCard;

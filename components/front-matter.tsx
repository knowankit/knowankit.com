import React from 'react';
import { Box, Heading, Avatar } from '@chakra-ui/react';
import { parseISO, format } from 'date-fns';
import { AiOutlineFieldTime } from 'react-icons/ai';
const FrontMatter = ({ matter }) => {
  return (
    <Box>
      <Heading as="h1" size="2xl">
        {matter.title}
      </Heading>
      <Box display="flex" justifyContent="space-between" my="1rem">
        <Box>
          <Avatar
            size="xs"
            src={'https://avatars0.githubusercontent.com/knowankit'}
            alt={'Author'}
          />
          <Box as="span" fontSize="sm" ml="10px">
            Ankit Kumar / {format(parseISO(matter.publishedAt), 'MMMM dd, yyyy')}
          </Box>
        </Box>
        <Box fontSize="sm" display="flex" alignItems="center">
          <AiOutlineFieldTime /> &nbsp;
          {matter.readingTime.text}
        </Box>
      </Box>
    </Box>
  );
};

export default FrontMatter;

'use client';

import React from 'react';
import { Avatar, Box, Heading } from '@chakra-ui/react';
import { parseISO, format } from 'date-fns';
import { AiOutlineFieldTime } from 'react-icons/ai';

const FrontMatter = ({ matter }) => {
  return (
    <Box>
      <Heading as="h1" size={{ base: '4xl', md: '5xl' }}>
        {matter.title}
      </Heading>
      <Box display="flex" justifyContent="space-between" my="1rem">
        <Box display="flex" alignItems="center">
          <Avatar.Root size="2xs">
            <Avatar.Image src="https://avatars0.githubusercontent.com/knowankit" />
            <Avatar.Fallback name="Ankit Kumar" />
          </Avatar.Root>
          <Box as="span" fontSize="1rem" ml="0.625rem">
            Ankit Kumar / {format(parseISO(matter.publishedAt), 'MMMM dd, yyyy')}
          </Box>
        </Box>
        <Box fontSize="1rem" display="flex" alignItems="center">
          <AiOutlineFieldTime /> &nbsp;
          {matter.readingTime.text}
        </Box>
      </Box>
    </Box>
  );
};

export default FrontMatter;

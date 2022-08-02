import React from 'react';
import { Box } from '@chakra-ui/react';
import { AiOutlineGithub, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';

const SocialIcons = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box
        as="a"
        fontSize={['1.4rem', '2.4rem', '3rem', '3rem']}
        mr="20px"
        href="https://github.com/knowankit">
        <AiOutlineGithub />
      </Box>
      <Box
        as="a"
        color="#1DA1F2"
        fontSize={['1.4rem', '2.4rem', '3rem', '3rem']}
        mr="20px"
        href="https://twitter.com/knowankit">
        <AiOutlineTwitter />
      </Box>
      <Box
        as="a"
        fontSize={['1.4rem', '2.4rem', '3rem', '3rem']}
        href="https://www.linkedin.com/in/knowankit/">
        <AiFillLinkedin />
      </Box>
    </Box>
  );
};

export default SocialIcons;

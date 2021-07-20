import { Box } from '@chakra-ui/react';
import React from 'react';

const Introduction = () => {
  return (
    <Box
      id="introduction"
      className="aboutPage"
      height="90vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center">
      <Box display="flex">
        <Box>
          <Box as="p" color="white" fontSize={['1.5rem', '1.5rem', '3rem', '3rem']}>
            <strong>
              Hi, I&apos;m&nbsp;
              <Box as="span" color="brand">
                Ankit
              </Box>
              . Nice to meet you.
            </strong>
          </Box>
          <Box
            as="p"
            fontSize={['1rem', '1rem', '1.4rem', '1.8rem']}
            mt="1rem"
            mx={['4rem', '4rem', '6rem', '8rem']}
            color="white">
            I&apos;m a Front-end developer and UI Designer from India. I love CSS and JavaScript{' '}
            <span role="img" aria-label="rocket">
              🚀
            </span>
            which along with other acroynms gives me superpowers
            <span role="img" aria-label="strong">
              💪🏻
            </span>{' '}
            to develop compelling front-end, intuitive yet minimalistic interfaces, and engaging
            designs. I work to the principle that simple is beautiful, while carefully including the
            finest details and interactions. I&apos;m quiet confident, naturally curious, and
            perpetually improving my skills
            <span role="img" aria-label="skilled">
              🏋🏼‍♀️
            </span>
            .
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Introduction;

import { Box } from '@chakra-ui/react';

const Introduction = (): JSX.Element => {
  return (
    <Box
      id="introduction"
      className="aboutPage"
      display="flex"
      justifyContent="center"
      pb={['1rem', '', '', '']}
      alignItems="center"
      textAlign="center">
      <Box display="flex">
        <Box>
          <Box
            as="img"
            margin="0px auto"
            my="2rem"
            src="/myself.jpg"
            borderRadius="50%"
            alt="Ankit"
            height={['100', '150', '200', '200']}
          />
          <Box as="p" fontSize={['1.25rem', '1.5rem', '3rem', '3rem']} mx={['0.5rem', '', '', '']}>
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
            mx={['2rem', '4rem', '6rem', '8rem']}>
            I am a Front-end developer and UI Designer hailing from India. My passion lies in
            working with CSS and JavaScript
            <span role="img" aria-label="rocket">
              🚀
            </span>
            , which, along with other programming languages, empower
            <span role="img" aria-label="strong">
              💪🏻&nbsp;
            </span>
            me to create visually stunning and highly functional front-end designs. I believe that
            simplicity is beauty and strive to create intuitive yet minimalistic interfaces that
            incorporate intricate details and interactions. I am confident, inquisitive, and
            constantly honing my skills to improve my craft
            <span role="img" aria-label="skilled">
              &nbsp;🏋🏼‍♀️
            </span>
            .
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Introduction;

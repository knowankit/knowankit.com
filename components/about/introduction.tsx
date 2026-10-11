import {
  Box,
  Container,
  Grid,
  Heading,
  HStack,
  Tag,
  Text,
  VStack,
  useColorModeValue
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const MotionBox = motion(Box);

const skills = [
  'React',
  'TypeScript',
  'Next.js',
  'Node.js',
  'PostgreSQL',
  'REST / GraphQL',
  'Design Systems',
  'CSS / SCSS',
  'Performance',
  'Accessibility',
  'AWS',
  'Docker',
  'Testing',
  'Team leadership'
];

const Introduction = (): JSX.Element => {
  const subtext = useColorModeValue('ink.600', 'ink.300');
  const cardBg = useColorModeValue('white', 'rgba(24, 24, 27, 0.72)');
  const cardBorder = useColorModeValue('blackAlpha.100', 'whiteAlpha.100');
  const tagBg = useColorModeValue('ink.100', 'whiteAlpha.100');
  const tagColor = useColorModeValue('ink.700', 'ink.200');
  const linkColor = useColorModeValue('ink.600', 'ink.300');
  const linkHover = useColorModeValue('ink.900', 'ink.50');

  return (
    <Container maxW="1100px" px={{ base: 5, md: 8 }} py={{ base: 10, md: 16 }}>
      <Grid
        templateColumns={{ base: '1fr', md: '280px 1fr' }}
        gap={{ base: 10, md: 14 }}
        alignItems="start">
        {/* Left — avatar + meta */}
        <MotionBox
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
          <VStack align="center" spacing={5}>
            <Box
              as="img"
              src="/myself.jpg"
              alt="Ankit Kumar"
              borderRadius="2xl"
              w={{ base: '160px', md: '100%' }}
              maxW="260px"
              objectFit="cover"
              boxShadow="lg"
              borderWidth="1px"
              borderColor={cardBorder}
            />

            {/* Quick links */}
            <VStack align="start" spacing={2} w="100%" maxW="260px">
              <HStack
                as="a"
                href="https://github.com/knowankit"
                target="_blank"
                rel="noopener noreferrer"
                spacing={2}
                color={linkColor}
                _hover={{ color: linkHover }}
                transition="color 0.15s ease">
                <AiOutlineGithub size={16} />
                <Text fontSize="sm" fontWeight="500">
                  github.com/knowankit
                </Text>
              </HStack>
              <HStack
                as="a"
                href="https://www.linkedin.com/in/knowankit/"
                target="_blank"
                rel="noopener noreferrer"
                spacing={2}
                color={linkColor}
                _hover={{ color: '#0a66c2' }}
                transition="color 0.15s ease">
                <AiFillLinkedin size={16} />
                <Text fontSize="sm" fontWeight="500">
                  linkedin.com/in/knowankit
                </Text>
              </HStack>
              <HStack spacing={2} color={linkColor}>
                <HiOutlineLocationMarker size={16} />
                <Text fontSize="sm" fontWeight="500">
                  India
                </Text>
              </HStack>
            </VStack>

            {/* Skills */}
            <Box w="100%" maxW="260px">
              <Text fontFamily="mono" fontSize="xs" letterSpacing="0.18em" color="brand.400" mb={3}>
                SKILLS
              </Text>
              <Box display="flex" flexWrap="wrap" gap={2}>
                {skills.map((skill) => (
                  <Tag
                    key={skill}
                    size="sm"
                    bg={tagBg}
                    color={tagColor}
                    borderRadius="full"
                    fontWeight="500"
                    fontSize="xs">
                    {skill}
                  </Tag>
                ))}
              </Box>
            </Box>
          </VStack>
        </MotionBox>

        {/* Right — bio */}
        <MotionBox
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}>
          <VStack align="start" spacing={6}>
            <Box>
              <Text fontFamily="mono" fontSize="xs" letterSpacing="0.2em" color="brand.400" mb={3}>
                ABOUT
              </Text>
              <Heading
                as="h1"
                fontSize={{ base: '2rem', md: '2.5rem' }}
                letterSpacing="-0.03em"
                lineHeight="1.1"
                mb={5}>
                Hi, I&apos;m{' '}
                <Box as="span" color="brand.400">
                  Ankit
                </Box>
                .
              </Heading>
              <VStack
                align="start"
                spacing={4}
                color={subtext}
                fontSize={{ base: 'md', md: 'lg' }}
                lineHeight="1.75">
                <Text>
                  I&apos;m a Staff Software Engineer based in India, working across the full stack.
                  I started deep in the UI layer — React, design systems, CSS, accessibility — and
                  have grown into backend engineering, API design, and distributed systems over
                  time.
                </Text>
                <Text>
                  I care about the whole product surface: from the interaction model a user sees to
                  the service boundaries and data models that power it. Most of my craft lives at
                  the seams — where frontend and backend contracts meet, where design intent becomes
                  running code, and where team process determines whether quality holds under
                  pressure.
                </Text>
                <Text>
                  I like small, well-named APIs, documentation that earns trust, and teams that
                  treat software as a craft — end to end.
                </Text>
              </VStack>
            </Box>

            {/* What I'm focused on */}
            <Box
              w="100%"
              borderRadius="xl"
              borderWidth="1px"
              borderColor={cardBorder}
              bg={cardBg}
              p={6}
              backdropFilter="blur(10px)"
              sx={{ WebkitBackdropFilter: 'blur(10px)' }}>
              <Text fontFamily="mono" fontSize="xs" letterSpacing="0.16em" color="brand.400" mb={4}>
                WHAT I&apos;M FOCUSED ON
              </Text>
              <Grid templateColumns={{ base: '1fr', sm: '1fr 1fr' }} gap={4}>
                {[
                  {
                    label: 'UI & design systems',
                    desc: 'Composable, token-driven component libraries'
                  },
                  {
                    label: 'Backend & APIs',
                    desc: 'REST/GraphQL services, data modelling, reliability'
                  },
                  { label: 'Performance', desc: 'Fast by default — client and server' },
                  { label: 'Mentorship', desc: 'Raising the quality bar together' }
                ].map(({ label, desc }) => (
                  <Box key={label}>
                    <Text fontWeight="700" fontSize="sm" mb={1}>
                      {label}
                    </Text>
                    <Text fontSize="sm" color={subtext} lineHeight="1.6">
                      {desc}
                    </Text>
                  </Box>
                ))}
              </Grid>
            </Box>
          </VStack>
        </MotionBox>
      </Grid>
    </Container>
  );
};

export default Introduction;

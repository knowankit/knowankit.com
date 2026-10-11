import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  HStack,
  Text,
  Tooltip,
  VStack,
  Wrap,
  WrapItem,
  useColorModeValue
} from '@chakra-ui/react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { AiOutlineGithub } from 'react-icons/ai';
import { getAllGithubStars } from '@/lib/get-all-github-stars';

const MotionBox = motion(Box);

const pillars = [
  {
    label: 'Product UI & systems',
    hint: 'Design tokens, composable components, patterns across teams'
  },
  { label: 'Backend & APIs', hint: 'Services, data modelling, reliable contracts' },
  { label: 'Performance', hint: 'Client and server budgets, profiling, pragmatic tuning' },
  { label: 'Leadership', hint: 'Mentorship, reviews, alignment across design and engineering' }
];

const HomePage = () => {
  const [stars, setStars] = useState(0);
  const reduceMotion = useReducedMotion();
  const cardBg = useColorModeValue('white', 'rgba(24, 24, 27, 0.72)');
  const cardBorder = useColorModeValue('blackAlpha.100', 'whiteAlpha.100');
  const cardShadow = useColorModeValue(
    '0 1px 0 rgba(0,0,0,0.04) inset, 0 8px 28px rgba(15, 23, 42, 0.06)',
    '0 1px 0 rgba(255,255,255,0.06) inset, 0 8px 28px rgba(0,0,0,0.35)'
  );
  const subtext = useColorModeValue('ink.600', 'ink.300');
  const emphasis = useColorModeValue('ink.800', 'ink.50');
  const tagBg = useColorModeValue('ink.100', 'whiteAlpha.100');
  const tagColor = useColorModeValue('ink.700', 'ink.200');

  useEffect(() => {
    let cancelled = false;
    async function load() {
      const count = await getAllGithubStars();
      if (!cancelled) setStars(count);
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Box
      flex="1"
      minH={0}
      display="flex"
      flexDirection="column"
      position="relative"
      w="100%"
      maxW="100%"
      overflow="hidden">
      <Box
        position="absolute"
        inset={0}
        className="page-grid-bg"
        pointerEvents="none"
        aria-hidden
      />

      <Container
        maxW="1100px"
        w="100%"
        flex="1"
        minH={0}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        px={{ base: 3, sm: 4, md: 6 }}
        py={{ base: 2, md: 3 }}
        centerContent>
        <Grid
          templateColumns={{ base: '1fr', lg: 'minmax(0,1.05fr) minmax(0,0.95fr)' }}
          gap={{ base: 3, md: 4, lg: 5 }}
          alignItems={{ base: 'start', lg: 'center' }}
          w="100%"
          maxW="100%">
          <VStack align="start" spacing={{ base: 2, md: 3 }} minW={0} minH={0} overflow="hidden">
            <MotionBox
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0, y: reduceMotion ? 0 : 8 },
                show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }
              }}>
              <Text
                fontFamily="mono"
                fontSize="0.65rem"
                fontWeight="600"
                letterSpacing="0.18em"
                textTransform="uppercase"
                color="brand.400">
                Staff software engineer
              </Text>
              <Heading
                as="h1"
                fontSize={{ base: '1.5rem', sm: '1.85rem', md: '2.1rem', lg: '2.35rem' }}
                lineHeight="1.12"
                fontWeight="700"
                letterSpacing="-0.03em"
                mt={1}
                mb={2}>
                Interfaces that scale. Teams that level up.
              </Heading>
              <Text
                fontSize={{ base: 'sm', md: 'md' }}
                color={subtext}
                lineHeight="1.55"
                wordBreak="break-word">
                Full stack — UI, design systems, and backend services — with predictable delivery
                and high craft.
              </Text>
            </MotionBox>

            <MotionBox
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0, y: reduceMotion ? 0 : 6 },
                show: { opacity: 1, y: 0, transition: { delay: 0.06, duration: 0.4 } }
              }}>
              <HStack spacing={2} flexWrap="wrap">
                <Link href="/projects" passHref>
                  <Button as="a" size="sm" variant="accent" borderRadius="full" px={5}>
                    Work
                  </Button>
                </Link>
                <Link href="/blogs" passHref>
                  <Button
                    as="a"
                    size="sm"
                    variant="outline"
                    borderRadius="full"
                    px={5}
                    borderColor="brand.500"
                    color="brand.400">
                    Writing
                  </Button>
                </Link>
                <Link href="/about" passHref>
                  <Button as="a" size="sm" variant="ghost" borderRadius="full" px={3}>
                    About
                  </Button>
                </Link>
              </HStack>
            </MotionBox>

            <HStack spacing={4} flexWrap="wrap" pt={1} align="start">
              <Box minW={0}>
                <Text fontFamily="mono" fontSize="0.65rem" color={subtext} letterSpacing="0.08em">
                  OPEN SOURCE
                </Text>
                <Button
                  as="a"
                  href="https://github.com/knowankit"
                  target="_blank"
                  rel="noopener noreferrer"
                  leftIcon={<AiOutlineGithub />}
                  variant="ghost"
                  size="xs"
                  px={0}
                  height="auto"
                  fontWeight="600"
                  color="brand.400"
                  _hover={{ bg: 'transparent', color: 'brand.300' }}>
                  {stars ? `${stars.toLocaleString()} stars` : 'GitHub'}
                </Button>
              </Box>
              <Box minW={0}>
                <Text fontFamily="mono" fontSize="0.65rem" color={subtext} letterSpacing="0.08em">
                  FOCUS
                </Text>
                <Text fontWeight="600" fontSize="xs">
                  React · Node · TypeScript · Systems
                </Text>
              </Box>
            </HStack>

            <Box w="100%" pt={1} flexShrink={0}>
              <Text
                fontFamily="mono"
                fontSize="0.65rem"
                letterSpacing="0.14em"
                color="brand.400"
                mb={1.5}>
                FOCUS AREAS
              </Text>
              <Wrap spacing={1.5} shouldWrapChildren>
                {pillars.map((p) => (
                  <WrapItem key={p.label}>
                    <Tooltip label={p.hint} placement="top" hasArrow openDelay={400}>
                      <Text
                        as="span"
                        display="inline-block"
                        fontSize="xs"
                        fontWeight="600"
                        px={2.5}
                        py={1}
                        borderRadius="full"
                        bg={tagBg}
                        color={tagColor}
                        cursor="default">
                        {p.label}
                      </Text>
                    </Tooltip>
                  </WrapItem>
                ))}
              </Wrap>
            </Box>
          </VStack>

          <MotionBox
            minW={0}
            display={{ base: 'none', lg: 'block' }}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            borderRadius="xl"
            borderWidth="1px"
            borderColor={cardBorder}
            bg={cardBg}
            boxShadow={cardShadow}
            p={4}
            backdropFilter="blur(8px)"
            sx={{ WebkitBackdropFilter: 'blur(8px)' }}>
            <Text
              fontFamily="mono"
              fontSize="0.65rem"
              letterSpacing="0.12em"
              color="brand.400"
              mb={1.5}>
              HOW I WORK
            </Text>
            <VStack align="start" spacing={1.5} fontSize="xs" color={subtext} lineHeight="1.5">
              <Text>
                <Text as="span" color={emphasis} fontWeight="600">
                  North-star clarity —
                </Text>{' '}
                Turn goals into concrete contracts, states, and edge cases the team can share.
              </Text>
              <Text>
                <Text as="span" color={emphasis} fontWeight="600">
                  Opinionated defaults —
                </Text>{' '}
                Linting, APIs, and docs so the right thing is the easy thing.
              </Text>
              <Text>
                <Text as="span" color={emphasis} fontWeight="600">
                  Measured iteration —
                </Text>{' '}
                Ship in slices, instrument what matters, tighten feedback loops.
              </Text>
            </VStack>
          </MotionBox>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;

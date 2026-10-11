import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  HStack,
  Text,
  VStack,
  useColorModeValue
} from '@chakra-ui/react';
import Link from 'next/link';
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform
} from 'framer-motion';
import { AiOutlineGithub } from 'react-icons/ai';
import { getAllGithubStars } from '@/lib/get-all-github-stars';

const MotionBox = motion(Box);

const roles = ['Frontend', 'Backend', 'AI', 'DevOps'];

const HomePage = () => {
  const [stars, setStars] = useState(0);
  const [displayStars, setDisplayStars] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const starsMotion = useMotionValue(0);
  const roundedStars = useTransform(starsMotion, (latest) => Math.round(latest));

  const subtext = useColorModeValue('ink.600', 'ink.300');

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

  useEffect(() => {
    if (!stars) return;
    if (reduceMotion) {
      setDisplayStars(stars);
      return;
    }
    starsMotion.set(0);
    const controls = animate(starsMotion, stars, { duration: 1, ease: 'easeOut' });
    const unsub = roundedStars.onChange((v) => setDisplayStars(v));
    return () => {
      controls.stop();
      unsub();
    };
  }, [stars, reduceMotion, starsMotion, roundedStars]);

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2200);
    return () => clearInterval(id);
  }, [reduceMotion]);

  const fadeUp = (delay: number) => ({
    hidden: { opacity: 0, y: reduceMotion ? 0 : 8 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: reduceMotion ? 0 : delay,
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  });

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
        <Grid templateColumns="1fr" w="100%" maxW="42rem">
          <VStack align="start" spacing={{ base: 2, md: 3 }} minW={0} minH={0} overflow="hidden">
            <MotionBox initial="hidden" animate="show" variants={fadeUp(0)}>
              <Text
                fontFamily="mono"
                fontSize="0.75rem"
                fontWeight="600"
                letterSpacing="0.18em"
                textTransform="uppercase"
                color="brand.400">
                Staff software engineer
                <Box as="span" className="dash" ml="2px">
                  _
                </Box>
              </Text>
              <HStack
                spacing={1}
                align="baseline"
                h="1.5em"
                overflow="hidden"
                mt={1}
                aria-live="polite">
                <AnimatePresence mode="wait">
                  <MotionBox
                    key={roles[roleIndex]}
                    initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
                    transition={{ duration: 0.3 }}
                    color="tomato.400"
                    fontFamily="mono"
                    fontSize="0.75rem"
                    fontWeight="700"
                    letterSpacing="0.14em"
                    textTransform="uppercase">
                    {roles[roleIndex]}
                  </MotionBox>
                </AnimatePresence>
              </HStack>
            </MotionBox>

            <MotionBox initial="hidden" animate="show" variants={fadeUp(0.08)}>
              <Heading
                as="h1"
                fontSize={{ base: '1.75rem', sm: '2.1rem', md: '2.5rem', lg: '2.85rem' }}
                lineHeight="1.12"
                fontWeight="700"
                letterSpacing="-0.03em"
                mb={2}>
                Build less. Build it well.
              </Heading>
            </MotionBox>

            <MotionBox initial="hidden" animate="show" variants={fadeUp(0.16)}>
              <VStack align="start" spacing={1}>
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color={subtext}
                  lineHeight="1.55"
                  wordBreak="break-word">
                  I code beautifully simple things and I love what I do
                </Text>
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color={subtext}
                  lineHeight="1.55"
                  wordBreak="break-word">
                  And of-course a love for egyptian bracket
                </Text>
              </VStack>
            </MotionBox>

            <MotionBox initial="hidden" animate="show" variants={fadeUp(0.24)}>
              <HStack spacing={2} flexWrap="wrap">
                <Button
                  as={Link}
                  href="/projects"
                  size="sm"
                  variant="accent"
                  borderRadius="full"
                  px={5}>
                  Work
                </Button>
                <Button
                  as={Link}
                  href="/blogs"
                  size="sm"
                  variant="outline"
                  borderRadius="full"
                  px={5}
                  borderColor="brand.500"
                  color="brand.400">
                  Writing
                </Button>
                <Button
                  as={Link}
                  href="/about"
                  size="sm"
                  variant="ghost"
                  borderRadius="full"
                  px={3}>
                  About
                </Button>
              </HStack>
            </MotionBox>

            <MotionBox initial="hidden" animate="show" variants={fadeUp(0.32)} w="100%">
              <HStack spacing={4} flexWrap="wrap" pt={1} align="start">
                <Box minW={0}>
                  <Text fontFamily="mono" fontSize="0.75rem" color={subtext} letterSpacing="0.08em">
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
                    {displayStars ? `${displayStars.toLocaleString()} stars` : 'GitHub'}
                  </Button>
                </Box>
                <Box minW={0}>
                  <Text fontFamily="mono" fontSize="0.75rem" color={subtext} letterSpacing="0.08em">
                    CURRENT FOCUS
                  </Text>
                  <Text fontWeight="600" fontSize="sm">
                    Working with FastAPI, LangGraph, and TypeSafe AI&apos;s Jev
                  </Text>
                </Box>
              </HStack>
            </MotionBox>
          </VStack>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;

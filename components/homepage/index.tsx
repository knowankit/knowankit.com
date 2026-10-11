'use client';

import { useEffect, useState } from 'react';
import { Box, Button, Container, Grid, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform
} from 'motion/react';
import { AiOutlineGithub } from 'react-icons/ai';
import { getAllGithubStars } from '@/lib/get-all-github-stars';

const MotionBox = motion.create(Box);
const easeOutExpo = [0.22, 1, 0.36, 1] as const;

const roles = ['Frontend', 'Backend', 'AI', 'DevOps'];

const HomePage = () => {
  const [stars, setStars] = useState(0);
  const [displayStars, setDisplayStars] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const starsMotion = useMotionValue(0);
  const roundedStars = useTransform(starsMotion, (latest) => Math.round(latest));

  const subtext = 'site.subtext';
  const shownStars = reduceMotion ? stars : displayStars;

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
    if (!stars || reduceMotion) return;
    starsMotion.set(0);
    const controls = animate(starsMotion, stars, { duration: 1, ease: 'easeOut' });
    const unsub = roundedStars.on('change', (v) => setDisplayStars(v));
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
        ease: easeOutExpo
      }
    }
  });

  return (
    <Box minH="100%" display="flex" flexDirection="column" position="relative" w="100%" maxW="100%">
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
        <Grid templateColumns="1fr" w="100%" maxW="52rem">
          <VStack align="start" gap={{ base: 2, md: 3 }} minW={0}>
            <MotionBox initial="hidden" animate="show" variants={fadeUp(0)}>
              <Text
                fontFamily="mono"
                fontSize="1rem"
                fontWeight="600"
                letterSpacing="0.18em"
                textTransform="uppercase"
                color="brand.400">
                Staff software engineer
                <Box as="span" className="dash" ml="0.125rem">
                  _
                </Box>
              </Text>
              <HStack
                gap={1}
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
                    fontSize="1.125rem"
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
                fontSize={{ base: '2.25rem', sm: '2.75rem', md: '3.25rem', lg: '3.5rem' }}
                lineHeight="1.12"
                fontWeight="700"
                letterSpacing="-0.03em"
                mb={2}>
                Build less. Build it well.
              </Heading>
            </MotionBox>

            <MotionBox initial="hidden" animate="show" variants={fadeUp(0.16)}>
              <VStack align="start" gap={1}>
                <Text
                  fontSize={{ base: '1.125rem', md: '1.375rem' }}
                  color={subtext}
                  lineHeight="1.55"
                  wordBreak="break-word">
                  I code beautifully simple things and I love what I do
                </Text>
                <Text
                  fontSize={{ base: '1.125rem', md: '1.375rem' }}
                  color={subtext}
                  lineHeight="1.55"
                  wordBreak="break-word">
                  And of-course a love for egyptian bracket
                </Text>
              </VStack>
            </MotionBox>

            <MotionBox initial="hidden" animate="show" variants={fadeUp(0.24)}>
              <HStack gap={2} flexWrap="wrap">
                <Button
                  asChild
                  size="md"
                  fontSize="1rem"
                  variant="accent"
                  borderRadius="full"
                  px={5}>
                  <NextLink href="/projects">Work</NextLink>
                </Button>
                <Button
                  asChild
                  size="md"
                  fontSize="1rem"
                  variant="outline"
                  borderRadius="full"
                  px={5}
                  borderColor="brand.500"
                  color="brand.400"
                  _hover={{ bg: 'site.hover' }}>
                  <NextLink href="/blogs">Writing</NextLink>
                </Button>
                <Button
                  asChild
                  size="md"
                  fontSize="1rem"
                  variant="ghost"
                  borderRadius="full"
                  px={3}
                  color="site.strong"
                  _hover={{ bg: 'site.hover' }}>
                  <NextLink href="/about">About</NextLink>
                </Button>
              </HStack>
            </MotionBox>

            <MotionBox initial="hidden" animate="show" variants={fadeUp(0.32)} w="100%">
              <HStack gap={4} flexWrap="wrap" pt={1} align="start">
                <Box minW={0}>
                  <Text
                    fontFamily="mono"
                    fontSize="0.875rem"
                    color={subtext}
                    letterSpacing="0.08em">
                    OPEN SOURCE
                  </Text>
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    px={0}
                    height="auto"
                    fontSize="1.125rem"
                    fontWeight="600"
                    color="brand.400"
                    _hover={{ bg: 'transparent', color: 'brand.300' }}>
                    <a
                      href="https://github.com/knowankit"
                      target="_blank"
                      rel="noopener noreferrer">
                      <AiOutlineGithub />
                      {shownStars ? `${shownStars.toLocaleString()} stars` : 'GitHub'}
                    </a>
                  </Button>
                </Box>
                <Box minW={0}>
                  <Text
                    fontFamily="mono"
                    fontSize="0.875rem"
                    color={subtext}
                    letterSpacing="0.08em">
                    CURRENT FOCUS
                  </Text>
                  <Text fontWeight="600" fontSize="1.125rem">
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

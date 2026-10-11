import React from 'react';
import { Box, Flex, IconButton, Text, HStack } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  useDisclosure,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';
import { BiMenuAltRight } from 'react-icons/bi';
import { BsMoon, BsSun } from 'react-icons/bs';

const navItems = [
  { name: 'Home', link: '/' },
  { name: 'Projects', link: '/projects' },
  { name: 'Writing', link: '/blogs' },
  { name: 'About', link: '/about' }
];

type NavLinkProps = { href: string; label: string; onNavigate?: () => void };

const NavLink = ({ href, label, onNavigate }: NavLinkProps) => {
  const router = useRouter();
  const muted = useColorModeValue('ink.600', 'ink.300');
  const activeColor = useColorModeValue('brand.600', 'brand.300');
  const hoverInactive = useColorModeValue('ink.800', 'ink.50');
  const isActive = router.asPath === href || (href !== '/' && router.asPath.startsWith(href));

  return (
    <Box
      as={Link}
      href={href}
      onClick={onNavigate}
      px={3}
      py={2}
      borderRadius="md"
      fontWeight="600"
      fontSize="sm"
      letterSpacing="0.02em"
      color={isActive ? activeColor : muted}
      position="relative"
      transition="color 0.2s ease"
      _hover={{ color: isActive ? activeColor : hoverInactive }}
      _after={
        isActive
          ? {
              content: '""',
              position: 'absolute',
              left: 3,
              right: 3,
              bottom: '6px',
              height: '2px',
              borderRadius: 'full',
              bg: 'brand.500'
            }
          : undefined
      }>
      {label}
    </Box>
  );
};

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const muted = useColorModeValue('ink.600', 'ink.300');
  const iconHoverBg = useColorModeValue('blackAlpha.50', 'whiteAlpha.100');
  const drawerBg = useColorModeValue('ink.50', 'ink.900');

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      w="100%"
      maxW="1200px"
      minW={0}
      mx="auto"
      px={{ base: 4, md: 8 }}
      py={4}>
      <HStack as={Link} href="/" alignItems="baseline" spacing={2} aria-label="Home">
        <Text
          fontFamily="mono"
          fontSize="sm"
          fontWeight="600"
          letterSpacing="0.08em"
          color="brand.400">
          KA
        </Text>
        <Text display={{ base: 'none', sm: 'block' }} fontSize="sm" fontWeight="500" color={muted}>
          Ankit Kumar
        </Text>
      </HStack>

      <HStack spacing={1} display={{ base: 'none', md: 'flex' }}>
        {navItems.map((item) => (
          <NavLink key={item.link} href={item.link} label={item.name} />
        ))}
        <IconButton
          ml={2}
          size="sm"
          variant="ghost"
          aria-label={colorMode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          icon={colorMode === 'light' ? <BsMoon /> : <BsSun />}
          onClick={toggleColorMode}
          color={muted}
          _hover={{ bg: iconHoverBg }}
        />
      </HStack>

      <HStack spacing={2} display={{ base: 'flex', md: 'none' }}>
        <IconButton
          size="sm"
          variant="ghost"
          aria-label={colorMode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          icon={colorMode === 'light' ? <BsMoon /> : <BsSun />}
          onClick={toggleColorMode}
          color={muted}
          _hover={{ bg: iconHoverBg }}
        />
        <IconButton
          variant="ghost"
          aria-label="Open menu"
          icon={<BiMenuAltRight size={26} />}
          onClick={onOpen}
          color={muted}
          _hover={{ bg: iconHoverBg }}
        />
        <Drawer size="full" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent bg={drawerBg}>
            <DrawerCloseButton />
            <DrawerBody
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap={6}>
              {navItems.map((item) => (
                <NavLink key={item.link} href={item.link} label={item.name} onNavigate={onClose} />
              ))}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </HStack>
    </Flex>
  );
};

export default Navbar;

'use client';

import React, { useState } from 'react';
import { Box, CloseButton, Drawer, Flex, HStack, IconButton, Portal, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { BiMenuAltRight } from 'react-icons/bi';
import { BsMoon, BsSun } from 'react-icons/bs';
import { useColorMode } from '@/components/ui/color-mode';

const navItems = [
  { name: 'Home', link: '/' },
  { name: 'Projects', link: '/projects' },
  { name: 'Writing', link: '/blogs' },
  { name: 'About', link: '/about' }
];

type NavLinkProps = { href: string; label: string; onNavigate?: () => void };

const NavLink = ({ href, label, onNavigate }: NavLinkProps) => {
  const pathname = usePathname() || '/';
  const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <Box
      asChild
      px={3}
      py={2}
      borderRadius="md"
      fontWeight="600"
      fontSize="sm"
      letterSpacing="0.02em"
      color={isActive ? 'site.navActive' : 'site.subtext'}
      position="relative"
      transition="color 0.2s ease"
      _hover={{ color: isActive ? 'site.navActive' : 'site.strong' }}
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
      <NextLink href={href} onClick={onNavigate}>
        {label}
      </NextLink>
    </Box>
  );
};

const ColorModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <IconButton
      size="sm"
      variant="ghost"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={toggleColorMode}
      color="site.subtext"
      _hover={{ bg: 'site.hover' }}>
      {isDark ? <BsSun /> : <BsMoon />}
    </IconButton>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
      <HStack asChild alignItems="baseline" gap={2}>
        <NextLink href="/" aria-label="Home">
          <Text
            fontFamily="mono"
            fontSize="sm"
            fontWeight="600"
            letterSpacing="0.08em"
            color="brand.400">
            KA
          </Text>
          <Text
            display={{ base: 'none', sm: 'block' }}
            fontSize="sm"
            fontWeight="500"
            color="site.subtext">
            Ankit Kumar
          </Text>
        </NextLink>
      </HStack>

      <HStack gap={1} display={{ base: 'none', md: 'flex' }}>
        {navItems.map((item) => (
          <NavLink key={item.link} href={item.link} label={item.name} />
        ))}
        <Box ml={2}>
          <ColorModeButton />
        </Box>
      </HStack>

      <HStack gap={2} display={{ base: 'flex', md: 'none' }}>
        <ColorModeButton />
        <Drawer.Root size="full" open={open} onOpenChange={(e) => setOpen(e.open)}>
          <Drawer.Trigger asChild>
            <IconButton
              variant="ghost"
              aria-label="Open menu"
              color="site.subtext"
              _hover={{ bg: 'site.hover' }}>
              <BiMenuAltRight size={26} />
            </IconButton>
          </Drawer.Trigger>
          <Portal>
            <Drawer.Backdrop />
            <Drawer.Positioner>
              <Drawer.Content bg="site.page">
                <Drawer.CloseTrigger asChild>
                  <CloseButton size="sm" position="absolute" top={4} right={4} />
                </Drawer.CloseTrigger>
                <Drawer.Body
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  gap={6}>
                  {navItems.map((item) => (
                    <NavLink
                      key={item.link}
                      href={item.link}
                      label={item.name}
                      onNavigate={() => setOpen(false)}
                    />
                  ))}
                </Drawer.Body>
              </Drawer.Content>
            </Drawer.Positioner>
          </Portal>
        </Drawer.Root>
      </HStack>
    </Flex>
  );
};

export default Navbar;

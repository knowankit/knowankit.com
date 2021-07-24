import React from 'react';
import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  useDisclosure
} from '@chakra-ui/react';
import { BiMenuAltRight } from 'react-icons/bi';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const loadMenu = (isMobile = false) => {
    const menus = [
      { name: 'Home', link: '/' },
      { name: 'Projects', link: '/projects' },
      // { name: 'Blog', link: '/blogs' },
      { name: 'About me', link: '/about' }
    ];

    if (isMobile) {
      return (
        <Box
          height="100vh"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center">
          {menus.map((menu, index) => (
            <Box
              m="1rem"
              height="10vh"
              key={index}
              fontWeight="bold"
              fontSize="2rem"
              color={router.asPath === menu.link ? 'brand' : ''}>
              <Link href={menu.link} passHref>
                {menu.name}
              </Link>
            </Box>
          ))}
        </Box>
      );
    }

    return menus.map((menu, index) => (
      <Box
        mr="20px"
        key={index}
        cursor="pointer"
        color={router.asPath === menu.link ? 'brand' : ''}>
        <Link href={menu.link} passHref>
          <Box as="span" fontWeight="bold">
            {menu.name}
          </Box>
        </Link>
      </Box>
    ));
  };

  return (
    <Box display="flex" justifyContent="space-between" height="10vh" boxShadow="xl" bg="black">
      <Box height="20px" m="1rem">
        <a href="https://knowankit.com">
          <Image src="/portfolio-logo.png" alt="knowankit logo" height="50px" width="50px" />
        </a>
      </Box>
      <Box
        color="white"
        display={['none', 'none', 'flex', 'flex']}
        alignItems="center"
        fontSize="1.2rem">
        {loadMenu()}
      </Box>
      <Box m="1rem" display={['flex', 'flex', 'none', 'none']}>
        <BiMenuAltRight color="white" fontSize="2.5em" cursor="pointer" onClick={onOpen} />
        <Drawer size="full" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>{loadMenu(true)}</DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;

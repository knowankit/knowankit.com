import React from "react";
import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, useDisclosure } from '@chakra-ui/react'
import { BiMenuAltRight }  from 'react-icons/bi'

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const loadMenu = (isMobile = false) => {
    const menus = [{ name: 'Home', link: '/' }, { name: 'Projects', link: '/projects' }, { name: 'Articles', link: '/articles'}, { name: 'About me', link: '/about' }]

    if (isMobile) {
      return (
        <Box>
        {menus.map((menu, index) => (
          <Box m='1rem' key={index} fontWeight='bold'>
            <Link href={menu.link} passHref>
              {menu.name}
            </Link>
          </Box>
        ))}
        </Box>
      )
    }

    return menus.map((menu, index) => (
      <Box mr='20px' key={index} cursor='pointer'>
        <Link href={menu.link} passHref>
          <Box as='span' fontWeight='bold'>{menu.name}</Box>
        </Link>
      </Box>
    ))
  }

  return (
    <Box display='flex' justifyContent='space-between' height='10vh'>
    <Box height='20px' m='1rem'>
      <a href='https://knowankit.com'><Image src='/portfolio-logo.png' alt='knowankit logo' height='50px' width='50px' /></a>
    </Box>
    <Box color='white' display={['none', 'none', 'flex', 'flex']} alignItems='center' fontSize='1.2rem'>
      {loadMenu()}
    </Box>
    <Box m='1rem' display={['flex', 'flex', 'none', 'none']}>
      <BiMenuAltRight color='white' fontSize='2.5em' onClick={onOpen} />
    <Modal onClose={onClose} size='lg' isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
           {loadMenu(true)}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  </Box>
  )
}

export default Navbar

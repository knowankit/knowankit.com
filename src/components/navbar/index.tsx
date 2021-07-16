import React from "react";
import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  const loadMenu = () => {
    const menus = [{ name: 'Home', link: '/' }, { name: 'Projects', link: '/projects' }, { name: 'Articles', link: '/articles'}, { name: 'About me', link: '/about' }]

    return menus.map((menu, index) => (
      <Box mr='20px' key={index}>
        <Link href={menu.link}>
          {menu.name}
        </Link>
      </Box>
    ))
  }

  return (
    <Box display='flex' justifyContent='space-between' height='10vh'>
    <Box height='20px' m='1rem'>
      <a href='https://knowankit.com'><Image src='/portfolio-logo.png' alt='knowankit logo' height='50px' width='50px' /></a>
    </Box>
    <Box color='white' display='flex' alignItems='center' fontSize='1.2rem'>
      {loadMenu()}
    </Box>
  </Box>
  )
}

export default Navbar

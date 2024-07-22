import React from 'react'
import { useRouter } from 'next/router'
import Logo from './Logo'
import {TwitterIcon,LinkedInIcon, GithubIcon, PinterestIcon} from './Icons.js'
import { motion } from 'framer-motion'



const CustomLink = ({title, href, className=""}) => {

      const router = useRouter();
      console.log(router)

  return (
    <a href={href} className={`${className} relative group`}>
      {title}

        <span className={`h-[1px] inline-block
      bg-dark absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] duration-500
      ease-in-out
      ${router.asPath === href ? 'w-full' : 'w-0'}
      `}>&nbsp;</span>

      </a>
      )
}


const NavBar = () => {
  return (
    <header
    className='w-full px-32 py-8 font-medium flex items-center justify-between'
    >
        <nav>
           <CustomLink href='/' title='Home' className='mx-4'/>
           <CustomLink href='/projects' title='Projects' className='mx-4'/>
           <CustomLink href='/about' title='About' className='mx-4'/>
           <CustomLink href='/contact' title='Contact' className='ml-4'/>
        </nav>

        <nav className='flex items-center justify-center flex-wrap'>
              <motion.a href='https://x.com/salve_kartik' target={'_blank'}
              className='w-6 mx-3'
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              >
              <TwitterIcon />
              </motion.a>
              <motion.a href='https://github.com/deadtik' target={'_blank'}
              className='w-6 mx-3'
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              >
              <GithubIcon />
              </motion.a>
              <motion.a href='https://in.pinterest.com/kartiksalve1809/' target={'_blank'}
              className='w-6 mx-3'
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              >
              <PinterestIcon/>
              </motion.a>
              <motion.a href='https://www.linkedin.com/in/kartik-salve1809/' target={'_blank'}
              className='w-6 ml-3'
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              >
              <LinkedInIcon />
              </motion.a>
        </nav>
        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
          <Logo />
        </div>
    </header>
  )
}


export default NavBar;

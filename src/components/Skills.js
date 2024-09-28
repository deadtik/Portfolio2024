import React from 'react';
import { motion } from 'framer-motion';

const Skill = ({name, x, y}) => {
return (
  <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
      py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
      lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
      xs:text-dark xs:dark:text-light xs:font-bold
      '
      whileHover={{scale: 1.05}}
      whileTap={{scale: 0.95}}
      initial={{x:0 , y:0}}
      whileInView={{x: x, y: y}}
      transition={{duration: 1.5}}
      >
       {name}
      </motion.div>

);
}

const Skills = () => {
  return (
    <>
    <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32 xs:text-4xl sm:text-3xl'> Skills </h2>
    <div className='w-full h-screen relative flex items-center justify-center lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
    rounded-full bg-circularLight dark:bg-circularDark 
    lg:bg-circularLightLg lg:dark:bg-circularDarkLg
    md:bg-circularLightMd md:dark:bg-circularDarkMd
    sm:bg-circularLightSm sm:dark:bg-circularDarkSm
    '>

      <motion.div className='flex items-center justify-center rounded-full
       font-semibold bg-dark text-light lg:p-6 md:p-4 xs:text-xs xs:p-2
      p-2 shadow-dark cursor-pointer dark:text-dark dark:bg-light
      '
      whileHover={{scale: 1.05}}
      whileTap={{scale: 0.95}}
      >
       Core Development
      </motion.div>

      <Skill name='CSS' x='-17vw' y='-12vw' />
      <Skill name='JavaScript' x='2vw' y='11vw' />
      <Skill name='ReactJS' x='13vw' y='17vw' />
      <Skill name='NextJS' x='26vw' y='6vw' />
      <Skill name='TailwindCSS' x='0vw' y='-8vw' />
      <Skill name= 'DSA' x='-15vw' y='-17vw' />
      <Skill name='Python' x='-25vw' y='18vw' />
      <Skill name='C++' x='-34vw' y='6vw' />
    </div>
    </>
  );
};

export default Skills;

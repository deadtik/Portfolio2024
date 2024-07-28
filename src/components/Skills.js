import React from 'react';
import { motion } from 'framer-motion';

const Skill = ({name, x, y}) => {
return (
  <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
      py-3 px-6 shadow-dark cursor-pointer absolute'
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
    <h2 className='font-bold text-8xl mt-64 w-full text-center'> Skills </h2>
    <div className='w-full h-screen relative flex items-center justify-center 
    rounded-full bg-circularLight'>

      <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
      p-2 shadow-dark cursor-pointer '
      whileHover={{scale: 1.05}}
      whileTap={{scale: 0.95}}
      >
       Core Development
      </motion.div>

      <Skill name='HTML' x='-10vw' y='5vw' />
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

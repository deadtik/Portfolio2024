import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import profilePic from '../../public/images/profile/Designer.jpeg';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';

const AnimatedNumbers = ({value}) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref,{triggerOnce: true});

  useEffect(() => {
    if(isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect (() => {
        springValue.on("change", (latest) => {
          if(ref.current && latest.toFixed(0) <= value) {
            ref.current.textContent = latest.toFixed(0);
          }
        })
  }, [springValue, value])

  return <span ref={ref}></span>

  } 


const about = () => {
  return (
    <>
    <Head>
        <title>Kartik | About Page</title>
      <meta name='description' content='any description' />
    </Head>
    <main className='flex w-full flex-col items-center justify-center dark:text-light'>
     <Layout className='pt-16 pb-16'>
        <AnimatedText text='Dream, plan, execute.' className='mb-16'/>
        <div className='grid w-full grid-cols-8 gap-16'>
          <div className='col-span-3 flex flex-col items-start justify-start'>
            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>About Me</h2>
            <p className='font-medium'>
            We are a creative collective passionate about translating your brand's essence into a captivating online experience.
             We understand the power of a well-crafted digital presence, and we're here to be your one-stop shop for crafting it.
            </p>
            <p className='my-4 font-medium'>
            From the ground floor up, our team of web developers and UI/UX designers builds the foundation of your online identity.
             We take meticulous care in crafting user interfaces that are not only aesthetically pleasing but also intuitive and user-friendly.
But a beautiful website is just the beginning. Our talented photographers and videographers capture the essence of your brand visually,  bringing your story to life in a way that resonates with your target audience.
            </p>
            <p className='font-medium'>
            The journey doesn't end there. Our digital marketing strategists weave magic in the background, ensuring your brand reaches the right eyes. We don't just create an online space; 
            we craft immersive user experiences that elevate your brand and propel it forward.
            </p>
          </div>
          <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
          bg-light p-8 flex flex-col justify-between dark:bg-dark dark:border-light'>
            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark 
            dark:bg-light '/>
          <Image src={profilePic} alt='Techates' className='w-full h-auto rounded-2xl'/>
          </div>

          <div className='col-span-2 flex flex-col items-end justify-between'>
        <div className='flex flex-col items-end justify-center'>
          <span className='inline-block text-6xl font-bold'>
              <AnimatedNumbers value={100} />+
          </span>
          <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>
            Satisfied Clients
          </h2>
        </div>
        <div className='flex flex-col items-end justify-center'>
          <span className='inline-block text-6xl font-bold'>
          <AnimatedNumbers value={90} />+
          </span>
          <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>
            Projects Completed
          </h2>
        </div>
        <div className='flex flex-col items-end justify-center'>
          <span className='inline-block text-6xl font-bold'>
          <AnimatedNumbers value={2} />+
          </span>
          <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>
            Years of Experience
          </h2>
        </div>
          </div>
        </div>
        <Skills />
        <Experience />
        <Education />
     </Layout> 
    </main>
    </>
  );
}

export default about;

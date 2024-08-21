import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from '@/components/Icons';
import project1 from '../../public/images/projects/portfolio-cover-image.jpg';

const FeaturedProjects= ({type, title, summary, img, link, github}) => {
  return(
    <article className='w-full flex items-center justify-between rounded-3xl 
        border border-solid border-dark bg-light shadow-2xl p-12
          relative'>
      <Link href={link} target='_blank'
      className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
      <Image src={img} alt={title} className='w-full h-auto'/>      
     </Link>

         <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
           <span className='text-primary font-medium text-xl'>{type}</span>
              <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
              </Link>
              <p className='my-2 font-medium text-dark'>{summary}</p>
              <div className='mt-2 flex items-center'>
                <Link href={github} target='_blank' className='w-10'> <GithubIcon /> </Link>
                <Link href={link} target='_blank'
                className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
                hover:bg-light hover:text-dark border-2 border-solid border-transparent
                hover:border-dark transition-all'
                > Visit the Project </Link>              
              </div>
</div>
</article>

  )
}

const Project = ({type, title, summary, img, link, github}) => {
  return (

    <article className='w-full flex items-center justify-center rounded-2xl 
        border border-solid border-dark bg-light shadow-2xl p-6
          relative'>
      <Link href={link} target='_blank'
      className='w-full cursor-pointer overflow-hidden rounded-lg'>
      <Image src={img} alt={title} className='w-full h-auto'/>      
      </Link>

         <div className='w-full flex flex-col items-start justify-between pl-6'>
           <span className='text-primary font-medium text-xl'>{type}</span>
              <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
              </Link>
          
              <div className='mt-2 flex items-center'>
                <Link href={github} target='_blank' className='w-10'> <GithubIcon /> </Link>
                <Link href={link} target='_blank'
                className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
                hover:bg-light hover:text-dark border-2 border-solid border-transparent
                hover:border-dark transition-all'
                > Visit </Link>              
              </div>
        </div>
</article>
  )
}


const Projects = () => {
return (
    <>
    <Head>
          <title>P.O.W | Projects Page</title>
        <meta name='description' content='any description' />
      </Head>
      <main className='flex w-full flex-col items-center justify-center mb-16'>
          <Layout className='pt-16'>
              <AnimatedText text='Imagine. Create. Repeat.'
              className='mb-16 '
              />

            <div className='grid grid-col-12 gap-24'>
            
                <div className='col-span-12'>
            <FeaturedProjects
            title = 'Beyond Bounds'
            summary = 'Digital Marketing and Web Development for BEYOND BOUNDS.'
             img = {project1}
             link='/'
             github='/'
             type='Ongoing Project'
                   />
          
      </div> 
      <div className='col-span-6'>
        <Project
            title = 'Beyond Bounds'
            summary = 'Digital Marketing and Web Development for BEYOND BOUNDS.'
             img = {project1}
             link='/'
             github='/'
             type='Completed Project'
           />
            </div>

            <div className='col-span-6'>
        <Project
            title = 'Beyond Bounds'
            summary = 'Digital Marketing and Web Development for BEYOND BOUNDS.'
             img = {project1}
             link='/'
             github='/'
             type='Completed Project'
           />
            </div>
            </div>

          </Layout>
      </main>
    </>
)
};

export default Projects;

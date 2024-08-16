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
        border border-solid border-dark bg-light shadow-2xl
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
              <p>{summary}</p>
              <div>
                <Link href={github} target='_blank'> <GithubIcon /> </Link>
                <Link href={link} target='_blank'> Visit the Project </Link>              
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
              <AnimatedText text='Imagine. Create. Repeat.'/>

            <div className='grid grid-col-12 gap-24'>
            
                <div className='col-span-12'>
            <FeaturedProjects
            title = 'Crypto Screener Application'
            summary = 'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.'
             img = {project1}
             link='/'
             github='/'
             type='Featured Project'
            
            />
                </div>
            
                <div className='col-span-6'>
                  <FeaturedProjects
                  title = 'Crypto Screener Application'
                  summary = 'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.'
                   img = {project1}
                   link='/'
                   github='/'
                   type='Featured Project'
                  />
                </div>
            
                <div className='col-span-6'> 
                <FeaturedProjects
                  title = 'Crypto Screener Application'
                  summary = 'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.'
                   img = {project1}
                   link='/'
                   github='/'
                   type='Featured Project' 
                   />
                 </div>
            
               <div className='col-span-6'> 
                <FeaturedProjects
            title = 'Crypto Screener Application'
            summary = 'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.'
             img = {project1}
             link='/'
             github='/'
             type='Featured Project'
            />

                 </div>
              
                <div className='col-span-6'>
                <FeaturedProjects
            title = 'Crypto Screener Application'
            summary = 'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.'
             img = {project1}
             link='/'
             github='/'
             type='Featured Project'
            />

                </div>
            </div>

          </Layout>
      </main>
    </>
)
};

export default Projects;

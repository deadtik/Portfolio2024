import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from '@/components/Icons';

const FeaturedProjects= ({type, title, summary, img, link, github}) => {
  return(
    <article>
      <Link href={link} target='_blank'>
      <Image src={img} alt={title} className='w-full h-auto'/>
      </Link>

         <div>
           <span>{type}</span>
              <Link href={link} target='_blank'>
                <h2>{title}</h2>
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
              <AnimatedText text='Featured Projects!'/>

            <div className='grid grid-col-12 gap-24'>
                <div className='col-span-12'>
                    <FeaturedProjects />
                </div>
                <div className='col-span-6'>Project 1</div>
                <div className='col-span-6'> Project 2 </div>
                <div className='col-span-6'> Project 2 </div>
                <div className='col-span-6'> Project 2 </div>
            </div>

          </Layout>
      </main>
    </>
)
};

export default Projects;

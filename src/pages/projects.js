import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';

const Projects = () => {
return (
    <>
    <Head>
          <title>P.O.W | Projects Page</title>
        <meta name='description' content='any description' />
      </Head>
      <main className='flex w-full flex-col items-center justify-center mb-16'>
          <Layout>
              <AnimatedText text='Featured Development Projects'/>

            <div className='grid grid-col-12 gap-24'>
                <div className='col-span-12'>
                    Project 0
                </div>
                <div className='col-span-6'>Project 1</div>
                <div className='col-span-6'> Project 2 </div>
            </div>

          </Layout>
      </main>
    </>
)
};

export default Projects;

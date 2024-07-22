  import Head from 'next/head'
  import Layout from '@/components/Layout'
  import Image from 'next/image'
  import profilePic from "../../public/images/profile/developertest.png"
  import AnimatedText from '@/components/AnimatedText'
  import Link from 'next/link'
  import { LinkArrow } from '@/components/Icons'
  import Hireme from '@/components/Hireme'
  import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg"


  export default function Home() {
    return (
      <>
        <Head>
          <title>New Portfolio</title>
          <meta name="description" content="Generated by create next app" /> 
        </Head>
        <main className='pt-0 flex items-center text-dark w-full min-h-screen'> 
          <Layout>
            <div className='flex items-center justify-between w-full'>
              <div className='w-1/2'>
                <Image src={profilePic} alt='Techates' className='w-full h-auto'/>
              </div>
              <div className='w-1/2 flex flex-col items-center self-center'>
                <AnimatedText text={'Crafting compelling web experiences - design, development, and digital marketing that captivates.'} className='!text-4xl !text-left'/>
                <p className='my-4 text-base font-medium'>
                  We bring your brand to life online. From web development and UI/UX design to captivating photography, videography, and strategic digital marketing,
                  we craft immersive user experiences that elevate your brand.
                </p>
                <div className='flex items-center self-start mt-2 '>
                  <Link href="/Vision and Mission.pdf" target='_blank' className='flex items-left bg-dark text-light p-2 px-2.5 rounded-lg text-lg font-semibold hover:bg-light
                   hover:text-dark border-2 border-solid border-transparent hover:border-dark'>
                    Vision! <LinkArrow className='w-6 ml-1' />
                  </Link>
                  <Link href="mailto:techateshq@gmail.com" target='_blank' className='ml-4 text-lg font-medium capitalize text-dark underline'>
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </Layout>
          <Hireme />
          <div className='absolute right-8 bottom-1 inline-block w-12'>
            <Image src={lightBulb} alt='Techates' className='w-auto h-full'/>
          </div>
        </main>
      </>
    )
  }

import React from 'react';
import { motion, useScroll } from "framer-motion";
import { useRef } from 'react';
import LiIcon from './LiIcon';

const Details = ({position, company, companyLink, time, address, work}) => {

  const ref = useRef(null);
  
  return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto pl-8 
                        flex flex-col items-center justify-between '>
    <LiIcon reference={ref}/>

    <motion.div
    initial={{y: 50}}
    whileInView={{y: 0}}
    transition={{duration: 0.5, type: "spring"}}
    >
      <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;<a href={companyLink}
       target='_blank' className='text-primary capitalize dark:text-primaryDark/75'
       >@{company}</a></h3>
      <span className='capitalize text-dark/75 font-medium dark:text-light/75'>
        {time} | {address}
      </span>
      <p className='font-medium w-full'>
        {work}
      </p>
    </motion.div>
  </li>
    
}


const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  );
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center'>
        Experience
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative'>
        
          <motion.div
          style={{scaleY: scrollYProgress}}
          className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light' />
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details
                position= 'Photography and Graphic Design '
                company= 'Beyond Bounds'
                companyLink ='/'
                time= 'May 2024 - Current'
                address= "Powai, Mumbai - India"
                work="As a photographer and graphic designer, I created visually compelling content for websites and social media platforms. I focused on producing high-quality images and custom graphics that enhanced brand aesthetics and engagement. 
                My work combined creativity with technical skills in tools like Photoshop and Illustrator to deliver impactful visual solutions for marketing and design projects."
                />

<Details
                position= 'Web Developer'
                company= 'Beyond Bounds'
                companyLink ='/'
                time= 'May 2024 - Current'
                address= "Powai, Mumbai."
                work="As a web developer, I integrated Razorpay as a payment gateway into various projects, enabling seamless and secure transactions. I implemented payment processing features such as recurring payments, invoicing, and refunds, ensuring smooth customer experiences. 
                My expertise in handling APIs and payment flows enhanced the overall functionality of e-commerce platforms."
                />

<Details
                position= 'Digital Marketing'
                company= 'Beyond Bounds'
                companyLink ='https://bbdecors.com/'
                time= 'Aug 2023 - Dec 2023'
                address= "Mumbai, India"
                work="Developed curated Ads and strategies to help them enhance their business. 
                Drove a range of customers and multiplied their sales. Helped the business turn into a brand."
                />


<Details
                position= 'WordPress Developer'
                company= 'Birdy Furniture'
                companyLink ='https://birdyfurniture.com/'
                time= 'Jan 2023 - July 2023'
                address= "Mumbai, India"
                work="Assisted and Co-developed Birdy Furniture's Website using WordPRess and Elementor Plugin, 
                along with payment gateway and responsive."
                />



<Details
                position= 'Web developmnt BackEnd Intern'
                company= 'Verzeo Edutech'
                companyLink ='https://learn.verzeo.in/'
                time= '2022-2023'
                address= "Bengaluru, India"
                work="Completed an internship at Verzeo Edutech, where I gained hands-on experience in web development, 
                focusing on backend technologies. I developed skills in Node.js and MongoDB, working on dynamic server-side applications. The experience strengthened my understanding of building scalable, database-driven web applications."
                />


            </ul>
        </div>
    </div>
  );
};

export default Experience;
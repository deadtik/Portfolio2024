import React from 'react';
import Layout from './Layout';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-dark font-medium text-lg'>
           <Layout className='w-full py-8 flex items-center justify-between'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center'> Built with <span className='text-red-900 text-2xl px-1' >&#9825;</span> by &nbsp;
            <Link href='https:www.instagram.com/techateshq/' target='_blank' className='underline underline-offset-2'>Techates!</Link>
            </div>
            <Link aria-label='Techates' href={ 'https://wa.me/919867882681'} target='_blank' className='underline underline-offset-2'>
            Reach out to us.</Link>
           </Layout>
        </footer>
    );
};

export default Footer;
import React, { useRef } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [state, handleSubmit] = useForm('movakzae');

  const formRef = useRef(null);

  if (state.succeeded) {
    return (
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Thanks for reaching out!"
            className="mb-16"
          />
          <p className="text-center text-base font-medium">
            We'll get back to you as soon as possible.
          </p>
        </Layout>
      </main>
    );
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e);
    formRef.current.reset();
  };

  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Contact page" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Let's Connect!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <motion.form
            ref={formRef}
            onSubmit={handleFormSubmit}
            className="flex w-full flex-col gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >

            <div className=" w-full flex items-center p-6 justify-start">
              
              <input 
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="input"
                required
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="input"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Message"
              className="textarea"
              required
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              type="submit"
              className="btn"
              disabled={state.submitting}
            >
              Submit
            </button>
          </motion.form>
        </Layout>
      </main>
    </>
  );
};

export default Contact;

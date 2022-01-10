import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      className='max-w-7xl m-auto p-96 w-full flex justify-center'
    >
      <h2>Contact Me.</h2>
    </motion.div>
  );
}

export default Contact;

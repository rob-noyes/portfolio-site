import React from 'react';
import { motion } from 'framer-motion';

function Project() {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <h1>Im a project!</h1>
    </motion.div>
  );
}

export default Project;

import React, { ComponentType } from 'react';
import { motion } from 'framer-motion';

interface Props {
  // eslint-disable-next-line
  children?: any;
}

const variants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -100 },
};

const PageTransition: ComponentType<Props> = ({ children }: Props) => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4 }}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;

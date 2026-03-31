import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const GlitchText = ({ children, className = '' }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.85) {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 100 + Math.random() * 150);
      }
    }, 2000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <motion.span
      className={`glitch-text ${className} ${isGlitching ? 'glitching' : ''}`}
      data-text={children}
      animate={isGlitching ? { x: [0, -2, 2, -1, 0] } : { x: 0 }}
      transition={{ duration: 0.1 }}
    >
      {children}
    </motion.span>
  );
};

export default GlitchText;

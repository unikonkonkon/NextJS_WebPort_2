'use client';

import { motion, Variants } from 'framer-motion';
import { memo } from 'react';

function ExperienceSection() {
  // Animation variants for staggered children
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: 'easeInOut' as const,
      },
    },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  };

  return (
    <motion.section
      id="expertise"
      className="bg-gradient-to-b relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.07 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Custom CSS for timeline glow effects */}
      <style jsx>{`
        .timeline-line {
          position: relative;
          background: linear-gradient(180deg, var(--accent-color), transparent);
          box-shadow: 0 0 20px rgba(123, 104, 238, 0.5);
          animation: pulse-glow 2s ease-in-out infinite alternate;
        }

        .timeline-dot {
          position: relative;
        }

        .timeline-dot::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 20px;
          height: 20px;
          background: var(--accent-color);
          border-radius: 50%;
          box-shadow: 
            0 0 20px rgba(123, 104, 238, 0.8),
            0 0 40px rgba(123, 104, 238, 0.4);
          animation: dot-glow 2s ease-in-out infinite alternate;
        }

        .timeline-dot::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 8px;
          height: 8px;
          background: white;
          border-radius: 50%;
          z-index: 2;
        }

        @keyframes pulse-glow {
          0% { box-shadow: 0 0 20px rgba(123, 104, 238, 0.5); }
          100% { box-shadow: 0 0 30px rgba(123, 104, 238, 0.8); }
        }

        @keyframes dot-glow {
          0% { 
            box-shadow: 
              0 0 20px rgba(123, 104, 238, 0.8),
              0 0 40px rgba(123, 104, 238, 0.4);
          }
          100% { 
            box-shadow: 
              0 0 30px rgba(123, 104, 238, 1),
              0 0 60px rgba(123, 104, 238, 0.6);
          }
        }

        .experience-card {
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .experience-card:hover {
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.1),
            0 0 30px rgba(123, 104, 238, 0.2);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-8">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-8" 
          style={{ color: 'var(--text-primary)' }}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Test Experience
        </motion.h2>

        <div className="flex flex-row items-start">
          {/* Timeline with Glow Effects */}
          <motion.div 
            className="hidden md:flex relative flex-col items-center mr-10" 
            style={{ minWidth: 230 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Year 1 */}
            <div className="flex flex-col items-center">
              <div className="timeline-line w-1 h-20"></div>
              <motion.div 
                className="timeline-dot w-4 h-4 rounded-full mt-2 mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              ></motion.div>
              <motion.span 
                className="text-2xl font-medium mt-2 mb-2" 
                style={{ color: 'var(--text-primary)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Test Period 1
              </motion.span>
            </div>
            
            <div className="timeline-line w-1 h-[200px]"></div>
            
            {/* Year 2 */}
            <div className="flex flex-col items-center">
              <motion.div 
                className="timeline-dot w-4 h-4 rounded-full mt-2 mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              ></motion.div>
              <motion.span 
                className="text-2xl font-medium mt-2 mb-2" 
                style={{ color: 'var(--text-primary)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Test Period 2
              </motion.span>
            </div>
          </motion.div>

          {/* Experience Cards */}
          <div className="flex flex-col gap-24 w-full">
            
            {/* Card 1 - Vertobase */}
            <motion.div
              className="experience-card rounded-xl p-6 shadow-md max-w-6xl"
              style={{
                backgroundColor: 'var(--card-bg)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-color)',
              }}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.3 }}
              animate={floatingAnimation}
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-2xl md:hidden">Test Period 1</h3>
                <motion.h3 
                  className="text-2xl font-semibold mb-2 drop-shadow-md" 
                  style={{ color: 'var(--accent-color)' }}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Test Company 1
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <strong>Role:</strong> Test Developer
                </motion.p>
                
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.li 
                    variants={itemVariants}
                    className="text-sm mb-1" 
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Test responsibility 1
                  </motion.li>
                  <motion.li 
                    variants={itemVariants}
                    className="text-sm mb-1" 
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Test responsibility 2
                  </motion.li>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Card 2 - iApp Technology */}
            <motion.div
              className="experience-card rounded-xl p-8 shadow-md max-w-6xl"
              style={{
                backgroundColor: 'var(--card-bg)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-color)',
              }}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.3 }}
              animate={{
                y: [0, -15, 0],
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <h3 className="text-2xl md:hidden">Test Period 2</h3>
                <motion.h3 
                  className="text-2xl font-semibold mb-2 drop-shadow-md" 
                  style={{ color: 'var(--accent-color)' }}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Test Company 2
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <strong>Role:</strong> Test Full Stack Developer
                </motion.p>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.li variants={itemVariants} className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>
                    Test responsibility 1
                  </motion.li>
                  <motion.li variants={itemVariants} className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>
                    Test responsibility 2
                  </motion.li>
                  <motion.li variants={itemVariants} className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>
                    Test responsibility 3
                  </motion.li>
                  <motion.li variants={itemVariants} className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>
                    Test responsibility 4
                  </motion.li>
                  <motion.li variants={itemVariants} className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>
                    Test responsibility 5
                  </motion.li>
                  <motion.li variants={itemVariants} className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>
                    Test responsibility 6
                  </motion.li>
                  <motion.li variants={itemVariants} className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>
                    Test responsibility 7
                  </motion.li>
                  <motion.li variants={itemVariants} className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>
                    Test responsibility 8
                  </motion.li>
                  <motion.li variants={itemVariants} className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>
                    Test responsibility 9
                  </motion.li>
                  <motion.li variants={itemVariants} className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>
                    Test responsibility 10
                  </motion.li>
                  <motion.li variants={itemVariants} className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    Test responsibility 11
                  </motion.li>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

// Memoize the component to prevent unnecessary re-renders
export default memo(ExperienceSection); 
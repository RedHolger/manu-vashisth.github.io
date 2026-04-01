import { motion, AnimatePresence } from 'motion/react';

export default function TotemLoader({ isVisible }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="wire-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
        >
          <div className="wire-grid-flat" />
          <div className="wire-scanlines" />

          <div className="wire-hud wire-hud-top-left">SYS / INIT</div>
          <div className="wire-hud wire-hud-bottom-right">READYING INTERFACE</div>

          <div className="wire-stage">
            <motion.div
              className="wire-totem-rig"
              initial={{ y: -360 }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.58,
                ease: [0.2, 0.9, 0.32, 1],
              }}
            >
              <motion.div
                className="wire-totem-settle"
                initial={{ rotateZ: -7 }}
                animate={{ rotateZ: [-7, 4, -2, 1, 0] }}
                transition={{
                  delay: 0.48,
                  duration: 0.36,
                  times: [0, 0.32, 0.58, 0.82, 1],
                  ease: 'easeOut',
                }}
              >
                <motion.div
                  className="wire-totem-axis-spin"
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: 2880 }}
                  transition={{
                    delay: 0.62,
                    duration: 3.15,
                    ease: 'linear',
                  }}
                >
                  <motion.div
                    className="wire-totem-precession"
                    initial={{ rotateZ: 0 }}
                    animate={{ rotateZ: [0, 1.4, -1.1, 0.8, -0.45, 0.2, 0] }}
                    transition={{
                      delay: 0.7,
                      duration: 2.9,
                      ease: 'easeInOut',
                    }}
                  >
                    <motion.div
                      className="wire-totem-pitch"
                      animate={{ rotateX: [8, 7.2, 6.3, 5.8, 5.5] }}
                      transition={{
                        duration: 3.15,
                        ease: 'linear',
                      }}
                    >
                      <div className="wire-totem-shell">
                        <div className="totem-axis-line" />

                        {[...Array(12)].map((_, i) => (
                          <div
                            key={`spine-top-${i}`}
                            className="totem-long-line top"
                            style={{ transform: `rotateY(${i * 15}deg)` }}
                          />
                        ))}

                        {[...Array(12)].map((_, i) => (
                          <div
                            key={`spine-bottom-${i}`}
                            className="totem-long-line bottom"
                            style={{ transform: `rotateY(${i * 15}deg)` }}
                          />
                        ))}

                        {[...Array(7)].map((_, i) => (
                          <div
                            key={`ring-top-${i}`}
                            className="totem-contour-ring top"
                            style={{
                              top: `${54 + i * 10}px`,
                              width: `${18 + i * 12}px`,
                              height: `${6 + i * 2}px`,
                              marginLeft: `${-(18 + i * 12) / 2}px`,
                              transform: `translateZ(${(i - 3) * 2}px)`,
                            }}
                          />
                        ))}

                        {[...Array(9)].map((_, i) => (
                          <div
                            key={`ring-mid-${i}`}
                            className="totem-contour-ring mid"
                            style={{
                              top: `${116 + i * 4}px`,
                              width: `${96 - i * 2}px`,
                              height: `${18 - i * 0.6}px`,
                              marginLeft: `${-(96 - i * 2) / 2}px`,
                              transform: `translateZ(${(i - 4) * 2}px)`,
                            }}
                          />
                        ))}

                        {[...Array(8)].map((_, i) => (
                          <div
                            key={`ring-bottom-${i}`}
                            className="totem-contour-ring bottom"
                            style={{
                              top: `${150 + i * 10}px`,
                              width: `${58 - i * 5.5}px`,
                              height: `${16 - i}px`,
                              marginLeft: `${-(58 - i * 5.5) / 2}px`,
                              transform: `translateZ(${(i - 4) * 2}px)`,
                            }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="wire-contact-shadow"
              initial={{ opacity: 0, scaleX: 0.15, scaleY: 0.15 }}
              animate={{
                opacity: [0, 0.35, 0.2],
                scaleX: [0.15, 1.05, 0.9],
                scaleY: [0.15, 1, 0.88],
              }}
              transition={{
                duration: 0.72,
                times: [0, 0.55, 1],
                ease: 'easeOut',
              }}
            />

            <motion.div
              className="wire-loader-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0.75] }}
              transition={{ delay: 1.1, duration: 1.8 }}
            >
              booting portfolio
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

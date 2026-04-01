import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import TotemLoader from '@/components/TotemLoader';
import GlitchText from '@/components/GlitchText';
import { FaExternalLinkAlt, FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const TechChip = ({ children }) => (
  <motion.li
    whileHover={{ scale: 1.05, y: -2 }}
    transition={{ duration: 0.2 }}
  >
    {children}
  </motion.li>
);

const ProjectCard = ({ title, description, tech, link, image, reverse }) => (
  <motion.div
    className="slide-project"
    initial={{ opacity: 0, x: reverse ? 50 : -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
  >
    <div className="slide-inner">
      <p className="slide-eyebrow">Project</p>
      <h2>{title}</h2>
      <p className="slide-body">{description}</p>
      <ul className="chips">
        {tech.map((t, i) => (
          <TechChip key={i}>{t}</TechChip>
        ))}
      </ul>
      <div className="slide-links">
        <motion.a
          href={link}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>View Project</span>
          <FaExternalLinkAlt />
        </motion.a>
      </div>
    </div>
    <div className="slide-visual">
      <motion.div
        className="visual-frame"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <Image src={image} alt={title} width={100} height={100} unoptimized />
      </motion.div>
    </div>
  </motion.div>
);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const slides = document.querySelectorAll('.slide');
    if (!slides.length) return;

    slides.forEach((slide, index) => {
      slide.classList.add('visible');
      if (index === 0) setActiveSection(0);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const id = entry.target.id;
          const index = parseInt(id.replace('slide-', ''));
          setActiveSection(index);
          entry.target.classList.add('visible');
        });
      },
      { threshold: 0.2 }
    );

    slides.forEach((slide) => observer.observe(slide));

    return () => observer.disconnect();
  }, [isLoading]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth).toFixed(2),
        y: (e.clientY / window.innerHeight).toFixed(2)
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (index) => {
    const target = document.getElementById(`slide-${index}`);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>Manu Vashisth | Engineer</title>
        <meta name="description" content="Manu Vashisth. Engineer. Full-stack development and machine learning." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AnimatePresence>
        <TotemLoader isVisible={isLoading} key="loader" />
      </AnimatePresence>

      <AnimatePresence>
        {!isLoading && (
          <motion.div
            className="app-shell"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid-overlay" />

            <div className="corner-decoration top-left" />
            <div className="corner-decoration top-right" />
            <div className="corner-decoration bottom-left" />
            <div className="corner-decoration bottom-right" />

            <motion.div
              className="coordinate-display"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              [{mousePos.x}, {mousePos.y}] // SYSTEM ONLINE
            </motion.div>

            <nav className="nav">
              <motion.div
                className="nav-dots"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {[0, 1, 2, 3, 4].map((i) => (
                  <motion.button
                    key={i}
                    className={`dot ${activeSection === i ? 'active' : ''}`}
                    onClick={() => scrollToSection(i)}
                    aria-label={`Go to section ${i + 1}`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </motion.div>
              <motion.a
                className="nav-cta"
                href="mailto:signorvashistha007@gmail.com"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>./contact --init</span>
              </motion.a>
            </nav>

            <main className="slides">

              <section className="slide slide-intro" id="slide-0">
                <div className="slide-content slide-intro">
                  <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                  >
                    <motion.p className="slide-eyebrow" variants={fadeInUp}>
                      <span className="status-indicator">
                        <span className="status-dot" />
                        Available for opportunities
                      </span>
                    </motion.p>

                    <motion.h1 variants={fadeInUp}>
                      <span className="highlight">Manu</span>
                      <GlitchText>Vashisth</GlitchText>
                      <em>// Engineer & Developer</em>
                    </motion.h1>

                    <motion.p className="slide-sub" variants={fadeInUp}>
                      Building digital experiences with code. Full-stack development, machine learning, and systems architecture.
                      <span className="cursor" />
                    </motion.p>

                    <motion.div className="slide-scroll-hint" variants={fadeInUp}>
                      <span>Scroll to explore</span>
                      <div className="scroll-line" />
                    </motion.div>
                  </motion.div>
                </div>

                <motion.div
                  className="slide-aside"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <div className="aside-block">
                    <span>Currently</span>
                    <p>Full Stack Intern @ WorldRef</p>
                  </div>
                  <div className="aside-block">
                    <span>Stack</span>
                    <p>Java, Python, Spring Boot, FastAPI</p>
                  </div>
                  <div className="aside-block">
                    <span>Focus</span>
                    <p>ML Systems, REST APIs, Open Source</p>
                  </div>
                  <div className="aside-block">
                    <span>Location</span>
                    <p>Delhi, India</p>
                  </div>
                </motion.div>
              </section>

              <section className="slide slide-about-center" id="slide-1">
                <div className="slide-content">
                  <motion.div
                    className="about-center-container"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.p className="slide-eyebrow about-kicker" variants={fadeInUp}>About</motion.p>

                    <motion.h2 className="about-heading" variants={fadeInUp}>
                      <span className="highlight">Engineer.</span>
                      <br />
                      Open Source.
                    </motion.h2>

                    <motion.p className="about-intro" variants={fadeInUp}>
                      Motivated Computer Science undergraduate with hands-on experience in Full-Stack 
                      development and machine learning. Committed to creating impactful solutions through 
                      technology. A complex problem solver with a strong analytical mindset and a goal-oriented 
                      approach.
                    </motion.p>

                    <div className="about-grid">
                      <motion.div
                        className="about-left"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        <div className="github-graph">
                          <Image
                            src="https://ghchart.rshah.org/166534/RedHolger"
                            alt="GitHub contributions"
                            width={600}
                            height={150}
                            unoptimized
                          />
                          <motion.a
                            href="https://github.com/RedHolger"
                            target="_blank"
                            rel="noreferrer"
                            className="github-link"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FaGithub />
                            github.com/RedHolger
                          </motion.a>
                        </div>
                      </motion.div>

                      <motion.div
                        className="about-stats-grid"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        <div className="about-stat-card">
                          <span>Role</span>
                          <p>Full Stack Intern at WorldRef</p>
                        </div>
                        <div className="about-stat-card">
                          <span>Education</span>
                          <p>B.Tech Computer Science</p>
                        </div>
                        <div className="about-stat-card">
                          <span>Interests</span>
                          <p>Full-stack, ML/AI, Open Source</p>
                        </div>
                        <div className="about-stat-card">
                          <span>Status</span>
                          <p>Open to opportunities</p>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </section>

              <section className="slide" id="slide-2">
                <div className="slide-content">
                  <ProjectCard
                    title="WorldRef Application"
                    description="Full-Stack Development for WorldRef, a cross-border B2B document marketplace for process and utility plants. Built scalable APIs, optimized database queries, and implemented real-time features for buyer-seller interactions."
                    tech={["Java", "Spring Boot", "MySQL", "REST APIs"]}
                    link="#"
                    image="/globe.svg"
                    reverse={false}
                  />
                </div>
              </section>

              <section className="slide" id="slide-3">
                <div className="slide-content">
                  <ProjectCard
                    title="Lingua: AI Language Learning"
                    description="An AI-powered platform that transforms video subtitles into personalized study materials. Uses hybrid microservices architecture with Gemini AI for generating vocabulary previews, grammar recaps, and adaptive quizzes."
                    tech={["Java Spring Boot", "Python FastAPI", "Gemini AI", "FFmpeg", "Docker"]}
                    link="https://github.com/RedHolger/AI-Lingua"
                    image="/window.svg"
                    reverse={true}
                  />
                </div>
              </section>

              <section className="slide slide-connect" id="slide-4">
                <motion.div
                  className="slide-content slide-inner-connect"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.p className="slide-eyebrow" variants={fadeInUp}>Connect</motion.p>
                  <h2>
                    <GlitchText>Get in</GlitchText>
                    <br />
                    <span className="highlight">touch.</span>
                  </h2>
                  <p className="slide-body">
                    Open to interesting work and collaborations. Let&apos;s build something remarkable together.
                  </p>

                  <motion.div
                    className="connect-links"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href="mailto:signorvashistha007@gmail.com"
                      variants={fadeInUp}
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span><FaEnvelope /> Email</span>
                      <strong>signorvashistha007@gmail.com</strong>
                    </motion.a>

                    <motion.a
                      href="https://www.linkedin.com/in/manu-vashisth-9366b2219/"
                      target="_blank"
                      rel="noreferrer"
                      variants={fadeInUp}
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span><FaLinkedin /> LinkedIn</span>
                      <strong>Manu Vashisth</strong>
                    </motion.a>

                    <motion.a
                      href="https://github.com/RedHolger"
                      target="_blank"
                      rel="noreferrer"
                      variants={fadeInUp}
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span><FaGithub /> GitHub</span>
                      <strong>RedHolger</strong>
                    </motion.a>
                  </motion.div>

                  <motion.p
                    className="slide-footer"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    © 2026 Manu Vashisth // All systems operational
                  </motion.p>
                </motion.div>
              </section>

            </main>

            <motion.div
              className="floating-nav"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <motion.button
                onClick={() => scrollToSection(activeSection > 0 ? activeSection - 1 : 0)}
                className="floating-nav-btn"
                whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(0, 255, 65, 0.3)' }}
                whileTap={{ scale: 0.9 }}
                aria-label="Scroll up"
              >
                <FaChevronDown style={{ transform: 'rotate(180deg)' }} />
              </motion.button>
              <motion.button
                onClick={() => scrollToSection(activeSection < 4 ? activeSection + 1 : 4)}
                className="floating-nav-btn"
                whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(0, 255, 65, 0.3)' }}
                whileTap={{ scale: 0.9 }}
                aria-label="Scroll down"
              >
                <FaChevronDown />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

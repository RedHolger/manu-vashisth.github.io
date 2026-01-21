import Head from 'next/head';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ScrollToTop from '@/components/ScrollToTop';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Head>
        <title>Manu Vashisth - Portfolio</title>
        <meta name="description" content="Portfolio of Manu Vashisth, Computer Science undergraduate specializing in full-stack development and machine learning." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-lg shadow-lg' 
            : 'bg-gray-900/95 backdrop-blur-sm'
        } text-white`}
      >
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1 
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Manu Vashisth
          </motion.h1>
          <ul className="hidden md:flex space-x-6">
            {['About', 'Experience', 'Projects', 'Skills', 'Education', 'Achievements', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-300 transition-all duration-300 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </motion.header>

      <main className="flex-grow pt-20 pb-20">
        <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          <motion.div 
            className="container mx-auto px-6 text-center relative z-10"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
            >
              Manu Vashisth
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-2xl md:text-3xl mb-6 font-light"
            >
              Full-Stack Developer | Machine Learning Enthusiast
            </motion.p>
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-blue-100"
            >
              Innovative and technically proficient software developer with hands-on experience in building production-level RESTful APIs and solving complex problems.
            </motion.p>
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-gray-100"
              >
                Get in Touch
              </motion.a>
              <motion.a 
                href="/manu-vashisth.github.io/Manu_Vashisth_CV.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-xl"
              >
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </section>

        <SectionWrapper id="about" className="py-20 bg-white">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="container mx-auto px-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg md:text-xl max-w-4xl mx-auto text-gray-700 leading-relaxed text-center">
              I am a motivated Computer Science undergraduate with hands-on experience in Full-Stack development, building and optimizing production-level RESTful APIs using Java and Spring Boot. Innovative and technically proficient software developer with hands-on experience as a software intern. Committed to creating impactful change through technology to drive project success. A complex problem solver with a strong analytical mindset and a goal-oriented approach.
            </p>
          </motion.div>
        </SectionWrapper>

        <SectionWrapper id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="container mx-auto px-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Experience
            </h2>
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Full Stack Intern - WorldRef
                </h3>
                <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">1YR 1M</span>
              </div>
              <p className="text-gray-600 mb-6 text-lg">New Delhi | July 2024 - August 2025</p>
              <ul className="list-disc ml-6 text-gray-700 space-y-3 text-lg">
                <li>Collaborated closely with the product manager, developers, and quality analysts to enhance product capabilities across offline and online platforms.</li>
                <li>Developed production-ready RESTful APIs in Java and Spring Boot for both mobile and web applications.</li>
                <li>Engineered continuous calculations and integrations with developers to meet project requirements.</li>
                <li>Reviewed project specifications and designed technology solutions that met or exceeded performance expectations.</li>
              </ul>
            </motion.div>
          </motion.div>
        </SectionWrapper>

        <SectionWrapper id="projects" className="py-20 bg-white">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="container mx-auto px-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Projects
            </h2>
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="max-w-4xl mx-auto bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200"
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                WorldRef Application
              </h3>
              <p className="text-gray-600 mb-6 text-lg">July 2024 - August 2025</p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Full-Stack Development for WorldRef, a cross-border B2B document marketplace for process and utility plants, including buyer profiles, quotation services, and seller dashboards.
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-3 mb-6 text-lg">
                <li>Developed DTO specifications for catalogued products, live order tracking, product purchase history, and options.</li>
                <li>Implemented complete Buyer Profile module with RESTful API logic for data creation and modification at production level.</li>
                <li>Optimised Buyer DMS : RFQ for automated email transmittals to sellers for non-catalogued products.</li>
                <li>Built Seller Dashboard for transactional operations, generating and editing quotations, and managing deals.</li>
                <li>Developed automated RFQ Matching with a quotation service, optimizing the initial codebase to reduce response times by up to 40%, code complexity by up to 40%, and significantly improve readability.</li>
              </ul>
              <div className="flex items-center justify-between">
                <p className="text-gray-700 font-semibold">
                  <span className="text-blue-600">Tech Stack:</span> Java, Spring Boot, Spring MVC, MySQL
                </p>
                <motion.a 
                  href="#" 
                  whileHover={{ scale: 1.1 }}
                  className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2"
                >
                  View Project →
                </motion.a>
              </div>
            </motion.div>
            <motion.div 
               whileHover={{ scale: 1.02, y: -5 }} 
               className="max-w-4xl mx-auto bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 mt-12" 
             > 
               <h3 className="text-2xl md:text-3xl font-semibold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"> 
                 Lingua: Media-Driven Language Learning 
               </h3> 
               <p className="text-gray-600 mb-6 text-lg">Jan 2025 - Present</p> 
               <p className="text-gray-700 mb-6 text-lg leading-relaxed"> 
                 An AI-powered language learning platform that transforms media subtitles into personalized study materials. It uses a hybrid microservices architecture to process video content, generating simplified subtitles, vocabulary previews, grammar recaps, and interactive quizzes tailored to the user&apos;s CEFR level. 
               </p> 
               <ul className="list-disc ml-6 text-gray-700 space-y-3 mb-6 text-lg"> 
                 <li><strong>AI-Driven Simplification:</strong> Uses Gemini LLM to rewrite subtitles to target CEFR levels (A1-C2) while preserving semantic meaning (verified via BERTScore).</li> 
                 <li><strong>Contextual Learning:</strong> Generates &quot;preview&quot; subtitles to introduce difficult vocabulary before scenes and &quot;recap&quot; subtitles to explain grammar after scenes.</li> 
                 <li><strong>Hybrid Architecture:</strong> Orchestrated by Java Spring Boot (backend/API) with a Python FastAPI microservice for AI processing and audio transcription.</li> 
                 <li><strong>Secure Communication:</strong> Implements HMAC-SHA256 signing for secure inter-service communication between Java and Python components.</li> 
                 <li><strong>Research Integration:</strong> Includes a benchmarking suite to evaluate LLM-generated subtitles against human speech using the TED-LIUM corpus.</li> 
               </ul> 
               <div className="flex items-center justify-between"> 
                 <p className="text-gray-700 font-semibold"> 
                   <span className="text-blue-600">Tech Stack:</span> Java Spring Boot, Python FastAPI, Gemini AI, FFmpeg, Docker 
                 </p> 
                 <motion.a 
                   href="#" 
                   whileHover={{ scale: 1.1 }} 
                   className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2" 
                 > 
                   View Project → 
                 </motion.a> 
               </div> 
             </motion.div>
          </motion.div>
        </SectionWrapper>

        <SectionWrapper id="achievements" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="container mx-auto px-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Achievements & Coding Profiles
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Open Source Contributions
                </h3>
                <div className="mb-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                  <h4 className="text-xl font-semibold mb-3 text-blue-900">Kestra - Hacktoberfest 2025</h4>
                  <p className="text-gray-700 mb-3 font-semibold">
                    <strong className="text-blue-600">PR #214:</strong> fix: Add configurable bad line handling to CsvToIon via OnBadLines enum
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Enhanced the CsvToIon task in Kestra by implementing a configurable error handling mechanism through the OnBadLines enum. This feature allows users to specify how to handle malformed lines in CSV files during conversion to Ion format, improving data processing flexibility and robustness.
                  </p>
                  <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                    <li>Implemented OnBadLines enum with three options: ERROR (raise error), WARN (log warning and continue), and SKIP (silently skip bad lines)</li>
                    <li>Enhanced data processing capabilities by providing flexible error management aligned with industry standards</li>
                    <li>Improved the robustness of CSV to Ion conversion workflows in Kestra&apos;s data processing pipeline</li>
                  </ul>
                  <p className="text-sm text-gray-600 mb-4">
                    <strong className="text-blue-600">Tech Stack:</strong> Java, Kestra Plugin Development
                  </p>
                  <motion.a 
                    href="https://github.com/kestra-io/plugin-serdes/pull/214" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    View Pull Request →
                  </motion.a>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Coding Profiles
                </h3>
                <div className="flex flex-wrap gap-4 justify-center">
                  {[
                    { href: 'https://leetcode.com/u/ManuVashisth/', src: 'https://img.shields.io/badge/-LeetCode-FFA116?style=for-the-badge&logo=LeetCode&logoColor=black', alt: 'LeetCode profile' },
                    { href: 'https://codeforces.com/profile/ManuVashisth', src: 'https://img.shields.io/badge/Codeforces-blue?style=for-the-badge&logo=codeforces&labelColor=hex&color=black', alt: 'Codeforces profile' },
                    { href: 'https://www.codechef.com/users/manuvashisth', src: 'https://img.shields.io/badge/CodeChef-9057A9?style=for-the-badge&logo=codechef&logoColor=white', alt: 'CodeChef profile' }
                  ].map((profile, index) => (
                    <motion.a
                      key={index}
                      href={profile.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <img src={profile.src} alt={profile.alt} className="transition-all duration-300" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </SectionWrapper>

        <SectionWrapper id="skills" className="py-20 bg-white">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="container mx-auto px-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { title: 'Programming Languages', content: 'Java, Python' },
                { title: 'Frameworks', content: 'Spring, Spring Boot' },
                { title: 'Databases', content: 'MySQL' },
                { title: 'Operating Systems', content: 'Windows, Linux, Android' },
                { title: 'Other', content: 'Machine Learning, Deep Learning, Computer Vision' }
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <strong className="text-blue-600 text-lg">{skill.title}:</strong>
                  <p className="text-gray-700 mt-2">{skill.content}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </SectionWrapper>

        <SectionWrapper id="education" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="container mx-auto px-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                { degree: 'B.Tech Computer Science Engineering (ML Specialization)', details: 'Maharaja Surajmal Institute of Technology, Delhi | 2021 - 2025' },
                { degree: 'Senior Secondary (XII), CBSE', details: 'Public School | Percentage: 93.60% | 2020' },
                { degree: 'High School (X), CBSE', details: 'Public School | Percentage: 93.20% | 2018' }
              ].map((edu, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-600"
                >
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800">{edu.degree}</h3>
                  <p className="text-gray-600 text-lg">{edu.details}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </SectionWrapper>

        <SectionWrapper id="contact" className="py-20 bg-white">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="container mx-auto px-6 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Contact
            </h2>
            <div className="max-w-2xl mx-auto space-y-6">
              {[
                { label: 'Email', value: 'signorvashistha007@gmail.com', href: 'mailto:signorvashistha007@gmail.com' },
                { label: 'Phone', value: '+91 8448154757', href: 'tel:+918448154757' },
                { label: 'LinkedIn', value: 'linkedin.com/in/manu-vashisth-1a4b1b23b', href: 'https://www.linkedin.com/in/manu-vashisth-9366b2219/' },
                { label: 'GitHub', value: 'github.com/RedHolger', href: 'https://github.com/RedHolger' }
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <p className="text-lg mb-2">
                    <strong className="text-blue-600">{contact.label}:</strong>{' '}
                    <a href={contact.href} className="text-gray-700 hover:text-blue-600 transition-colors">
                      {contact.value}
                    </a>
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </SectionWrapper>
      </main>

      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8 text-center">
        <p className="text-lg">&copy; 2025 Manu Vashisth. All rights reserved.</p>
      </footer>

      <ScrollToTop />
    </div>
  );
}

function SectionWrapper({ id, className, children }) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}

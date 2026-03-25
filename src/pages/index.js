import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const dots = document.querySelectorAll('.dot');
    const slides = document.querySelectorAll('.slide');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-visible');
          const id = entry.target.id;
          const index = id.replace('slide-', '').replace(/[a-z]/g, '');
          dots.forEach(d => d.classList.remove('active'));
          const activeDot = document.querySelector(`.dot[data-index="${index}"]`);
          if (activeDot) activeDot.classList.add('active');
        } else {
          entry.target.classList.remove('slide-visible');
        }
      });
    }, { threshold: 0.4 });

    slides.forEach(s => observer.observe(s));

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const index = dot.dataset.index;
        const target = document.getElementById(`slide-${index}`);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      });
    });

    // Cleanup
    return () => {
      slides.forEach(s => observer.unobserve(s));
      dots.forEach(dot => {
        dot.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <>
      <Head>
        <title>Manu Vashisth</title>
        <meta name="description" content="Manu Vashisth. Engineer. Full-stack development and machine learning." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="nav">
        <div className="nav-dots">
          <button className="dot active" data-index="0" aria-label="Intro"></button>
          <button className="dot" data-index="1" aria-label="Work"></button>
          <button className="dot" data-index="2" aria-label="About"></button>
          <button className="dot" data-index="3" aria-label="Connect"></button>
        </div>
        <a className="nav-cta" href="mailto:signorvashistha007@gmail.com">Get in touch</a>
      </nav>

      <main className="slides">

        {/* 01 — Intro */}
        <section className="slide slide-intro" id="slide-0">
          <div className="slide-inner">
            <p className="slide-eyebrow">Engineer</p>
            <h1>Manu<br /><em>Vashisth</em></h1>
            <p className="slide-sub">I write software. Mostly full-stack development, machine learning, and tooling.</p>
            <div className="slide-scroll-hint">
              <span>Scroll</span>
              <div className="scroll-line"></div>
            </div>
          </div>
          <div className="slide-aside">
            <div className="aside-block">
              <span>Currently</span>
              <p>Full Stack Intern - WorldRef</p>
            </div>
            <div className="aside-block">
              <span>Languages</span>
              <p>Java, Python</p>
            </div>
            <div className="aside-block">
              <span>Open to</span>
              <p>Good problems. Drop me a line.</p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="slide slide-project slide-project-alt" id="slide-1a">
          <div className="slide-visual slide-visual-left">
            <div className="visual-frame">
              <Image src="/globe.svg" alt="WorldRef Application" width={100} height={100} />
            </div>
          </div>
          <div className="slide-inner">
            <p className="slide-eyebrow">Work / WorldRef</p>
            <h2>WorldRef Application</h2>
            <p className="slide-body">
              Full-Stack Development for WorldRef, a cross-border B2B document marketplace for process and utility plants, including buyer profiles, quotation services, and seller dashboards.
            </p>
            <ul className="chips">
              <li>Java</li><li>Spring Boot</li><li>MySQL</li>
            </ul>
            <div className="slide-links">
              <a href="#">View Project &rarr;</a>
            </div>
          </div>
        </section>

        {/* Lingua: Media-Driven Language Learning */}
        <section className="slide slide-project" id="slide-1b">
          <div className="slide-inner">
            <p className="slide-eyebrow">Project</p>
            <h2>Lingua: Media-Driven Language Learning</h2>
            <p className="slide-body">
              An AI-powered language learning platform that transforms media subtitles into personalized study materials. It uses a hybrid microservices architecture to process video content, generating simplified subtitles, vocabulary previews, grammar recaps, and interactive quizzes tailored to the user&apos;s CEFR level.
            </p>
            <ul className="chips">
              <li>Java Spring Boot</li><li>Python FastAPI</li><li>Gemini AI</li><li>FFmpeg</li><li>Docker</li>
            </ul>
            <div className="slide-links">
              <a href="#">View Project &rarr;</a>
            </div>
          </div>
          <div className="slide-visual">
            <div className="visual-frame">
              <Image src="/window.svg" alt="Lingua: Media-Driven Language Learning" width={100} height={100} />
            </div>
          </div>
        </section>

        {/* About */}
        <section className="slide slide-about" id="slide-2">
          <div className="slide-inner slide-inner-about">
            <p className="slide-eyebrow">About</p>
            <h2>Engineer.<br />Open source.</h2>
            <p className="slide-body">
              I am a motivated Computer Science undergraduate with hands-on experience in Full-Stack development, building and optimizing production-level RESTful APIs using Java and Spring Boot. Innovative and technically proficient software developer with hands-on experience as a software intern. Committed to creating impactful change through technology to drive project success. A complex problem solver with a strong analytical mindset and a goal-oriented approach.
            </p>
            <div className="github-graph">
              <Image src="https://ghchart.rshah.org/166534/ManuVashisth" alt="GitHub contributions" width={600} height={150} />
              <a href="https://github.com/RedHolger" target="_blank" rel="noreferrer" className="github-link">
                github.com/RedHolger &rarr;
              </a>
            </div>
          </div>
          <div className="slide-aside slide-aside-about">
            <div className="aside-block">
              <span>Role</span>
              <p>Full Stack Intern at WorldRef. Open source contributor.</p>
            </div>
            <div className="aside-block">
              <span>Interests</span>
              <p>Full-stack development, Machine Learning, Open source</p>
            </div>
            <div className="aside-block">
              <span>Location</span>
              <p>Delhi, India</p>
            </div>
          </div>
        </section>

        {/* Connect */}
        <section className="slide slide-connect" id="slide-3">
          <div className="slide-inner slide-inner-connect">
            <p className="slide-eyebrow">Connect</p>
            <h2>Get in<br />touch.</h2>
            <p className="slide-body">
              I am open to interesting work and the occasional collaboration. Email is the best way to reach me.
            </p>
            <div className="connect-links">
              <a href="mailto:signorvashistha007@gmail.com">
                <span>Email</span>
                <strong>signorvashistha007@gmail.com</strong>
              </a>
              <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noreferrer">
                <span>LinkedIn</span>
                <strong>Your Name</strong>
              </a>
              <a href="https://github.com/RedHolger" target="_blank" rel="noreferrer">
                <span>GitHub</span>
                <strong>RedHolger</strong>
              </a>
              {/* Add Twitter/X if you have it */}
              {/* <a href="https://x.com/yourusername" target="_blank" rel="noreferrer">
                <span>X</span>
                <strong>@yourusername</strong>
              </a> */}
            </div>
            <p className="slide-footer">© 2026 Manu Vashisth. All rights reserved.</p>
          </div>
        </section>

      </main>
    </>
  );
}
import Head from "next/head";
import dynamic from "next/dynamic";
const TotemLoader = dynamic(() => import("@/components/TotemLoader"), {
  ssr: false,
});
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FiGrid,
  FiUser,
  FiFolder,
  FiFileText,
  FiActivity,
  FiBookOpen,
  FiCode,
  FiArrowUpRight,
  FiArrowRight,
  FiSearch,
  FiX,
  FiMinus,
  FiSquare,
  FiWifi,
  FiVolume2,
  FiBattery,
  FiMapPin,
  FiMail,
  FiCpu,
  FiGlobe,
  FiZap,
  FiShare2,
  FiRadio,
  FiRefreshCw,
} from "react-icons/fi";
import { FaGithub, FaLinkedin, FaUbuntu } from "react-icons/fa";
import { profile, projects } from "@/data/portfolio";
const icons = {
  nodes: FiShare2,
  spark: FiZap,
  wave: FiRadio,
  chip: FiCpu,
  globe: FiGlobe,
  search: FiSearch,
};
const apps = [
  {
    id: "welcome",
    name: "Welcome",
    icon: FiUser,
    color: "orange",
    detail: "A little about me",
  },
  {
    id: "projects",
    name: "Projects",
    icon: FiFolder,
    color: "yellow",
    detail: "Ideas, built into things",
  },
  {
    id: "resume",
    name: "Résumé",
    icon: FiFileText,
    color: "cream",
    detail: "Experience & education",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: FaLinkedin,
    color: "blue",
    detail: "Let’s connect",
    href: profile.linkedin,
  },
  {
    id: "github",
    name: "GitHub",
    icon: FaGithub,
    color: "dark",
    detail: "Explore the source",
    href: profile.github,
  },
  {
    id: "slo",
    name: "SLO Dashboard",
    icon: FiActivity,
    color: "green",
    detail: "Reliability & observability",
  },
  {
    id: "knowledge",
    name: "Core Knowledge",
    icon: FiBookOpen,
    color: "violet",
    detail: "The foundations underneath",
  },
  {
    id: "leetcode",
    name: "Problem Solving",
    icon: FiCode,
    color: "orange",
    detail: "LeetCode & algorithm practice",
  },
  {
    id: "cvstar",
    name: "CVStar",
    icon: FiFileText,
    color: "green",
    detail: "LaTeX résumé workspace",
    href: "https://cvstar-workspace.vercel.app",
  },
  {
    id: "readingqueue",
    name: "ReadingQueue",
    icon: FiBookOpen,
    color: "violet",
    detail: "Shared reading workspace",
    href: "https://readingqueue-workspace.vercel.app",
  },
  {
    id: "contact",
    name: "Contact",
    icon: FiMail,
    color: "pink",
    detail: "Start a conversation",
  },
];
function AppIcon({ app }) {
  const Icon = app.icon;
  return (
    <span className={`app-icon ${app.color}`}>
      <Icon />
    </span>
  );
}
export default function Home() {
  const [phase, setPhase] = useState("boot");
  const [introReady, setIntroReady] = useState(false);
  const [active, setActive] = useState("welcome");
  const [launcher, setLauncher] = useState(false);
  const [search, setSearch] = useState("");
  const [maximized, setMaximized] = useState(false);
  const [time, setTime] = useState("");
  const [category, setCategory] = useState("All work");
  const [wallpaper, setWallpaper] = useState(false);
  const windowRef = useRef(null);
  const launcherRef = useRef(null);
  const lastFocus = useRef(null);
  function enter() {
    try {
      sessionStorage.setItem("manu-desktop", "1");
    } catch {}
    setPhase("desktop");
  }
  useEffect(() => {
    // Returning from an app should restore the desktop, not replay the intro.
    if (
      performance.getEntriesByType("navigation")[0]?.type === "back_forward"
    ) {
      setPhase("desktop");
    }
    const tick = () =>
      setTime(
        new Date().toLocaleString("en-GB", {
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);
  useEffect(() => {
    if (phase !== "boot" || !introReady) return;
    const id = setTimeout(
      () => setPhase("legacy"),
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? 150
        : 6500,
    );
    return () => clearTimeout(id);
  }, [phase, introReady]);
  // A failed or slow graphics import must never trap a visitor in the intro.
  useEffect(() => {
    if (phase !== "boot") return;
    const id = setTimeout(() => setPhase("legacy"), 12000);
    return () => clearTimeout(id);
  }, [phase]);
  useEffect(() => {
    if (phase === "desktop" && active) windowRef.current?.focus();
  }, [active, phase]);
  useEffect(() => {
    if (launcher) {
      lastFocus.current = document.activeElement;
      launcherRef.current?.querySelector("input")?.focus();
    } else lastFocus.current?.focus();
  }, [launcher]);
  useEffect(() => {
    const key = (e) => {
      if (e.key === "Escape") {
        if (launcher) setLauncher(false);
        else setActive(null);
      }
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [launcher]);
  const open = (id) => {
    setActive(id);
    setLauncher(false);
    setSearch("");
  };
  const current = apps.find((a) => a.id === active);
  const filtered = projects.filter(
    (p) =>
      category === "All work" ||
      (category === "AI & ML"
        ? /AI|Machine|Language|Search/.test(p.category)
        : category === "Web apps"
          ? p.category.startsWith("Web apps")
          : category === "Hardware"
            ? p.category.includes("Hardware")
            : /Systems|Distributed systems/.test(p.category)),
  );
  return (
    <>
      <Head>
        <title>Manu Vashisth — A curious mind, an open desktop.</title>
        <meta
          name="description"
          content="Explore Manu Vashisth’s work in software, artificial intelligence, machine learning, and distributed systems through an interactive desktop."
        />
      </Head>
      <AnimatePresence mode="wait">
        {phase === "legacy" ? (
          <motion.main
            key="legacy"
            className="legacy-screen"
            exit={{ opacity: 0, filter: "blur(12px)" }}
          >
            <div className="retro-top">
              MANU PERSONAL COMPUTER <span>EST. 2021</span>
            </div>
            <div className="retro-copy">
              <p>WELCOME TO MY CORNER OF THE INTERNET</p>
              <h1>
                Manu
                <br />
                Vashisth<span>_</span>
              </h1>
              <p>Ideas. Experiments. A work in progress.</p>
              <span className="retro-version">
                PORTFOLIO OS / LEGACY EDITION
              </span>
            </div>
            <section className="update-dialog" aria-labelledby="update-title">
              <div className="retro-title">
                <span>System Update</span>
                <FiSquare />
              </div>
              <div className="update-content">
                <FiRefreshCw className="update-symbol" />
                <small>A NEW CHAPTER IS READY</small>
                <h2 id="update-title">
                  Same curious mind.
                  <br />A whole new world.
                </h2>
                <p>
                  Your desktop is ready for an upgrade. Step into a more
                  personal, interactive space to explore my work.
                </p>
                <button autoFocus className="retro-button" onClick={enter}>
                  Update now <FiArrowRight />
                </button>
                <button className="skip-retro" onClick={enter}>
                  Go straight to the desktop
                </button>
              </div>
              <footer>
                NO DOWNLOAD REQUIRED <span>VERSION 26.10</span>
              </footer>
            </section>
            <div className="retro-bottom">
              <span>● SYSTEM READY</span>
              <span>A LITTLE NOSTALGIA. A LOT OF POSSIBILITY.</span>
            </div>
          </motion.main>
        ) : phase === "boot" ? (
          <motion.main
            key="boot"
            className="boot-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="boot-brand">
              MV <span>PERSONAL OPERATING SYSTEM</span>
            </div>
            <TotemLoader onReady={() => setIntroReady(true)} />
            <div className="boot-caption">
              <small>A NEW PERSPECTIVE</small>
              <h1>Let the ideas spin.</h1>
              <div className={`boot-progress ${introReady ? "ready" : ""}`}>
                <i />
              </div>
              <p>A moment before the next chapter.</p>
            </div>
            <button className="boot-skip" onClick={() => setPhase("legacy")}>
              Skip intro <FiArrowRight />
            </button>
          </motion.main>
        ) : (
          <motion.main
            key="desktop"
            className={`desktop ${wallpaper ? "wallpaper-alt" : ""}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="wallpaper-art" aria-hidden="true">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="orbit orbit-three" />
            </div>
            <header className="system-bar">
              <button onClick={() => setLauncher(!launcher)}>
                <FaUbuntu /> <span>Manu’s desktop</span>
              </button>
              <time>{time}</time>
              <div className="system-status">
                <FiWifi />
                <FiVolume2 />
                <FiBattery />
              </div>
            </header>
            <div className="desktop-wordmark">
              <span>STAY CURIOUS.</span>
              <h2>
                Make something
                <br />
                <em>meaningful.</em>
              </h2>
              <p>A personal space by Manu Vashisth</p>
            </div>
            <div className="desktop-shortcuts">
              {[apps[1], apps[2], apps[6]].map((app) => (
                <button key={app.id} onClick={() => open(app.id)}>
                  <AppIcon app={app} />
                  <span>{app.name}</span>
                </button>
              ))}
            </div>
            <div className="desktop-note">
              <span className="live-dot" /> Open to conversations{" "}
              <span>Based in Ireland ↗</span>
            </div>
            <AnimatePresence>
              {active && (
                <motion.section
                  ref={windowRef}
                  tabIndex={-1}
                  aria-label={current?.name}
                  key="window"
                  className={`app-window ${maximized ? "maximized" : ""}`}
                  initial={{ opacity: 0, y: 24, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 30, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                >
                  <header className="window-bar">
                    <span className="window-brand">
                      <span className="tiny-orange" />
                      {current?.name}{" "}
                      <span className="window-path">/ manu</span>
                    </span>
                    <div className="window-controls">
                      <button
                        aria-label="Minimize window"
                        onClick={() => setActive(null)}
                      >
                        <FiMinus />
                      </button>
                      <button
                        aria-label={
                          maximized ? "Restore window" : "Maximize window"
                        }
                        onClick={() => setMaximized(!maximized)}
                      >
                        <FiSquare />
                      </button>
                      <button
                        aria-label="Close window"
                        onClick={() => setActive(null)}
                      >
                        <FiX />
                      </button>
                    </div>
                  </header>
                  <div className="window-layout">
                    <aside className="sidebar">
                      <span className="sidebar-label">YOUR EXPLORER</span>
                      {apps
                        .filter((a) => !a.href)
                        .map((app) => (
                          <button
                            className={active === app.id ? "selected" : ""}
                            key={app.id}
                            onClick={() => open(app.id)}
                          >
                            <app.icon />
                            {app.name}
                          </button>
                        ))}
                      <div className="sidebar-bottom">
                        <span className="avatar">mv.</span>
                        <div>
                          Manu Vashisth<small>Always exploring</small>
                        </div>
                      </div>
                    </aside>
                    <div className="window-content" key={active}>
                      {active === "welcome" && (
                        <>
                          <div className="content-meta">
                            <span>HELLO, WORLD. COME ON IN.</span>
                            <span>01 / ABOUT ME</span>
                          </div>
                          <div className="welcome-hero">
                            <div>
                              <span className="availability">
                                <i /> Open to opportunities
                              </span>
                              <h1>
                                A curious mind.
                                <br />A builder at heart<span>.</span>
                              </h1>
                              <p>
                                I’m <strong>Manu</strong>. I connect the dots
                                between software, artificial intelligence, and
                                the systems that make it all work.
                              </p>
                              <p className="secondary-copy">
                                From an idea on paper to something you can use —
                                I like understanding how things work, and
                                finding ways to make them better.
                              </p>
                              <div className="hero-actions">
                                <button
                                  className="primary"
                                  onClick={() => open("projects")}
                                >
                                  Explore my work <FiArrowRight />
                                </button>
                                <button
                                  className="text-button"
                                  onClick={() => open("resume")}
                                >
                                  View résumé <FiArrowUpRight />
                                </button>
                              </div>
                            </div>
                            <div className="monogram-art">
                              <div className="art-grid" />
                              <span>
                                m<span>v</span>
                                <i>.</i>
                              </span>
                              <small>THINK · BUILD · KEEP LEARNING</small>
                              <span className="art-orbit" />
                            </div>
                          </div>
                          <div className="interest-strip">
                            <span>
                              <FiCpu /> Software & systems
                            </span>
                            <span>
                              <FiZap /> Artificial intelligence
                            </span>
                            <span>
                              <FiShare2 /> Machine learning
                            </span>
                          </div>
                          <div className="section-heading">
                            <h2>A few things I’ve been building</h2>
                            <button onClick={() => open("projects")}>
                              All projects <FiArrowUpRight />
                            </button>
                          </div>
                          <div className="featured-grid">
                            {projects.slice(0, 3).map((p) => {
                              const Icon = icons[p.icon];
                              return (
                                <button
                                  className="featured-card"
                                  key={p.title}
                                  onClick={() => {
                                    setCategory(
                                      p.category.startsWith("Web apps")
                                        ? "Web apps"
                                        : /AI|Machine|Language|Search/.test(
                                              p.category,
                                            )
                                          ? "AI & ML"
                                          : "Systems",
                                    );
                                    open("projects");
                                  }}
                                >
                                  <div>
                                    <span className={`mini-icon ${p.color}`}>
                                      <Icon />
                                    </span>
                                    <FiArrowUpRight />
                                  </div>
                                  <small>{p.category}</small>
                                  <h3>{p.title}</h3>
                                </button>
                              );
                            })}
                          </div>
                          <footer className="content-footer">
                            <span>
                              <FiMapPin /> Limerick, Ireland
                            </span>
                            <span>
                              Different disciplines. One curious mind.
                            </span>
                          </footer>
                        </>
                      )}
                      {active === "projects" && (
                        <>
                          <div className="content-meta">
                            A COLLECTION OF IDEAS, MADE REAL
                          </div>
                          <h1 className="page-title">
                            Selected work<span>.</span>
                          </h1>
                          <p className="page-intro">
                            Exploring intelligence, infrastructure, and the
                            space in between.
                          </p>
                          <div className="filter-row">
                            {[
                              "All work",
                              "Web apps",
                              "AI & ML",
                              "Systems",
                              "Hardware",
                            ].map((c) => (
                              <button
                                aria-pressed={category === c}
                                className={category === c ? "active" : ""}
                                onClick={() => setCategory(c)}
                                key={c}
                              >
                                {c}
                              </button>
                            ))}
                          </div>
                          <div className="project-grid">
                            {filtered.map((p) => {
                              const Icon = icons[p.icon];
                              return (
                                <article className="project-card" key={p.title}>
                                  <div className={`project-art ${p.color}`}>
                                    <Icon />
                                    <span>{p.category}</span>
                                  </div>
                                  <div className="project-description">
                                    <h2>{p.title}</h2>
                                    <p>{p.description}</p>
                                    <div className="tags">
                                      {p.tags.map((t) => (
                                        <span key={t}>{t}</span>
                                      ))}
                                    </div>
                                    <a
                                      href={
                                        p.url || `${profile.github}/${p.repo}`
                                      }
                                      target="_self"
                                      rel="noreferrer"
                                    >
                                      Explore project <FiArrowUpRight />
                                    </a>
                                  </div>
                                </article>
                              );
                            })}
                          </div>
                        </>
                      )}
                      {active === "resume" && (
                        <>
                          <div className="content-meta">
                            EXPERIENCE & EDUCATION
                          </div>
                          <h1 className="page-title">
                            The journey so far<span>.</span>
                          </h1>
                          <p className="page-intro">
                            Software engineering, applied research, and a habit
                            of learning by building.
                          </p>
                          <a
                            className="primary inline"
                            href={profile.resume}
                            target="_self"
                            rel="noreferrer"
                          >
                            Open résumé PDF <FiArrowUpRight />
                          </a>
                          <div className="timeline">
                            <article>
                              <small>SOFTWARE ENGINEERING</small>
                              <h2>WorldRef</h2>
                              <p>
                                Full-stack work on a cross-border B2B
                                marketplace: scalable APIs, database
                                optimization, and buyer–seller interactions.
                              </p>
                              <div className="tags">
                                <span>Java</span>
                                <span>Spring Boot</span>
                                <span>MySQL</span>
                              </div>
                            </article>
                            <article>
                              <small>AI RESEARCH</small>
                              <h2>IIT Guwahati</h2>
                              <p>
                                Deep learning for video dehazing and predictive
                                healthcare, including breast cancer
                                classification.
                              </p>
                            </article>
                            <article>
                              <small>EDUCATION</small>
                              <h2>University of Limerick</h2>
                              <p>
                                Continuing to connect practical engineering with
                                deeper technical foundations.
                              </p>
                            </article>
                          </div>
                        </>
                      )}
                      {active === "knowledge" && (
                        <>
                          <div className="content-meta">
                            THE FOUNDATIONS UNDERNEATH
                          </div>
                          <h1 className="page-title">
                            Always a student<span>.</span>
                          </h1>
                          <p className="page-intro">
                            Core knowledge I bring into my projects, from
                            algorithms to intelligent systems.
                          </p>
                          <div className="knowledge-grid">
                            {[
                              [
                                "01",
                                "Computer science",
                                "Data structures & algorithms",
                                "Object-oriented design",
                                "Database systems",
                              ],
                              [
                                "02",
                                "Artificial intelligence",
                                "Deep learning & neural networks",
                                "Natural language processing",
                                "Retrieval & language models",
                              ],
                              [
                                "03",
                                "Systems thinking",
                                "Distributed systems",
                                "API & service architecture",
                                "Reliability & observability",
                              ],
                              [
                                "04",
                                "Practical toolkit",
                                "Java · Python · C++",
                                "Spring Boot · FastAPI",
                                "PyTorch · Scikit-learn · ONNX",
                              ],
                            ].map(([n, title, ...items]) => (
                              <article key={n}>
                                <small>{n}</small>
                                <h2>{title}</h2>
                                {items.map((t) => (
                                  <p key={t}>{t}</p>
                                ))}
                              </article>
                            ))}
                          </div>
                        </>
                      )}
                      {active === "slo" && (
                        <>
                          <div className="content-meta">
                            RELIABILITY & OBSERVABILITY
                          </div>
                          <h1 className="page-title">
                            Every signal matters<span>.</span>
                          </h1>
                          <p className="page-intro">
                            Release decisions, controlled failures, and recovery
                            experiments in my SLO reliability lab.
                          </p>
                          <div className="empty-panel">
                            <FiActivity />
                            <h2>
                              {profile.slo
                                ? "Explore the SLO reliability lab"
                                : "Dashboard connection pending"}
                            </h2>
                            <p>
                              {profile.slo
                                ? "Explore BudgetGuard, FaultLab, and RecoverOps through recorded CLI evidence and interactive scenarios. The public demo is not connected to a live cluster; recovery and integration live validation are still pending."
                                : "The live dashboard link hasn’t been configured yet. Explore my systems work in the meantime."}
                            </p>
                            {profile.slo ? (
                              <a
                                className="primary inline"
                                href={profile.slo}
                                target="_self"
                                rel="noreferrer"
                              >
                                Open dashboard <FiArrowUpRight />
                              </a>
                            ) : (
                              <button
                                className="primary"
                                onClick={() => {
                                  setCategory("Systems");
                                  open("projects");
                                }}
                              >
                                Explore systems projects <FiArrowRight />
                              </button>
                            )}
                          </div>
                        </>
                      )}
                      {active === "leetcode" && (
                        <>
                          <div className="content-meta">
                            ONE PROBLEM AT A TIME
                          </div>
                          <h1 className="page-title">
                            Practice makes progress<span>.</span>
                          </h1>
                          <p className="page-intro">
                            Working through algorithms, recognizing patterns,
                            and building a stronger problem-solving toolkit.
                          </p>
                          <div className="empty-panel">
                            <FiCode />
                            <h2>Algorithms in practice</h2>
                            <p>
                              {profile.leetcode
                                ? "Explore my LeetCode profile, or browse my public NeetCode submissions below."
                                : "Explore my public NeetCode submissions. My personal LeetCode profile will appear here once connected."}
                            </p>
                            <a
                              className="primary inline"
                              href={
                                profile.leetcode ||
                                `${profile.github}/neetcode-submissions`
                              }
                              target="_self"
                              rel="noreferrer"
                            >
                              Open LeetCode <FiArrowUpRight />
                            </a>
                            <a
                              className="text-button practice-link"
                              href={`${profile.github}/neetcode-submissions`}
                              target="_self"
                              rel="noreferrer"
                            >
                              My NeetCode submissions <FiArrowUpRight />
                            </a>
                          </div>
                        </>
                      )}
                      {active === "contact" && (
                        <>
                          <div className="content-meta">
                            GOOD THINGS START WITH A CONVERSATION
                          </div>
                          <h1 className="page-title">
                            Let’s make a connection<span>.</span>
                          </h1>
                          <p className="page-intro">
                            Have an interesting problem, an opportunity, or an
                            idea worth exploring? I’d love to hear about it.
                          </p>
                          <div className="contact-list">
                            {[
                              [
                                "Email",
                                profile.email,
                                FiMail,
                                "manuvashisth963@gmail.com",
                              ],
                              [
                                "LinkedIn",
                                profile.linkedin,
                                FaLinkedin,
                                "Manu Vashisth",
                              ],
                              ["GitHub", profile.github, FaGithub, "RedHolger"],
                            ].map(([name, url, Icon, label]) => (
                              <a
                                href={url}
                                key={name}
                                target="_self"
                                rel="noreferrer"
                              >
                                <Icon />
                                <div>
                                  <small>{name}</small>
                                  <strong>{label}</strong>
                                </div>
                                <FiArrowUpRight />
                              </a>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </motion.section>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {launcher && (
                <motion.div
                  className="launcher-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setLauncher(false)}
                >
                  <section
                    ref={launcherRef}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Applications"
                    className="launcher"
                    onClick={(e) => e.stopPropagation()}
                    onKeyDown={(e) => {
                      if (e.key === "Tab") {
                        const els =
                          launcherRef.current.querySelectorAll(
                            "button,input,a",
                          );
                        const first = els[0],
                          last = els[els.length - 1];
                        if (e.shiftKey && document.activeElement === first) {
                          e.preventDefault();
                          last.focus();
                        } else if (
                          !e.shiftKey &&
                          document.activeElement === last
                        ) {
                          e.preventDefault();
                          first.focus();
                        }
                      }
                    }}
                  >
                    <header>
                      <div>
                        <small>YOUR PERSONAL EXPLORER</small>
                        <h2>A little bit of everything.</h2>
                      </div>
                      <button
                        aria-label="Close applications"
                        onClick={() => setLauncher(false)}
                      >
                        <FiX />
                      </button>
                    </header>
                    <label className="app-search">
                      <FiSearch />
                      <input
                        placeholder="Search apps, projects, and more…"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                      <kbd>ESC</kbd>
                    </label>
                    <div className="apps-grid">
                      {apps
                        .filter((a) =>
                          `${a.name} ${a.detail}`
                            .toLowerCase()
                            .includes(search.toLowerCase()),
                        )
                        .map((app) =>
                          app.href ? (
                            <a
                              key={app.id}
                              href={app.href}
                              target="_self"
                              rel="noreferrer"
                            >
                              <AppIcon app={app} />
                              <strong>{app.name} ↗</strong>
                              <small>{app.detail}</small>
                            </a>
                          ) : (
                            <button key={app.id} onClick={() => open(app.id)}>
                              <AppIcon app={app} />
                              <strong>{app.name}</strong>
                              <small>{app.detail}</small>
                            </button>
                          ),
                        )}
                    </div>
                    {!apps.some((a) =>
                      `${a.name} ${a.detail}`
                        .toLowerCase()
                        .includes(search.toLowerCase()),
                    ) && (
                      <p className="no-results">
                        No apps found. Try “projects” or “contact”.
                      </p>
                    )}
                  </section>
                </motion.div>
              )}
            </AnimatePresence>
            <footer className="desktop-footer">
              <button onClick={() => setWallpaper(!wallpaper)}>
                ◐ <span>Change atmosphere</span>
              </button>
              <span>
                Made with intention. © {new Date().getFullYear()} Manu Vashisth
              </span>
              <button
                onClick={() => {
                  setIntroReady(false);
                  setPhase("boot");
                }}
              >
                <FiRefreshCw />
                <span>Replay intro</span>
              </button>
            </footer>
            <nav className="dock" aria-label="Application dock">
              <button
                className={`dock-item ${launcher ? "running" : ""}`}
                aria-label="Show applications"
                onClick={() => setLauncher(!launcher)}
              >
                <span className="app-icon app-grid-icon">
                  <FiGrid />
                </span>
                <span className="dock-tooltip">Applications</span>
              </button>
              <span className="dock-divider" />
              {apps.slice(0, 7).map((app) =>
                app.href ? (
                  <a
                    key={app.id}
                    className="dock-item"
                    href={app.href}
                    target="_self"
                    rel="noreferrer"
                    aria-label={app.name}
                  >
                    <AppIcon app={app} />
                    <span className="dock-tooltip">{app.name} ↗</span>
                  </a>
                ) : (
                  <button
                    key={app.id}
                    className={`dock-item ${active === app.id ? "running" : ""}`}
                    aria-label={app.name}
                    onClick={() => open(app.id)}
                  >
                    <AppIcon app={app} />
                    <span className="dock-tooltip">{app.name}</span>
                  </button>
                ),
              )}
            </nav>
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}

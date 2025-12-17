import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>Manu Vashisth - Portfolio</title>
        <meta name="description" content="Portfolio of Manu Vashisth, Computer Science undergraduate specializing in full-stack development and machine learning." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-gray-900 text-white sticky top-0 z-10 shadow-md">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Manu Vashisth</h1>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-blue-300 transition">About</a></li>
            <li><a href="#experience" className="hover:text-blue-300 transition">Experience</a></li>
            <li><a href="#projects" className="hover:text-blue-300 transition">Projects</a></li>
            <li><a href="#skills" className="hover:text-blue-300 transition">Skills</a></li>
            <li><a href="#education" className="hover:text-blue-300 transition">Education</a></li>
            <li><a href="#achievements" className="hover:text-blue-300 transition">Achievements</a></li>
            <li><a href="#contact" className="hover:text-blue-300 transition">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow">
        <section id="hero" className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-32 text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl font-bold mb-4">Manu Vashisth</h2>
            <p className="text-2xl mb-8">Full-Stack Developer | Machine Learning Enthusiast</p>
            <p className="text-lg max-w-2xl mx-auto mb-8">Innovative and technically proficient software developer with hands-on experience in building production-level RESTful APIs and solving complex problems.</p>
            <div className="flex justify-center space-x-4">
              <a href="#contact" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Get in Touch</a>
              <a href="/manu-vashisth.github.io/Manu_Vashisth_CV.pdf" download className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">Download CV</a>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">I am a motivated Computer Science undergraduate with hands-on experience in Full-Stack development, building and optimizing production-level RESTful APIs using Java and Spring Boot. Innovative and technically proficient software developer with hands-on experience as a software intern. Committed to creating impactful change through technology to drive project success. A complex problem solver with a strong analytical mindset and a goal-oriented approach.</p>
          </div>
        </section>

        <section id="experience" className="py-16 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">Full Stack Intern - WorldRef (1YR 1M)</h3>
              <p className="text-gray-600 mb-4">New Delhi | July 2024 - August 2025</p>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>Collaborated closely with the product manager, developers, and quality analysts to enhance product capabilities across offline and online platforms.</li>
                <li>Developed production-ready RESTful APIs in Java and Spring Boot for both mobile and web applications.</li>
                <li>Engineered continuous calculations and integrations with developers to meet project requirements.</li>
                <li>Reviewed project specifications and designed technology solutions that met or exceeded performance expectations.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
            <div className="max-w-3xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">WorldRef Application</h3>
              <p className="text-gray-600 mb-4">July 2024 - August 2025</p>
              <p className="text-gray-700 mb-4">Full-Stack Development for WorldRef, a cross-border B2B document marketplace for process and utility plants, including buyer profiles, quotation services, and seller dashboards.</p>
              <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                <li>Developed DTO specifications for catalogued products, live order tracking, product purchase history, and options.</li>
                <li>Implemented complete Buyer Profile module with RESTful API logic for data creation and modification at production level.</li>
                <li>Optimised Buyer DMS : RFQ for automated email transmittals to sellers for non-catalogued products.</li>
                <li>Built Seller Dashboard for transactional operations, generating and editing quotations, and managing deals.</li>
                <li>Developed automated RFQ Matching with a quotation service, optimizing the initial codebase to reduce response times by up to 40%, code complexity by up to 40%, and significantly improve readability.</li>
              </ul>
              <p className="text-gray-700 mb-4">Tech Stack: Java, Spring Boot, Spring MVC, MySQL</p>
              <a href="#" className="text-blue-500 hover:underline">View Project</a>
            </div>
          </div>
        </section>

        <section id="skills" className="py-16 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white p-4 rounded-lg shadow-md"><strong>Programming Languages:</strong> Java, Python</div>
              <div className="bg-white p-4 rounded-lg shadow-md"><strong>Frameworks:</strong> Spring, Spring Boot</div>
              <div className="bg-white p-4 rounded-lg shadow-md"><strong>Databases:</strong> MySQL</div>
              <div className="bg-white p-4 rounded-lg shadow-md"><strong>Operating Systems:</strong> Windows, Linux, Android</div>
              <div className="bg-white p-4 rounded-lg shadow-md"><strong>Other:</strong> Machine Learning, Deep Learning, Computer Vision</div>
            </div>
          </div>
        </section>

        <section id="education" className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold">B.Tech Computer Science Engineering (ML Specialization)</h3>
                <p className="text-gray-600">Maharaja Surajmal Institute of Technology, Delhi | 2021 - 2025</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold">Senior Secondary (XII), CBSE</h3>
                <p className="text-gray-600">Public School | Percentage: 93.60% | 2020</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold">High School (X), CBSE</h3>
                <p className="text-gray-600">Public School | Percentage: 93.20% | 2018</p>
              </div>
            </div>
          </div>
        </section>

        <section id="achievements" className="py-16 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Achievements & Coding Profiles</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4">Open Source Contributions</h3>
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-2">Kestra - Hacktoberfest 2024</h4>
                  <p className="text-gray-700 mb-3">
                    <strong>PR #214:</strong> fix: Add configurable bad line handling to CsvToIon via OnBadLines enum
                  </p>
                  <p className="text-gray-600 mb-3">
                    Enhanced the CsvToIon task in Kestra by implementing a configurable error handling mechanism through the OnBadLines enum. This feature allows users to specify how to handle malformed lines in CSV files during conversion to Ion format, improving data processing flexibility and robustness.
                  </p>
                  <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-3">
                    <li>Implemented OnBadLines enum with three options: ERROR (raise error), WARN (log warning and continue), and SKIP (silently skip bad lines)</li>
                    <li>Enhanced data processing capabilities by providing flexible error management aligned with industry standards</li>
                    <li>Improved the robustness of CSV to Ion conversion workflows in Kestra's data processing pipeline</li>
                  </ul>
                  <p className="text-sm text-gray-500 mb-2">
                    <strong>Tech Stack:</strong> Java, Kestra Plugin Development
                  </p>
                  <a 
                    href="https://github.com/kestra-io/kestra/pull/214" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline inline-flex items-center"
                  >
                    View Pull Request →
                  </a>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4">Coding Profiles</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="https://leetcode.com/u/ManuVashisth/">
                      <img src="https://img.shields.io/badge/-LeetCode-FFA116?style=for-the-badge&logo=LeetCode&logoColor=black" alt="LeetCode profile" />
                    </a>
                  </li>
                  <li>
                    <a href="https://codeforces.com/profile/ManuVashisth">
                      <img src="https://img.shields.io/badge/Codeforces-blue?style=for-the-badge&logo=codeforces&labelColor=hex&color=black
" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.codechef.com/users/manuvashisth">
                      <img src="https://img.shields.io/badge/CodeChef-9057A9?style=for-the-badge&logo=codechef&logoColor=white" alt="CodeChef profile" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">Contact</h2>
            <p className="text-lg mb-4">Email: <a href="mailto:signorvashistha007@gmail.com" className="text-blue-500 hover:underline">signorvashistha007@gmail.com</a></p>
            <p className="text-lg mb-4">Phone: +91 8448154757</p>
            <p className="text-lg mb-4">LinkedIn: <a href="https://www.linkedin.com/in/manu-vashisth-9366b2219/" className="text-blue-500 hover:underline">linkedin.com/in/manu-vashisth-1a4b1b23b</a></p>
            <p className="text-lg mb-4">GitHub: <a href="https://github.com/RedHolger" className="text-blue-500 hover:underline">github.com/RedHolger</a></p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-4 text-center">
        <p>&copy; 2025 Manu Vashisth. All rights reserved.</p>
      </footer>
    </div>
  );
}

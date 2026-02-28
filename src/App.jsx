import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./App.css";
import spiral from "./public/spiral-Homepage.png";

function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">Mhlongo Cyril Blessing</div>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <header className="hero">
          {/* <div className="headshot">
            <img src="public/headshot.jpeg" />
          </div> */}
          <h1>
            Hi, I'm <br></br>Mhlongo Cyril Blessing
          </h1>
          <p className="subtitle">
            Full-Stack PERN Developer | Building scalable web applications
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              View Projects
            </a>
            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>
        </header>

        <section className="section" id="about">
          <h2>About Me</h2>
          <p>
            I am a BSc graduate in Information Technology and Computer Science
            from the University of KwaZulu-Natal and a results-driven Full-Stack
            Developer specializing in the PERN stack (PostgreSQL, Express.js,
            React, and Node.js). I design and build scalable, production-ready
            web applications with a strong focus on performance, clean
            architecture, and user experience. With a solid foundation in
            algorithms, data structures, software engineering principles, and
            artificial intelligence, I approach development with structured
            problem-solving, analytical thinking, and attention to code quality.
            I am highly motivated, disciplined, and committed to continuous
            growth as an engineer.
          </p>
        </section>

        <section className="section" id="projects">
          <h2>Projects</h2>

          <div className="project-card">
            <img src="/Assembly-Homepage.png" className="project-image" />
            <h3>Assembly-Endgame</h3>
            <p>
              A fun interactive game. The premise is to save as many programming
              languages a possible from extinction. If you fail to do so, then
              you will be forced to use assembly language to write all of your
              software going forward.
            </p>
            <div className="project-links">
              <a
                target="_blank"
                href="https://assemblycode.netlify.app/"
                className="btn small primary"
              >
                Live Demo
              </a>
              <a
                target="_blank"
                href="https://github.com/MhlongoCB/Assembly"
                className="btn small secondary"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="project-card">
            <img
              src="../public/From-the-other-side-Homepage.png"
              className="project-image"
            />
            <h3>Horror Stories Blog</h3>
            <p>
              A responsive web application. A place where you can read other
              peoples spooky/horror stories, and you can also upload your own. A
              number of technologies were used to build this app. Places an
              emphasis on accessibility.
            </p>
            <div className="project-links">
              <a
                target="_blank"
                href="https://from-the-other-side-stories.onrender.com/"
                className="btn small primary"
              >
                Live Demo
              </a>
              <a
                target="_blank"
                href="https://github.com/MhlongoCB/From-The-Other-Side-Stories"
                className="btn small secondary"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="project-card">
            <img src={spiral} className="project-image" />
            <h3>Spiral Sounds</h3>
            <p>
              A responsive ecommerce site. Allows people to shop for vinyl
              records of their liking. Also emphases accessibility. Uses many
              different technologies, allowing features like authentication.
            </p>
            <div className="project-links">
              <a
                target="_blank"
                href="https://spiral-sounds-ntmb.onrender.com/"
                className="btn small primary"
              >
                Live Demo
              </a>
              <a
                target="_blank"
                href="https://github.com/MhlongoCB/Spiral-Sounds"
                className="btn small secondary"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>PostgreSQL</li>
            <li>Express.js</li>
            <li>React</li>
            <li>Node.js</li>
            <li>JavaScript</li>
            <li>Git & GitHub</li>
            <li>REST APIs</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Typescript</li>
            <li>Python</li>
            <li>Java</li>
          </ul>
        </section>

        <section className="section" id="contact">
          <h2>Contact</h2>
          <div className="icon-container">
            <div className="icon-inner-container">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/cyril-mhlongo-6940873a5/"
              >
                <FaLinkedin className="social-icon" />
              </a>
              <a target="_blank" href="https://github.com/MhlongoCB">
                <FaGithub className="social-icon" />
              </a>
            </div>
            <div className="icon-inner-container">
              <HiOutlineMail className="social-icon" />
              <p>mhlongo02cb@gmail.com</p>
            </div>
          </div>
        </section>

        <footer className="footer">
          <p>
            © {new Date().getFullYear()} Mhlongo Cyril Blessing. All rights
            reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";

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
            Full-Stack MERN Developer | Building scalable web applications
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
            <h3>Assembly-Endgame</h3>
            <p>
              A full-stack task management application with authentication and
              CRUD functionality.
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
            <h3>Horror Stories Blog</h3>
            <p>
              Admin dashboard for managing products, users, and orders with a
              clean interface.
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
            <h3>E-Commerce Dashboard</h3>
            <p>
              Admin dashboard for managing products, users, and orders with a
              clean interface.
            </p>
            <div className="project-links">
              <a href="#" className="btn small primary">
                Live Demo
              </a>
              <a href="#" className="btn small secondary">
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
          </ul>
        </section>

        <section className="section" id="contact">
          <h2>Contact</h2>
          <p>Email: your.email@example.com</p>
          <p>LinkedIn: linkedin.com/in/yourprofile</p>
          <p>GitHub: github.com/yourusername</p>
        </section>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Karl Kilcon. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;

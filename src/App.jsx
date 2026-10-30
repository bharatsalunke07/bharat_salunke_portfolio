
import './App.css'

function App() {
  return (
    <div className="portfolio">

      {/* Navigation */}
      <nav className="navbar">
        <a href="#home" className="logo">
          Bharat<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#certifications">Certifications</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's Connect
        </a>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">

        <div className="hero-content">

          <p className="intro">
            HELLO, I'M BHARAT SALUNKE
          </p>

          <h1>
            Aspiring Software
            <span> Engineer.</span>
          </h1>

          <h2>
            Java & Python Full Stack Developer
          </h2>

          <p className="description">
            I'm a B.Tech Computer Science Engineering student
            passionate about building practical software
            applications, developing scalable solutions and
            solving real-world problems through technology.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              Explore My Projects →
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/bharatsalunke07"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://linkedin.com/in/bharat-salunke-19b2b332a/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>

        </div>

        <div className="hero-visual">
          <div className="glow-circle">
            <div className="code-card">
              <p className="code-comment">
                // My developer mindset
              </p>

              <p>
                <span className="code-purple">const</span> developer = {'{'}
              </p>

              <p className="code-indent">
                name: <span className="code-green">'Bharat'</span>,
              </p>

              <p className="code-indent">
                languages: [
              </p>

              <p className="code-indent code-more">
                'Java', 'Python'
              </p>

              <p className="code-indent">
                ],
              </p>

              <p className="code-indent">
                focus: <span className="code-green">'Software Development'</span>,
              </p>

              <p className="code-indent">
                learning: <span className="code-green">'DSA'</span>
              </p>

              <p>{'}'}</p>
            </div>
          </div>
        </div>

      </section>

      
      
{/* About Section */}
<section className="about section" id="about">

  <div className="section-heading">
    <p className="section-label">GET TO KNOW ME</p>
    <h2>About <span>Me</span></h2>
    <p className="section-subtitle">
      A little about my background, interests and
      engineering journey.
    </p>
  </div>

  <div className="about-container">

    <div className="about-text">
      <h3>Building my foundation in Software Engineering.</h3>

      <p>
        I am a B.Tech Computer Science Engineering student
        with a strong interest in software development and
        problem-solving.
      </p>

      <p>
        I work with Java and Python and explore full-stack
        development using React, Django, REST APIs and
        relational databases. Through hands-on projects,
        I am developing practical experience in building
        functional software applications.
      </p>

      <p>
        Currently, I am strengthening my Data Structures
        and Algorithms knowledge, object-oriented
        programming concepts and software engineering
        fundamentals as I prepare for software development
        opportunities.
      </p>

      <p>
        My goal is to become a capable software engineer
        who can understand problems, write maintainable
        code and build reliable applications.
      </p>

      {/* Career Objective */}
      <div className="career-objective">
        <h4>🎯 Career Objective</h4>
        <p>
          Aspiring Software Engineer pursuing B.Tech in
          Computer Science and Engineering (2027), with
          hands-on experience in developing full-stack
          applications using Java, Python, React, Django
          and relational databases. Passionate about
          problem-solving, data structures and algorithms,
          and building practical software solutions.
          Seeking opportunities to apply my technical
          skills, contribute to software development teams,
          and grow as a software engineer.
        </p>
      </div>

    </div>

    <div className="about-highlights">

      <div className="highlight-card">
        <span className="highlight-icon">⌘</span>
        <h4>Programming</h4>
        <p>Java and Python development</p>
      </div>

      <div className="highlight-card">
        <span className="highlight-icon">⌘</span>
        <h4>Problem Solving</h4>
        <p>Building DSA and OOP fundamentals</p>
      </div>

      <div className="highlight-card">
        <span className="highlight-icon">⌘</span>
        <h4>Development</h4>
        <p>Backend and full-stack applications</p>
      </div>

      <div className="highlight-card">
        <span className="highlight-icon">⌘</span>
        <h4>Databases</h4>
        <p>SQL and PostgreSQL</p>
      </div>

    </div>

  </div>
</section>


      {/* Technical Skills Section */}
      <section className="skills section" id="skills">

        <div className="section-heading">
          <p className="section-label">MY TECHNICAL EXPERTISE</p>
          <h2>Technical <span>Skills</span></h2>
          <p className="section-subtitle">
            Technologies and concepts I use while building
            software applications.
          </p>
        </div>

        
<div className="skills-grid">

  <article className="skill-card">
    <h3>Programming Languages</h3>
    <div className="skill-tags">
      <span>Java</span>
      <span>Python</span>
      <span>JavaScript</span>
    </div>
  </article>

  <article className="skill-card">
    <h3>Frontend Development</h3>
    <div className="skill-tags">
      <span>HTML5</span>
      <span>CSS3</span>
      <span>React.js</span>
    </div>
  </article>

  <article className="skill-card">
    <h3>Backend Development</h3>
    <div className="skill-tags">
      <span>Django</span>
      <span>Spring Boot</span>
      <span>REST APIs</span>
    </div>
  </article>

  <article className="skill-card">
    <h3>Database Management</h3>
    <div className="skill-tags">
      <span>MySQL</span>
      <span>PostgreSQL</span>
    </div>
  </article>

  <article className="skill-card">
    <h3>Machine Learning & Data</h3>
    <div className="skill-tags">
      <span>OpenCV</span>
      <span>NumPy</span>
      <span>Pandas</span>
      <span>Scikit-learn</span>
    </div>
  </article>

  <article className="skill-card">
    <h3>Core Computer Science</h3>
    <div className="skill-tags">
      <span>Data Structures & Algorithms</span>
      <span>DBMS</span>
      <span>Operating Systems</span>
      <span>Computer Networks</span>
      <span>OOP</span>
    </div>
  </article>

  <article className="skill-card">
    <h3>Professional Skills</h3>
    <div className="skill-tags">
      <span>Teamwork</span>
      <span>Problem Solving</span>
      <span>Critical Thinking</span>
      <span>Communication</span>
    </div>
  </article>

</div>


      </section>
      
      {/* Featured Projects Section */}
      
{/* Projects Section */}
<section className="projects section" id="projects">
  <div className="section-container">
    <div className="section-heading">
      <span className="section-subtitle">MY WORK</span>
      <h2>Featured Projects</h2>
      <p>
        A selection of projects where I apply my programming,
        problem-solving, and full-stack development skills.
      </p>
    </div>

    <div className="projects-grid">

      {/* Project 01 - SmartSched */}
      <div className="project-card">
        <div className="project-top">
          <span className="project-number">01</span>
          <span className="project-category">Full Stack Development</span>
        </div>

        <h3>SmartSched – Smart Timetable Scheduler</h3>

        <p>
          A smart timetable scheduling system designed to simplify
          academic scheduling by managing timetable creation and
          coordination between administrators, faculty, and students.
        </p>

        <ul className="project-features">
          <li>Role-based access for Admin, Faculty, and Students</li>
          <li>Automated timetable scheduling using optimization</li>
          <li>Centralized timetable management</li>
        </ul>

        <div className="project-tech">
          <span>React.js</span>
          <span>Material UI</span>
          <span>Django</span>
          <span>PostgreSQL</span>
          <span>Google OR-Tools</span>
        </div>

        <a
          href="https://github.com/bharatsalunke07/Smart-Sched"
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          View on GitHub ↗
        </a>
      </div>

      {/* Project 02 - Mental Stress Detection */}
      <div className="project-card">
        <div className="project-top">
          <span className="project-number">02</span>
          <span className="project-category">AI / Machine Learning</span>
        </div>

        <h3>Mental Stress Detection Using Facial Emotion Recognition</h3>

        <p>
          A web-based application that uses facial emotion recognition
          to identify facial expressions through a webcam and explore
          their potential relationship with mental stress.
        </p>

        <ul className="project-features">
          <li>Real-time facial expression detection</li>
          <li>Webcam-based emotion recognition</li>
          <li>Machine learning-based facial analysis</li>
        </ul>

        <div className="project-tech">
          <span>Python</span>
          <span>Django</span>
          <span>OpenCV</span>
          <span>TensorFlow</span>
          <span>JavaScript</span>
        </div>

        <a
          href="https://github.com/bharatsalunke07/emotion_analyser"
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          View on GitHub ↗
        </a>
      </div>

      {/* Project 03 - Graphical Password */}
      <div className="project-card">
        <div className="project-top">
          <span className="project-number">03</span>
          <span className="project-category">Web Development</span>
        </div>

        <h3>Graphical Password Authentication System</h3>

        <p>
          A graphical authentication system that explores image-based
          password entry as an alternative to conventional text-based
          password authentication.
        </p>

        <ul className="project-features">
          <li>Image-based graphical password interface</li>
          <li>Image segmentation-based selection</li>
          <li>Interactive user interface</li>
        </ul>

        <div className="project-tech">
          <span>HTML5</span>
          <span>CSS3</span>
          <span>JavaScript</span>
        </div>

        <a
          href="https://github.com/bharatsalunke07"
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          View on GitHub ↗
        </a>
      </div>

    </div>
  </div>
</section>


      <section className="education section" id="education">
        <div className="section-heading">
          <p className="section-label">MY ACADEMIC BACKGROUND</p>
    <h2>Education</h2>
    <p className="section-subtitle">
      My academic journey and educational qualifications.
    </p>
  </div>

  <div className="education-container">

    <div className="education-card">
      <span className="education-icon">🎓</span>
      <div>
        <p className="education-year">2023 – 2027</p>
        <h3>B.Tech – Computer Science and Engineering</h3>
        <h4>
          Matsyodari Shikshan Sanstha's College of Engineering
          and Technology, Jalna
        </h4>
        <p>CGPA: 8.0 (up to 6th Semester)</p>
      </div>
    </div>

    <div className="education-card">
      <span className="education-icon">📘</span>
      <div>
        <p className="education-year">2023</p>
        <h3>Higher Secondary Certificate (HSC)</h3>
        <h4>Sant Bahinabai Junior College, Shivoor</h4>
        <p>Percentage: 85%</p>
      </div>
    </div>

    <div className="education-card">
      <span className="education-icon">📚</span>
      <div>
        <p className="education-year">2021</p>
        <h3>Secondary School Certificate (SSC)</h3>
        <h4>Sant Bahinabai Kanya Prashala, Shivoor</h4>
        <p>Percentage: 88%</p>
      </div>
    </div>

  </div>
</section>


<div className="certification-heading">
  <h3>Certifications</h3>
  <p>Continuous learning and professional development.</p>
</div>

<div className="certifications-grid">

  <article className="certification-card">
    <span className="certification-icon">☁️</span>
    <h3>Oracle Cloud Infrastructure 2025</h3>
    <p>Certified AI Foundations Associate</p>
    <span className="certificate-tag">Oracle University</span>
  </article>

  <article className="certification-card">
    <span className="certification-icon">🛰️</span>
    <h3>AI/ML for Geodata Analytics</h3>
    <p>August 2026</p>
    <span className="certificate-tag">IIRS – ISRO</span>
  </article>

  <article className="certification-card">
    <span className="certification-icon">📡</span>
    <h3>Internet of Things</h3>
    <p>July – October 2025</p>
    <span className="certificate-tag">NPTEL</span>
  </article>

  <article className="certification-card">
    <span className="certification-icon">🗄️</span>
    <h3>Database Management System</h3>
    <p>July – September 2025</p>
    <span className="certificate-tag">NPTEL · IIT Kharagpur</span>
  </article>

  <article className="certification-card">
    <span className="certification-icon">🌐</span>
    <h3>Web Design & Development</h3>
    <p>September 2025</p>
    <span className="certificate-tag">NSDC Skill India</span>
  </article>

  <article className="certification-card">
    <span className="certification-icon">💻</span>
    <h3>Software Engineering and Agile Software Development</h3>
    <p>Professional learning program</p>
    <span className="certificate-tag">Infosys Springboard</span>
  </article>

</div>



{/* Achievements & Leadership Section */}
<section className="achievements section" id="achievements">
  <div className="section-heading">
    <p className="section-label">BEYOND THE CLASSROOM</p>
    <h2>Achievements & Leadership</h2>
    <p className="section-subtitle">
      Taking initiative, collaborating with teams and continuously
      exploring new opportunities.
    </p>
  </div>

  <div className="achievements-grid">

    <article className="achievement-card">
      <div className="achievement-icon">🏆</div>
      <p className="achievement-category">LEADERSHIP</p>
      <h3>CESA Committee Member – Editor</h3>
      <p className="achievement-organization">
        Computer Engineering Students Association
      </p>
      <p className="achievement-description">
        Served as an Editor in the CESA committee for the academic
        year 2025–26, contributing to student activities and
        departmental initiatives.
      </p>
      <span className="achievement-tag">2025–26</span>
    </article>

    <article className="achievement-card">
      <div className="achievement-icon">💡</div>
      <p className="achievement-category">INNOVATION</p>
      <h3>Hackathon Participation</h3>
      <p className="achievement-organization">
        Technical problem-solving and teamwork
      </p>
      <p className="achievement-description">
        Participated in collaborative project development,
        exploring practical solutions to real-world problem
        statements through technology.
      </p>
      <span className="achievement-tag">Team Collaboration</span>
    </article>

    <article className="achievement-card">
      <div className="achievement-icon">🚀</div>
      <p className="achievement-category">PROJECT DEVELOPMENT</p>
      <h3>Hands-on Software Projects</h3>
      <p className="achievement-organization">
        Learning through practical implementation
      </p>
      <p className="achievement-description">
        Developed academic and personal projects using Python,
        Django, Java, React and databases to strengthen software
        development skills.
      </p>
      <span className="achievement-tag">Practical Learning</span>
    </article>

  </div>
</section>

{/* Contact Section */}
<section className="contact section" id="contact">
  <div className="section-heading">
    <p className="section-label">GET IN TOUCH</p>
    <h2>Let's Connect</h2>
    <p className="section-subtitle">
      I'm open to software development opportunities,
      internships and meaningful collaborations.
    </p>
  </div>

  <div className="contact-container">
    <div className="contact-info">
      <h3>Let's discuss opportunities.</h3>
      <p>
        Have an opportunity or a project idea?
        Feel free to connect with me.
      </p>

      <a href="mailto:salunkebharat475@gmail.com">
        <span>✉️</span>
        salunkebharat475@gmail.com
      </a>
      <a
        href="https://www.linkedin.com/in/bharat-salunke-19b2b332a/"
        target="_blank"
        rel="noreferrer"
      >
        <span>💼</span>
        LinkedIn Profile
      </a>

      <a
        href="https://github.com/bharatsalunke07"
        target="_blank"
        rel="noreferrer"
      >
        <span>💻</span>
        GitHub Profile
      </a>
    </div>

    
  </div>
</section>

{/* Footer */}
<footer className="footer">
  <div className="footer-content">
    <a href="#home" className="footer-logo">Bharat.</a>

    <p>
      Aspiring Software Engineer | Java & Python Full Stack Developer
    </p>

    <div className="footer-links">
      <a href="https://github.com/bharatsalunke07"
         target="_blank" rel="noreferrer">GitHub</a>

      <a href="https://www.linkedin.com/in/bharat-salunke-19b2b332a/"
         target="_blank" rel="noreferrer">LinkedIn</a>

      <a href="mailto:salunkebharat475@gmail.com">Email</a>
    </div>

    
  </div>
</footer>







    </div>
  )
}

export default App

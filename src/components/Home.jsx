import React, { useState, useEffect } from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope as faSolidEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCards';

function Home() {
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);

  const projectsData = [
    {
      link: "/partiful",
      image: "/partiful.gif",
      title: "Partiful Homepage Redesign",
      tags: "UIUX",
      date: "April 2024",
      description: "Work with Partiful founders to redesign the app's homepage",
    },
    {
      link: "/aapi",
      image: "/aapi.png",
      title: "AAPI Media Resource",
      tags: "React",
      date: "May 2024",
      description: "Compile a list of positive representation of Asian Americans in media as a resource for AA Cultural Society in RI",
    },
    {
      link: "/familiesandschools",
      image: "/familiesandschools.png",
      title: "Families and Schools Project",
      tags: "React, Typescript",
      date: "Winter 2023",
      description: "Develop outreach website for Brown University research team as a part of Full Stack at Brown",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById('projects');
      if (!projectsSection) return;

      const topPosition = projectsSection.getBoundingClientRect().top;
      const bottomPosition = projectsSection.getBoundingClientRect().bottom;

      if (topPosition < window.innerHeight && bottomPosition > 0) {
        setIsProjectsVisible(true);
      } else {
        setIsProjectsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="Home">
      <header className="header">
        <div className="logo-container">
          <Link to ="/#about"><img src='/bwu.png' alt="Logo" className="logo" /></Link>
        </div>
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item"><a href="#about">About</a></li>
            <li className="nav-item"><a href="#projects">Projects</a></li>
            <li className="nav-item"><a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <section id="about" className="section">
          <div className='image-container'>
            <img className= 'profile' src='/profile2.png' alt="Profile" />
          </div>
          
          <div className='about-me'>
            <h1>Brandon Wu.</h1>
            <p>I'm a <b>fullstack software engineer</b> creating seamless user experiences through cross-functional collaboration.</p>
            <p>I recently graduated from Brown University where I studied Computer Science with a focus on product design.</p>
            <p>In my free time, you will find me slacklining, climbing, or playing beach volleyball!</p>

            <div id='social'>
              <a href="https://github.com/bwu29" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FontAwesomeIcon className="fab" icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/brandon-wu-7103a81b2/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FontAwesomeIcon className="fab" icon={faLinkedin} />
              </a>
              <a href="mailto:brawu3@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                <FontAwesomeIcon className="fas" icon={faSolidEnvelope} />
              </a>
            </div>
          </div>
        </section>
          <section id="projects" className={`projects ${isProjectsVisible ? 'fade-in' : ''}`}>
        <h2 id="projects-header">Projects</h2>
        <div className='project-display'>
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
      </main>
    </div>
  );
}

export default Home;

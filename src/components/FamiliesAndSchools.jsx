import React from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';

function FamiliesAndSchools() {
  return (
    <div className="App">
     <header className="header">
        <div className="logo-container">
          <Link to ="/"><img src='/bwu.png' alt="Logo" className="logo" /></Link>
        </div>
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/#about">About</a>
            </li>
            <li className="nav-item">
              <a href="/#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </li>
          </ul>
        </nav>
     </header>
      <div className='project-page'>
        <div className="transbox-with-padding">
          <div className="text-flow">
            <h1>Families and Schools Research</h1>
          </div>

          <section className="assignment-part">
            
            <header className='top'>
          
          <header className="overview">
            <strong>Organization:</strong> Full Stack at Brown
            <br />
            <strong>Client:</strong> Dr. Rangel's Research Group
            <br />
            <strong>Role:</strong> Lead Developer, Project Manager
            <br />
            

            <strong>Stack:</strong> React, Typescript, Tailwind CSS
            <br />
            <strong>Timeframe:</strong> October 2023- December 2023
          
            
          </header>
          <img src= '/familiesandschools.png' alt="Families and Schools Research" />
          
          </header>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p>
                As a part of Full Stack at Brown, an organization at Brown University creating websites for the local community, I was tasked with leading a team of developers and designers to create a website for Dr. Rangel's research team. The Families and Schools Project is a research study focusing on the role of parent-child relationships in shaping educational success. The goal of the website was to find participants for their survey, describe their research and introduce the team.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Primary Responsibilities</h2>
              <ul className="list-disc ml-8">
                <li>
                  <strong>COMMUNICATE</strong> with client to establish project goals
                  <ul className="list-disc ml-8">
                    <li>Design</li>
                    <li>Deadlines</li>
                    <li>Content</li>
                    <li>Iterative feedback</li>
                  </ul>
                </li>
                <li>
                  <strong>LEAD</strong>
                  <ul className="list-disc ml-8">
                    <li>Design meetings with 3 designers, outlining design goals and communicating client feedback</li>
                    <li>A team of 6 freshmen developers, administering the development process through Github Projects</li>
                  </ul>
                </li>
                <li>
                  <strong>PROGRAM</strong>
                  <ul className="list-disc ml-8">
                    <li>Implement routing between pages</li>
                    <li>Debug errors with CSS alignment</li>
                    <li>Integrate code segments to develop final website</li>
                  </ul>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Wireframing</h2>
              <div className='wireframe-container'>
                <img src="wireframe1.png" alt="Wireframe Mockup 1" />
                <img src="wireframe2.png" alt="Wireframe Mockup 2" />
                <img src="wireframe3.png" alt="Wireframe Mockup 3" />
              </div>
              <p>We continued to update our mockups as we got more of the information and images from our client, adjusting text boxes to fit both the Spanish and English versions of the text.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Feedback</h2>
              <div className="mb-4">
                <p><strong>Problem:</strong> Need website to have both Spanish and English options, auto translate features usually aren't very accurate.</p>
                <p>
                  <strong>Solution:</strong> Add a language toggle.
                </p>
                <img src='/toggle.png' alt="Language Toggle" />
              </div>
              <div className="mb-4">
                <p><strong>Problem:</strong> Need to be explicit about contact information, footer not sufficient.</p>
                <p>
                  <strong>Solution:</strong> Add an explicit contact us blurb on the team page.
                </p>
                <img src='/contact.png' alt="Contact Information" />
              </div>
              <div>
                <p><strong>Problem:</strong> There are actually two different Qualtrics links, one for parents and one for students/admin.</p>
                <p>
                  <strong>Solution:</strong> Instead of linking the "Click Here" button to the survey, it would route the user to the survey section, where it describes the two survey options.
                </p>
                <img src='survey.png' alt="Survey Options" />
              </div>
            </section>

            <section>
              <h2 className="dev text-2xl font-bold mb-4">Development</h2>
              <div className='sidebyside'>
                <div className='dev-list'>
                  <ul className="list-disc ml-8">
                    <li>Assign tickets based on certain components/pages.</li>
                    <li>Assist new developers with their tasks.</li>
                    <li>Work on routing and code organization.</li>
                  </ul>
                  
                </div>
                <div>
                  <img src="/github.png" id="github" alt="GitHub Screenshot" />
                </div>
              </div>
              <br></br>
              <div>
    <ul>
        <li>
            <strong>Component-Based Architecture:</strong> Utilized React components to ensure a modular code structure, enhancing reusability and maintainability.
        </li>
        <li>
            <strong>Dynamic Content Rendering:</strong> Implemented dynamic rendering of team members and project details from data arrays, facilitating easy updates and scalability.
        </li>
        <li>
            <strong>Form Integration:</strong> Integrated with form components to seamlessly interact with external survey forms, enhancing user engagement and data collection.
        </li>
        <li>
            <strong>Responsive Design:</strong> Incorporated responsive design principles to ensure optimal viewing and usability across a variety of devices and screen sizes.
        </li>
        <li>
            <strong>Accessibility Considerations:</strong> Adhered to accessibility standards by employing semantic HTML, descriptive alt attributes, and appropriate color contrast, ensuring inclusivity and compliance with accessibility guidelines.
        </li>
    </ul>
</div>
            </section>
            <section className="takeaways">
              <h2 className="text-2xl font-bold mb-4">Takeaways</h2>
              <ul className="takeaways-list">
                <li>
                  <strong>Effective Communication:</strong> Clear communication with the client was pivotal for defining project goals and incorporating iterative feedback.
                </li>
                <li>
                  <strong>Leadership:</strong> Leading design meetings and managing a developer team required effective delegation and coordination.
                </li>
                <li>
                  <strong>Technical Implementation:</strong> Tasks included routing, CSS debugging, and code integration to finalize the website.
                </li>
                <li>
                  <strong>Multilingual Support:</strong> Adding a language toggle enhanced user experience, overcoming limitations of auto-translate.
                </li>
                <li>
                  <strong>Improved Contact Information:</strong> An explicit contact us blurb addressed deficiencies in footer information.
                </li>
                <li>
                  <strong>User Engagement:</strong> Redirecting users to a survey section improved understanding of survey options.
                </li>
                <li>
                  <strong>Development Process:</strong> Tasks involved ticket assignment, assisting new developers, and focusing on code organization.
                </li>
              </ul>
            </section>
            <section class="final-site">
              <h2>Final Coded Site</h2>
              <div class="img-container">
                <a href="https://familiesandschools.vercel.app/" aria-label="Final Coded Site">Link to the final coded site</a>
                <img src="/FAShomepage.png" alt="Final site screenshot"/>
              </div>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
}

export default FamiliesAndSchools;

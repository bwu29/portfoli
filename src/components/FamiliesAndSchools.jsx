import React from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';
import { ReactComponent as HomeIcon } from '../home.svg'; 

function FamiliesAndSchools() {
  return (
    <div className="App">
      <Link to="/" className="back-to-home-button">
                <HomeIcon className="home-icon" style={{ position: 'absolute', top: 0, left: 0 }}/>
            </Link>
      <div className="transbox-with-padding">
        <div className="text-flow">
          <h1>Families and Schools Research</h1>
        </div>

        <section className="assignment-part">
            <header className='top'>
          <header className="mb-8">
            
            <p>Organization: Full Stack at Brown</p>
            <p>Client: Dr. Rangel</p>
            <p>Role: Lead Developer/Project Manager</p>
            <p>Stack: React.js, Tailwind CSS</p>
          </header>
          <img className= 'FAShomepage'src='/familiesandschools.png'></img>
          </header>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p>
              As a part of Full Stack at Brown, an organization at Brown University creating websites for the local community, I was tasked with leading a team of developers and designers to create a website for Dr. Rangel's research team.
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
                  <li>design meetings with 3 designers, outlining design goals and communicating client feedback</li>
                  <li>a team of 6 newly onboarded developers, administering the development process through Github Projects</li>
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
            <h2 className="text-2xl font-bold mb-4">Mockups in English and Spanish</h2>
            <img src="RangelHome.png" alt="English Mockup" />
            <img src="RangelSpanish.png" alt="Spanish Mockup" />
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Feedback</h2>
            <div className="mb-4">
              <p><strong>Problem:</strong> Need website to have both Spanish and English options, auto translate features usually aren't very accurate.</p>
              <p>
                <strong>Solution:</strong> Add a language toggle.
              </p>
              <img src='/toggle.png'></img>
            </div>
            <div className="mb-4">
              <p><strong>Problem:</strong> Need to be explicit about contact information, footer not sufficient.</p>
              <p>
                <strong>Solution:</strong> Add an explicit contact us blurb on the team page.
              </p>
            </div>
            <div>
              <p><strong>Problem:</strong> There are actually two different Qualtrics links, one for parents and one for students/admin.</p>
              <p>
                <strong>Solution:</strong> Instead of linking the "Click Here" button to the survey, it would route the user to the survey section, where it describes the two survey options.
              </p>
              <img src='survey.png'></img>
            </div>
          </section>

          <section>
            <h2 className="dev text-2xl font-bold mb-4">Development</h2>
            <div className='sidebyside'>
            <ul className="list-disc ml-8">
              <li>Assign tickets based on certain components/pages.</li>
              <li>Assist new developers with their tasks.</li>
              <li>Work on routing and code organization.</li>
            </ul>
            <img src="/github.png" id="github" alt="GitHub Screenshot" />
            </div>
          </section>
          <section class="final-site">
      <h2>Final Coded Site</h2>
      <div class="img-container">
        <a href="https://aapimedia.vercel.app">Link to the final coded site</a>
        <img src="/FAShomepage.png" alt="Final site screenshot"/>
      </div>
    </section>
        </section>
      </div>
    </div>
  );
}

export default FamiliesAndSchools;
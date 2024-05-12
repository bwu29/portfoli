import React from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';

function Aapi() {
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
           <h1>AAPI Media Resource</h1>
         </div>
         <section className="assignment-part">
           <header className='top'>
             <header className="overview">
               <strong>Role:</strong> Developer
               <br />
               <strong>Stack:</strong> React.js
               <br />
               <strong>Timeframe:</strong> May 2024
             </header>
             <img src= 'aapi.png' alt="AAPI Media Resource" />
           </header>
           <p>
             <strong>Inspiration:</strong> Positive representation in the media is incredibly important for the development of Asian American youth, allowing them to strengthen confidence and sense of identity. In Grace Lin's TED Talk "The Windows and Mirrors of Your Child's Bookshelf", she talks about books as windows and mirrors and how a child's bookshelf should be filled with both. Readers should be able to see themselves in stories as well as gain exposure to other perspectives.
           </p>
           <div style={{ display: 'flex', justifyContent: 'center' }}>
             <iframe
               width="560"
               height="315"
               src="https://www.youtube.com/embed/_wQ8wiV3FVo"
               title="YouTube video player"
               frameBorder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               allowFullScreen
               aria-label="AAPI Media Resource Video"
             ></iframe>
           </div>
           <p>
             <strong>Goal:</strong> This resource is targeted towards Asian American families, particularly parents and teenagers looking for something to watch or read. My website was shared with the AA Cultural Society in RI and is accessible through their website. <a href="https://providenceeduc.weebly.com/" target="_blank" rel="noopener noreferrer" aria-label="AAPI Media Resource Website">https://providenceeduc.weebly.com/</a>
           </p>
         </section>
         <section className="assignment-part">
           <h2>Competitive Analysis</h2>
           <p>The website will allow users to save their favorite books/movies to a to-read/to-watch list. In deciding how I wanted my aggregator to work, I drew inspiration from three existing websites: <a href="https://www.twitch.tv/" aria-label="Twitch">Twitch</a>, <a href="https://www.zillow.com/myzillow/favorites" aria-label="Zillow">Zillow</a>, and <a href="https://www.pinterest.com/" aria-label="Pinterest">Pinterest</a>.</p>
           <div class="table-wrapper">
             <table>
               <thead>
                 <tr>
                   <th></th>
                   <th>Twitch</th>
                   <th>Pinterest</th>
                   <th>Zillow</th>
                 </tr>
               </thead>
               <tbody>
                 <tr>
                   <td>Search through favorites</td>
                   <td class="no">✕</td>
                   <td class="no">✕</td>
                   <td class="no">✕</td>
                 </tr>
                 <tr>
                   <td>Displayed on any screen (sticky)</td>
                   <td class="yes">✓</td>
                   <td class="no">✕</td>
                   <td class="no">✕</td>
                 </tr>
                 <tr>
                   <td>Compare favorites</td>
                   <td class="no">✕</td>
                   <td class="no">✕</td>
                   <td class="yes">✓</td>
                 </tr>
                 <tr>
                   <td>Filter favorites</td>
                   <td class="no">✕</td>
                   <td class="no">✕</td>
                   <td class="yes">✓</td>
                 </tr>
                 <tr>
                   <td>Sort/order favorites</td>
                   <td class="no">✕</td>
                   <td class="yes">✓</td>
                   <td class="yes">✓</td>
                 </tr>
                 <tr>
                   <td>Organize favorites into folders/groups</td>
                   <td class="no">✕</td>
                   <td class="yes">✓</td>
                   <td class="no">✕</td>
                 </tr>
                 <tr>
                   <td>Ability to unfavorite directly from aggregator</td>
                   <td class="no">✕</td>
                   <td class="yes">✓</td>
                   <td class="yes">✓</td>
                 </tr>
               </tbody>
             </table>
           </div>
           <p>...</p>
         </section>
         <section class="implementation">
           <h2>My Implementation</h2>
           <ul>
             <li>Adopt a similar filtering function as the Zillow website, with filtering conditions listed in a dropdown bar to minimize clutter.</li>
             <li>Allow users to unfavorite or remove items directly from the aggregator, avoiding the need to click back into individual items.</li>
             <li>Implement a sticky aggregator on the page, similar to Twitch.tv, to allow users to keep track of favorited items while browsing.</li>
           </ul>
           <div class="img-container">
             <img id = 'pasta-wireframe' src="/pasta-wireframe.png" alt="Mockup screenshot"/>
           </div>
         </section>
         <section className="assignment-part">
           <h2>Technical Features</h2>
           <div id = 'features'>
             <div id = 'features-list'>
               <ul>
                 <li>
                   <strong>Data Management:</strong> Media data is imported from an external JSON file I created and stored using React's useState hook.
                 </li>
                 <li>
                   <strong>Filtering and Sorting:</strong> Users can filter media content by age group and medium, and sort it alphabetically. The app uses JavaScript's array methods to perform filtering and sorting dynamically.
                 </li>
                 <li>
                   <strong>Dynamic Rendering:</strong> Filtered and sorted media data is dynamically rendered using React's map function, presenting each item as a MediaCard component.
                 </li>
                 <li>
                   <strong>State Management:</strong> React's state management and hooks (useState and useEffect) ensure efficient data handling and seamless updates based on user interactions.
                 </li>
               </ul>
             </div>
             <div id= 'code-images'>
               <img src ='dataset.png' className='code-snippet' alt="Dataset code snippet"/>
               <img src ='usestate.png' className='code-snippet' alt="UseState code snippet"/>
             </div>
           </div>
         </section>
         <section className="assignment-part">
           <h2>Takeaways</h2>
           <p>These design choices, such as implementing aggregators and sort and filter functions:</p>
           <ul>
             <li>Enhance user experience by providing personalized content exploration.</li>
             <li>Enable easy discovery and engagement with media items aligned with user preferences.</li>
             <li>Offer a modular and scalable design for future enhancements and expansions.</li>
           </ul>
         </section>
         <section class="final-site">
           <h2>Final Coded Site</h2>
           <div class="img-container">
             <a href="https://aapimedia.vercel.app" aria-label="Final Coded Site">Link to the final coded site</a>
             <img src="/aapifinal.png" alt="Final site screenshot"/>
           </div>
         </section>
       </div>
     </div>
   </div>
 );
}

export default Aapi;

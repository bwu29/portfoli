import React from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';
import { ReactComponent as HomeIcon } from '../home.svg'; 


function Partiful(){
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
                <h1>Partiful Homepage Redesign</h1>
            </div>

            <section className="assignment-part">
                
                
            <header className='top'>
        
        <header className="overview">
          <strong>Company:</strong> Partiful
          <br />
          
          <strong>Role:</strong> Product Designer
          <br />
          

          <strong>Timeframe:</strong> March 2024- April 2024
        
          
        </header>
        <img src="./partiful.gif" alt="Partiful GIF" />        
        </header>
                

                <p>
                In this project, I worked alongside Kaitlyn Williams, Kenneth Liou, and William Park to redesign  <a href="https://www.partiful.com">Partiful's</a> mobile app homepage.
                
                


                {/* Explain More */}
                </p>
                <p>Partiful is a new events platform and party RSVP website. It offers tools to create, customize, and share event invitations, allowing hosts to manage RSVPS, track guest lists, and communicate with attendees without having to keep someone's number. With a user-friendly interface, Partiful aims to make organizing parties and events more straightforward and enjoyable.</p>
                <p>
                We were very excited to work with Partiful considering that every member
                of our group has used the interface to invite people to events. Having 
                some experience with this program allowed us to explore some creative
                ideas we had to improve one of our favorite party invitation platforms. 
                </p>
            </section>
            <section className="assignment-part">
            <h2>Process Overview</h2>
            <p>
                Our iterative design process for this client can be outlined by the following steps: 
                <ul>
                    <li>
                    Reading the brief from the client
                    </li>
                    <li>
                    Asking clarifying questions to identify the core problems 
                    </li>
                    <li>
                    Individually creating sketches of low-fidelity wireframes
                    </li>
                    <li>
                    Collaborating to settle on a design for our first round of low-fidelity wireframes
                    </li>
                    <li>
                    Receiving feedback from our peers
                    </li>
                    <li>
                    Sending the wireframes to our client, Partiful, to receive their feedback
                    </li>
                    <li>
                    Redesigning our low-fidelity wireframes as an intermediate step before creating the high-fidelity wireframes
                    </li>
                    <li>
                    Creating the high-fidelity interactive wireframe based off of the feedback we received from our client
                    </li>
                    <li>
                    Meeting with our client, Partiful, to show our final high-fidelity interactive wireframe and receiving feedback
                    </li>
                </ul>
                
                </p>
            </section>

            <section className="assignment-part">
                <h2>Problem Definition</h2>
                <p>
                The clients at Partiful tasked us with redesigning their homepage for a more intuitive design to attract more users and improve navigation.
                </p>
                <p> 
                Some problems that they had expressed included the following: 
                <ul>
                    <li>
                    Inability to see more than one or two events on the homepage at a time (limited surface area of h-scroll)
                    </li>
                    <li>
                    The difficulty of using h-scroll for every element on their homepage
                    </li>
                    <li>
                    The lack of content on the homepage other than events to bring 
                    users to the app even when they do not have any upcoming events
                    </li>
                    <li>
                    Keeping elements playful 
                    </li>
                </ul>
                </p>

                

                <p>
                Once we established the main painpoints of Partiful's homepage in the 
                eyes of its designers, we individually created sketches of the low-fidelity
                wireframe for the homepage, as seen below. Use the arrows at the 
                bottom of the Figma display to scroll through some of our 
                different sketches. 
                </p>

        
                <div style={{ display: 'flex', justifyContent: 'center', padding: '10px'}}>
                
                <iframe 
                style={{ border: '1px solid rgba(0, 0, 0, 0.1)', width: '570px', height: '450px' }}
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F8eUi1PlqCTplG6sqii4u6n%2FLoFi2%3Ftype%3Ddesign%26node-id%3D20-191%26t%3DnjCxleqrwjlMKA3A-1%26scaling%3Dscale-down%26page-id%3D20%253A181%26mode%3Ddesign" 
                allowfullscreen
                > </iframe>

                </div>

                <p>
                We got some of our main inspiration from Netflix in its categorial
                h-scroll with the ability to vertical scroll through different 
                categories. Additionally, we thought of adding some kind of social 
                aspect, similar to stories on Instagram or Snapchat, where users 
                can post pictures from events. We also had the idea of a card carousel 
                to display events. Finally, we thought about using a gumball style circle that increases in size accroding to the number of people attending the event, containing the profiles of the users attending. 
                </p>
            
            </section>

            <section className="assignment-part" style={{ textAlign: 'center' }}>
                <h2>First Iteration Wireframing</h2>
                <p>
                Based on the initial sketches, we created a first wireframe iteration. Shown below is our first Lo-Fi iteration.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', padding: '10px'}}>
                    <iframe
                    style={{ border: '1px solid rgba(0, 0, 0, 0.1)', width: '570px', height: '450px' }}
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FZ8QRNMO1ghxuZLzQT6Ah7s%2FPartiful%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D41-1374%26viewport%3D345%252C928%252C0.05%26t%3D3NB3n3E9nnTqRzCL-1%26scaling%3Dcontain%26starting-point-node-id%3D41%253A1374%26show-proto-sidebar%3D1%26mode%3Ddesign"
                    allowFullScreen
                    />
                </div>
                <p>
                To get feedback on our design, we created a Loom video to explain our understanding of the problem, walkthrough of our design choices and though process, and next steps/questions. The video was shared with the Partiful team for review as well as fellow peers for feedback.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                <iframe
                    src="https://www.loom.com/embed/50024ee2a4b545e3ac957c9922bcc5ce?sid=8544a987-f57d-4110-95fd-06db076f35a3"
                    frameBorder="0"
                    allowFullScreen
                    title="Loom Video - First Iteration"
                    style={{ width: '570px', height: '450px' }}
                />
                </div>
                <p>
                Some feedback we received from our peers included adding more interactions 
                to demonstrate the flow between tabs, as well as creating a script 
                for our Loom video to better describe our design to our client. 

                Some feedback we received from our client was to make the information 
                heirarchy much more clear, making the events page the main page 
                on the homepage. Additionally, they loved the gumball idea, thinking
                that it was very fun. They wanted to hear more about what is on the 
                "Trends" page and how that content was generated (through users or 
                companies or both). Finally, they challenged us to think more 
                outside the box in displaying events and to think of something that 
                displays more events at a time than a card carousel. 
                
                </p>
            </section>

            <section className="assignment-part">
                <h2>Second Iteration Wireframing</h2>
                <p>
                Based on the feedback, we refined our wireframes for the second iteration. You can interact with the Figma file by scrolling through the main page and clicking the arrows at the bottom to switch between tabs
                
                {/* Explain suggestions and why they were implemented */}
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', padding: '10px'}}>
                    <iframe
                    style={{ border: '1px solid rgba(0, 0, 0, 0.1)', width: '570px', height: '450px' }}
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F8eUi1PlqCTplG6sqii4u6n%2FLoFi2%3Ftype%3Ddesign%26node-id%3D5-1911%26t%3DDJct2ND4jxFcMb1a-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26mode%3Ddesign"
                    allowFullScreen
                    />
                </div>
                <p>
                    We made the events page the starting page, also moving the navigation 
                    bar to the top of the screen. We also chose to go with an Apple Wallet 
                    style of design to display invites and upcoming events, in order 
                    to display multiple events on a single page. We also kept the 
                    Netflix style of scrolling on both the "Trends" and "Friends" pages. 
                </p>
            </section>

            <section className="assignment-part">
                <h2>Hi-Fi Prototyping</h2>
                <p>
                We created high-fidelity prototypes for final review. Below is the embedded Figma design. You can interact with the 
                prototype by vertical scrolling, swiping on the different events, clicking through the navigation tabs, and clicking 
                highlights in the "Friends" tab. Additionally, you can see what different homepages
                would look like depending on the number of invites and upcoming events a user has. 
                <div style={{ display: 'flex', justifyContent: 'center', padding: '10px'}}>
                    <iframe
                    style={{ border: '1px solid rgba(0, 0, 0, 0.1)', width: '570px', height: '450px' }}
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FZ8QRNMO1ghxuZLzQT6Ah7s%2FPartiful%3Fpage-id%3D23%253A50%26type%3Ddesign%26node-id%3D189-3966%26viewport%3D-2239%252C249%252C0.6%26t%3DHDiGS1K7rwi0hczr-1%26scaling%3Dscale-down%26starting-point-node-id%3D189%253A3966%26show-proto-sidebar%3D1%26mode%3Ddesign"
                    allowFullScreen
                    />
                </div>
                {/* Explain the design and Visual Style Guide */}
                
                <p>
                In this prototype, we implemented an Apple Wallet display of events,
                where the events are stacked on top of each other. For incoming events,
                the user can swipe left/right to show if they are attending or not. 
                Additionally, the user can scroll vertically to see upcoming events
                and past events. They are able to click on "Trends" to navigate
                to the "Trends" page where they will find party themes, resturants/food,
                and venues. They can click on the "Friends" page to navigate to 
                users' highlights where a user can click on the highlight and see
                a polariod picture post from the party. They can return to the "Friends"
                page to see their friends and suggested users. 
                
                I focused on creating the components and figuring out the logistics of the Trends tab, while my team members focused on the clicking animations and the Friends tab.
                </p>

                <p>
                One of my personal contributions was creating the visual style guide and ensuring our redesign was consistent with the company's branding. Below is the Figma file containing the style guide of our 
                high-fidelity prototype.  
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', padding: '10px'}}>
                
                <iframe 
                style={{ border: '1px solid rgba(0, 0, 0, 0.1)', width: '570px', height: '450px' }}
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FZ8QRNMO1ghxuZLzQT6Ah7s%2FPartiful%3Fpage-id%3D107%253A299%26type%3Ddesign%26node-id%3D398-5155%26viewport%3D-172%252C375%252C0.11%26t%3DRa2vhNlb502L7Slz-1%26scaling%3Dscale-down%26mode%3Ddesign" 
                allowfullscreen
                > </iframe>

                </div>
                </p>
            </section>

            <section className="assignment-part">
                <h2>Founder Feedback</h2>
                <p>
                After completing our Hi-Fi design, we sent a Loom video of our design and got to meet with the product designers of Partiful as well to show what we produced based on the feedback and multiple iterations that we thought of. 
                The following Loom is a synopsis of the information we provided to the designers during our meeting with them.
            
                <div style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
                    <iframe
                    src="https://www.loom.com/embed/048eeedfe7a749bda9f95fb96daf6d71?sid=c842611d-594e-4643-ab60-2311e6a7c8f8"
                    frameBorder="0"
                    allowFullScreen
                    title="Loom Video - HiFi"
                    style={{ width: '570px', height: '450px' }}
                    />
                </div>

                The feedback we received from the Partiful team was very positive. They liked the design we created and thought it was a significant improvement over their current homepage. They also provided us with some suggestions for further improvement, which we will incorporate into our final design.
                <br></br>
                <br></br>
                Here are some of the key points from the feedback we received:
                <ul>
                    <li>They liked the Apple Wallet style of viewing the events.</li>
                    <li>All of the points of feedback and criteria to hit were answered in the Hi-Fi.</li>
                    <li>Interactions should be generalized where a swiping motion should signify only one of reorganization or stating "Going"</li>
                    <li>The Apple Wallet should also have an interaction to open up to see all the events at once instead of it being stacked which will help accesibility.</li>
                    <li>In the trends tab, the content should be geared more towards getting inspiration to help hosts.</li>
                    <li>In the friends tab, more of an activity page seeing people going to parties isntead of just seeing what people there are</li>
                    <li>They loved the polaroid picture UI in the friends tab as well as the highlights section.</li>
                </ul>
                </p>
                <p>All the feedback was really helpful in identifying which direction to take the design and help thorough out the next steps in making this a fully thought out design.</p>
            </section>
            <section className="assignment-part">
                <h2>Personal Contributions</h2>
                <ul>
                    <li>Designing components such as the events cards and friend avatars, as well as prototyping several screens.</li>
                    <li>Creating the visual style guide consisting of our assets, colors, and fonts while ensuring consistency with Partiful's branding.</li>
                    <li>Facilitating collaboration between designers on our team and Partiful partners.</li>
                </ul>
            </section>

            <section className="assignment-part">
                <h2>Conclusions</h2>
                <p>
                Redesigning the Partiful homepage was a challenging yet rewarding experience. We learned the importance of iterative design and how it can help us create a better product. We also learned how to work with a client and incorporate their feedback into our designs. Overall, we are proud of the final design we created and hope that it will help Partiful attract more users and improve their platform.
                <br></br>
                <br></br>
                Some things we could consider if we continued to process in the future would 
                be creating the "Trends" page to be more geared towards helping hosts plan 
                events. This could look like creating some kind of Tinder-like 
                swiping feature for users to swipe through and "like" themes, food options, and 
                venues for events. 
                <br></br>
                <br></br>
                We want to give <b>many thanks</b> to the Partiful team for giving us the opportunity to work with them and for providing us with valuable feedback throughout the design process.
                </p>
            </section>
            </div>
            </div>
        </div>
    );
    }

    export default Partiful;

import React from 'react';
import './advertising.css';
import logo from '../images/mainlogo.png'
import one from '../images/img1.png';
import two from '../images/img2.png';
import three from '../images/img3.png';
import four from '../images/img4.png';
import five from '../images/img5.png';
import six from '../images/img6.jpeg';
import seven from '../images/img7.jpeg';
import eignt from '../images/img8.png';
import nine from '../images/img19.jpg';
import ten from '../images/img10.jpg';
import eleven from '../images/img11.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faPersonWalkingLuggage, faPeopleArrows, faHandHoldingDollar, faPeopleGroup, faEnvelopeOpenText, faChalkboardUser, faComments, faPeopleRoof, faRankingStar, faPersonMilitaryToPerson, faMoneyCheckDollar, faPersonDressBurst, faPersonChalkboard, faSquareCheck } from '@fortawesome/free-solid-svg-icons';


function Advertising() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <img src={logo} id="img1" alt="Skillmove Logo" />
          <p id="span"> <FontAwesomeIcon icon={faPhone} /> +91 9701460429</p>
          <button id="btn1">Talk for consulting</button>
        </div>
      </nav>

      <div className="card mb-3" id='card2'>
        <div className="row g-0">
          <div className="col-md-4" id='id1'>
            <h2 id='h5'>Kickstart your career as an<br/><span id='red'>Abinitio developer</span></h2>
            <h5 id='h5'><FontAwesomeIcon icon={faPersonWalkingLuggage} /> Placement Assurance</h5>
            <h5 id='h5'><FontAwesomeIcon icon={faPeopleArrows} /> Top MNC Hiring Partners</h5>
            <h5 id='h5'><FontAwesomeIcon icon={faHandHoldingDollar} /> Excel salary 8 LPA to 25 LPA</h5>
            <h5 id='h5'>In Collaboration with:</h5>
            <img src={one} alt="Partner 1" id='collaboration'/>
            <img src={two} alt="Partner 2" id='collaboration'/>
            
            
          </div>
          <div className="col-md-8" >
            <div className="card-body" >
              <form action="#" method="post" id='formdiv'>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone:</label>
                  <input type="tel" id="phone" name="phone" required />
                </div>
                <div className="form-group">
                  <label htmlFor="education">Education Qualification:</label>
                  <input type="text" id="education" name="education" required />
                </div>
                <div className="form-group">
                  <label htmlFor="experience">Experience:</label>
                  <input type="text" id="experience" name="experience" required />
                </div>
                <div className="form-group">
                  <label htmlFor="skillset">Skillset:</label>
                  <textarea id="skillset" name="skillset" rows="2" required></textarea>
                </div>
                <div className="form-group">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 id='h2'>Hiring Partners</h2>
        <div>
          <img src={one} alt="Partner 1" />
          <img src={two} alt="Partner 2" />
          <img src={three} alt="Partner 3" />
          <img src={four} alt="Partner 4" />
          <img src={five} alt="Partner 5" />
        </div>
      </div>

      <div id='parent'>
        <h2 id='h2'>Discover Your <span id='red'>Dream Job</span> Pathway through <br/> Our Course</h2>
        
          <div className="col-sm-3" >
            <div className="card" id='box'>
              <div className="card-body">
                <h5 id='h5'> Top MNC Hiring partners</h5>
              </div>
            </div>
          </div> 
          <div className="col-sm-3">
            <div className="card" id='box'>
              <div className="card-body">
                <h5 id='h5'>1:1 Doubt Clarification</h5>
              </div>
            </div>
          </div> 
          <div className="col-sm-3">
            <div className="card" id='box'>
              <div className="card-body">
                <h5 id='h5'>Team Based Live Project- Real Case Scenario</h5>
              </div>
            </div>
          </div>
          {/* <div className="col-sm-3">
            <div className="card" id='box'>
              <div className="card-body">
                <h5 id='h5'> Intensive Interview Preparation</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card" id='box'>
              <div className="card-body">
                <h5 id='h5'> 2000+ Students Placed</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card" id='box'>
              <div className="card-body">
                <h5 id='h5'>₹42 LPA Max CTC</h5>
              </div>
            </div>
          </div> */}
        
        {/* <button id='btn'>Enroll Now</button> */}
        </div>
        <div id='parent'>
        <div className="col-sm-3">
            <div className="card" id='box'>
              <div className="card-body">
                <h5 id='h5'> Intensive Interview Preparation</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card" id='box'>
              <div className="card-body">
                <h5 id='h5'> 2000+ Students Placed</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card" id='box'>
              <div className="card-body">
                <h5 id='h5'>₹42 LPA Max CTC</h5>
              </div>
            </div>
          </div>
          
      </div>
      <button id='button'>Enroll Now</button>


      <div className="card mb-3" id='card2'>
        <div className="row g-0">
          <div>
            <h2 id='h2'>Why Choose SkillMove’s <span id='red'>Abinitio Development </span> Course?</h2>
          </div>
          <div className="col-md-6" id='id1'>
            <br/>
            <br/>
            <p><FontAwesomeIcon icon={faPeopleGroup} /> Designed for Working Professionals & Graduates</p>
            <p><FontAwesomeIcon icon={faEnvelopeOpenText} /> Build a Portfolio with 5+ Projects</p>
            <p><FontAwesomeIcon icon={faChalkboardUser} /> Live Online Classes</p>
            <p><FontAwesomeIcon icon={faComments} /> Ask-me-Anything Sessions</p>
            <p><FontAwesomeIcon icon={faPeopleRoof} /> Selective Batch size of 10</p>
            <p><FontAwesomeIcon icon={faMoneyCheckDollar} /> Flexible EMI options</p>
          </div>
          <div className="col-md" id='card2'>
            <div className="card-body" id='id1'>
              <p><FontAwesomeIcon icon={faRankingStar} /> Personalized Feedback on Assignments.</p>
              <p><FontAwesomeIcon icon={faPersonMilitaryToPerson} /> Instant Doubt clearing sessions with Mentors</p>
              
              <p><FontAwesomeIcon icon={faPersonDressBurst} /> Value-added sessions on Interview Cracking</p>
              <p><FontAwesomeIcon icon={faPersonChalkboard} /> Industry Expert Mentorship</p>
            </div>
          </div>
        </div>
        <button id='button'>Enroll Now</button>
      </div>

      <div>
        <h2 id='h2'>What is <span id='red'>Abinitio?</span></h2>
        <p id='para'> A versatile Business Intelligence Data processing software offering low-code <br/> app development and data warehouse management solutions.</p>
        <p id='para'>Secure a top career as an Abinitio developer: With guaranteed placement, <br/> meeting the rising global demand for data-driven frameworks.</p>
        <p id='para'> Join the ranks of professionals harnessing Abinitio's capabilities to excel in the <br/> dynamic field of data management and analytics.</p>
        <img src={nine} id='img8'></img>
        
      </div>
      

      <div >
      <h5 id='h5'>Who can take this course</h5>
        <div id='para'>
        
        <p ><FontAwesomeIcon icon={faSquareCheck} /> Freshers who want to build career in ETL, Datawarehouse</p>
        <p ><FontAwesomeIcon icon={faSquareCheck} /> People who want to switch from Non-IT to IT domain</p>
        <p ><FontAwesomeIcon icon={faSquareCheck} /> People who want to switch from service-based companies to product-based companies</p>
        <p ><FontAwesomeIcon icon={faSquareCheck} /> Datawarehouse professionals who want to learn a new ETL tool and upgrade their knowledge</p>
      </div>
      </div>

   <div>
      <h5 id='h5'>Skills and Tolls</h5>
      <div id='toolsimg'>
      <img src={six}></img>
    <img src={seven}></img>
      </div>
   </div >
   
   <div>
    <h5 id='h5'>Real Feedback, Real Results</h5>

    <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
    <img src={six}></img>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
    <img src={six}></img>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={seven}></img>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      
    </div>
  </div>
</div>
   </div>
   <div>
    <h5 id='h5'>Learning <span id='red'>Methodology</span> Mile stones</h5>
   <img src={eignt} id='img8'></img>
   <button id='button'>Enroll Now</button>

   
   </div>

   <div>
    <h5 id='h5'>
    What you will <span id='red'>learn</span>
    </h5>
    <div id='para' >
    
    <div id='lern'>
    <p ><FontAwesomeIcon icon={faSquareCheck} /> Data warehouse fundamentals</p>
      <p ><FontAwesomeIcon icon={faSquareCheck} /> Unix+ Abinitio architecture</p>
      <p ><FontAwesomeIcon icon={faSquareCheck} /> GDE overview</p>
      <p ><FontAwesomeIcon icon={faSquareCheck} /> Different source system and record</p>
      <p ><FontAwesomeIcon icon={faSquareCheck} /> Rollback and recovery mechanism</p>
      <p ><FontAwesomeIcon icon={faSquareCheck} /> Useful Abinitio commands</p>
      <p ><FontAwesomeIcon icon={faSquareCheck} /> Working with vectors</p>
      <p><FontAwesomeIcon icon={faSquareCheck} /> SCD-2 Structure + SQL</p>
      <p ><FontAwesomeIcon icon={faSquareCheck} /> Abinitio transformation component</p>
      <p ><FontAwesomeIcon icon={faSquareCheck} /> Parallelism in Abinitio</p>
      <p ><FontAwesomeIcon icon={faSquareCheck} /> Generic graphs, vectors, EME, SCD CDC, PSET</p>
      <p ><FontAwesomeIcon icon={faSquareCheck} /> Performance Tuning</p>
      <p ><FontAwesomeIcon icon={faSquareCheck} /> Introduction to EME</p>
      <p><FontAwesomeIcon icon={faSquareCheck} /> Making and Breaking of vector</p>
      <p ><FontAwesomeIcon icon={faSquareCheck} /> CDC structure + Data manipulation language</p>
      
    </div>
    
    </div>
    <button id='button3'> DOWNLOAD CURRICULUM</button>
   </div>
   <div id='faqs'>
    <h5 id='h5'>FAQs</h5>
   <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      What is SkillMove’s Abinitio Course?
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      How flexible are the timings of the SkillMove Abinitio Course?
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      Are Abinitio Developer paid well?
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      Will I get Certificate after Completing Abinitio Course?  
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
   </div>
    </div>
  );
}

export default Advertising;

import './home.css'

function Home(){
    return(
        <>
        <div className='homePage'>  
          <br></br>
          <br></br>
        <div className = 'namebox'>
          <h1><span id="firstName">KATHERINE</span> <span id="lastName">BROWN</span></h1>
          <h2 id = 'description'>Research  |  Innovation  |  Entrepreneurship </h2>
        </div>

        <div id = 'transition'></div>


        <section id="about" className="about-page">
        <div className="image-container">
        <h1 id="aboutme">About Me</h1>

            <img src="public/uploads/backgradient.png" alt="Upper Right Image" className="image back" />
            <img src="public/uploads/headshot.jpg" alt="Middle Image" className="image middle" />
            <img src="public/uploads/frontgradient.png" alt="Bottom Left Image" className="image front" />
        
          <nav class="about-nav">
          <ul>
          <li><a href="#interests-title">Interests</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#involvements">Involvements</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#background">Background</a></li>

          </ul>
          </nav>
        <h2 id = "interests-title">Interests</h2>
        </div>
        </section>
      
      
      <div class="about-sections">
    
      <section id="interests">
        <h2>Interests</h2>
        <p id = "temp" >This is the interests section. Add your content here.</p>
      </section>

      <section id="education">
        <h2>Education</h2>

        <div className = "columbia-section"> 
          <div className = "college">
          <h3 id = "school"> Columbia University </h3>
          <h5 id = "subschool"> The Fu Foundational School of Engineering and Applied Science </h5>
          <h5 id = "subschool"> SEAS Class of 2028 </h5>

          
          <h4 id = "ed"> Major </h4>
          <h5> Biomedical Engineering, B.S.</h5>

          <h4 id = "ed"> Concentration </h4>
          <h5> Neural Engineering </h5>

          <h4 id = "ed"> Minor </h4>
          <h5> Entrepreneurship & Innovation </h5>
          </div>

          <div className = "photo">
          <img src="public/uploads/campus.jpg" alt="Low Library at Columbia Univeristy" />
          <h5 id = "nyc"> New York City, New York </h5>
          </div>
        </div>

        <div id = "course-break"> <h2 id = "coursework-head"> University Coursework </h2> </div>

        <div className = "coursework">
        <div className = "term" id = "term1">
          <h4> Fall Semester 2024 </h4>
          <h5> term 1, 20 credits completed </h5>
          
          <p> General Chemistry I</p>
          <p> Introduction to Mechanics & Thermodynamics</p>
          <p> Multivariable Calculus for Engineers and Applied Scientists</p>
          <p> Principles of Economics </p>
          <p> University Writing</p>
        
        </div>
        <div className = "term" id = "term2">
          <h4> Spring Semester 2025 </h4>
          <h5> term 2, 21 credits in progress </h5>

          <p> General Chemistry II</p>
          <p> Introduction to Electricity, Magnetism, and Optics </p>
          <p> Introduction to Applied Mathematics </p>
          <p> Introduction to Computer Science -- Python </p>
          <p> The Art of Engineering </p>
          <p> Chemistry Laboratory </p>
        
        </div>

        <div className = "term" id = "term3">
          <h4> Fall Semester 2025 </h4>
          <h5> term 3, to be determined </h5>

          <p> Biology I </p>
          <p> Introduction to Quantum and Mechanical Waves </p>
          <p> Introduction to Electrical Engineering </p>
          <p> Music Humanities </p>
          <p> Neuroscience Elective Course </p>
        
        </div>

        </div>

      </section>

      <section id="involvements">
        <h2>Involvements</h2>
        <h3 id = "clubs-onc"> On Campus </h3>
        
        <div className = "involve-section"> 
            
            <div className = "club" id = "bmes">
            <h4> BMES</h4>
            <p> Columbia's Biomedical Engineering Society chapter </p>
            <a href="https://bmesatcolumbia.wixsite.com/columbia-bmes" target="_blank" rel="noopener noreferrer" id = "in-link">Columbia BMES Page</a>
            </div>

            <div className = "club" id = "cwbs">
            <h4> CWBS</h4>
            <p> Columbia Women's Business Society  </p>
            <a href="https://www.columbiawomensbusinesssociety.org/" target="_blank" rel="noopener noreferrer" id = "in-link">CWBS Page</a>
            </div>

            <div className = "club" id = "jadenet">
            <h4> JADE </h4>
            <p> Jumpstarting Aspiring Developes and Entrepreneurs  </p>
            <a href = "https://www.cc-seas.columbia.edu/jade" target="_blank" rel= "noopener noreferrer" id = "jade-link"> JADE Program Page</a>
            </div>

        </div>

        <h3 id = "clubs-offc"> Off Campus </h3>
        
        <div className = "involve-section2"> 
            <div className = "club" id = "aauw">
            
            <a href="https://ore-ca.aauw.net/" target="_blank" rel="noopener noreferrer" id = "aauw-link">AAUW Home Chapter</a>

            </div>
            <div className = "club" id = "4h">

            <a href = "https://4halameda.ucanr.edu/4-h_club_contacts/" target="_blank" rel="noopener noreferrer" id = "4h-link">Alameda Coounty 4-H Page</a>
            </div>
            <div className = "club" id = "blank">

              <p> blank section </p>
            </div>
        </div>

      </section>

      <section id="skills">
        <h2>Skills</h2>
        <div className = "skills-section"> 
        

          <div className = "skills-text">
          
          <h4 id = "h4a"> Computational  </h4>
          <h5> Proficient: Java, HTML  |  Intermediate: Python, CSS </h5>
          <h5> Microsoft Office, Notion, Canva, Figma-familar</h5>
          <h5> Web Development: (Vite + React), WIX Studio, e-commerce </h5>

          <h4 > Laboratory  </h4>
          <h5> cell culture, staining, separation, identification </h5>
          <h5> CRISPR Cas-9 gene kock-in/out, gel electrophoresis </h5>
          <h5> project organization, lab log documentation, presentation </h5>

          <h4 > Speech & Writing  </h4>
          <h5> technical writing, op-ed pieces, open source research </h5>
          <h5> prepared public speaking, cooperative marketing, impromptu </h5>

          <h4 > Business & Entrepreneurial</h4>
          <h5> project management, marketing strategy developmment, industry research </h5>
          <h5> record-keeping, financial accounting, budget-constraint development </h5>

          <h4 > Research  </h4>
          <h5> academic research, medical journalism, research synthesis</h5>

          </div>

          <div className = "skills-photo">
        
          <img src="public/uploads/staining.jpg" alt="gram staining 3 samples" />
          <h5 id = "nyc"> gram-stained slide, ap biology lab </h5>
         
          <img src="public/uploads/gradspeech.jpg" alt="graduation speech" />
          <h5 id = "nyc"> Valedictory Address, OHS Class of 2024 </h5>
          </div>
          

        </div>
      </section>

    <section id="background">
        <h2 id = "background-header"> Background</h2>
    <div class="content-left">
      <div class="text">
        <h2 id = "hdigh"> How did I get here?</h2>
        <p id = "bgtext">I was raised in California's Central Valley, in a rural town along Highway 120 - the route connecting the
           bustling innovation of San Francisco to the natural wonders of Yosemite. This unique location shaped my perspective, as I learned
            to be resourceful by engaging in agriculture and seeking opportunities outside of my periphery, driven by ambitions that would 
            eventually lead me far beyond its familiar boundaries.</p>
      </div>
      <div class="image">
        <img src="public/uploads/craneridge.jpg" alt="Crane Ridge & the Holm Ranch" />
        <p>Photo from the top of the ranch, overlooking both the Central Valley and the Bay on a clear day.</p>
      </div>
    </div>

    <div class="content-right">
      <div class="text">
        <p id = "bgtext">Following the highway west and over the hills of the East Bay leads to the town of Livermore, where my 
          family's roots run deep. As the sixth generation of the Holm family cattle ranch nestled in the hills of South Livermore, I 
          inherited not just a connection to the land, but also a legacy of resilience, innovation, and community. Inspired by these family 
          values and agricultural heritage, I established my own livestock operation at home, growing it from a small 4-H project into a 
          successful entrepreneurial venture. The sweeping landscapes of the Altamont Pass serve as a bridge between these two worlds that 
          have shaped me - the practical wisdom of agricultural life and the drive for scientific advancement.</p>
      </div>
      <div class="image">
        <img src="public/uploads/banner.jpg" alt="Alameda County Fair Champion Backdrop Photo, Kate Brown" />
        <p>Alameda County Fair 2024, where I exhibited the champion steer & my cousin and I exhibited the champion 4-H lambs.</p>
      </div>
    </div>

    <div class="content-left">
      <div class="text">
        <p id = "bgtext"> I discovered another passion in the Bay Area — competitive gymnastics, a sport I dedicated over 20 
          hours weekly to perfecting routines and building strength, ultimately rising to become a nationally ranked athlete. The rigorous 
          training shaped my character, instilling an unwavering work ethic and meticulous attention to detail. However, the sport's
           demanding nature slowly took it’s toll in then unexplainable ways, teaching me perhaps the most valuable lesson of all - the 
           complex relationship between mind and body, as I witnessed firsthand how the nervous system's remarkable intricacy governs the 
           human experience. </p>
        
      </div>
      <div class="image">
        <img src="public/uploads/gympic.jpg" alt="Gymnastics Photo" />
        <p>An early-career bar routine</p>
      </div>
    </div>
    <p id = "transition-blurb"> This realization transformed my existing love for science into an obsession for all applications of neuroscience, 
        ultimately driving my pursuit of biomedical engineering to develop innovative diagnostic tools and global solutions to neurological
         conditions.</p>

  </section>


      
      </div>
      </div>
                 
        </>
    )
}
export default Home
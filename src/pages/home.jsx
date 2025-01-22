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


        <div id="about" className="about-page">
        <div className="image-container">
        <h1 id="aboutme">About Me</h1>

            <img src="public/uploads/backgradient.png" alt="Upper Right Image" className="image back" />
            <img src="public/uploads/headshot.jpg" alt="Middle Image" className="image middle" />
            <img src="public/uploads/frontgradient.png" alt="Bottom Left Image" className="image front" />
        
        <nav class="about-nav">
        <ul>
          <li><a href="#background">Background</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#involvements">Involvements</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#interests">Interests</a></li>

        </ul>
        </nav>
        <h2 id = "background">Background</h2>

      <div class="about-sections">

    <section id="backgroundsec">
    <div class="content-left">
      <div class="text">
        <p id = "bgtext">I grew up in California's Central Valley, in a rural town along Highway 120 - the scenic route connecting the
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
        <p id = "bgtext">Following the highway west leads to the rolling hills of the East Bay area and the town of Livermore, where my 
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
        <p id = "bgtext">It was also in Livermore that I discovered my true passion —competitive gymnastics, a sport I dedicated over 20 
          hours weekly to perfecting routines and building strength, ultimately rising to become a nationally ranked athlete. The rigorous 
          training shaped my character, instilling an unwavering work ethic and meticulous attention to detail. However, the sport's
           demanding nature slowly took it’s toll in then unexplainable ways, teaching me perhaps the most valuable lesson of all - the 
           complex relationship between mind and body, as I witnessed firsthand how the nervous system's remarkable intricacy governs the 
           human experience. </p>
        
      </div>
      <div class="image">
        <img src="public/uploads/XXXXX" alt="Gymnastics Photo" />
        <p>Description</p>
      </div>
    </div>
    <p id = "transition-blurb"> This realization transformed my existing love for science into an obsession for all applications of neuroscience, 
        ultimately driving my pursuit of biomedical engineering to develop innovative diagnostic tools and global solutions to neurological
         conditions.</p>

  </section>

      <section id="education">
        <h2>Education</h2>

        <div className = "columbia-section"> 
          <div className = "college">
          <h3 id = "school"> Columbia University </h3>
          <h5 id = "subschool"> The Fu Foundational School of Engineering and Applied Science </h5>
          <h5 id = "subschool"> SEAS Class of 2028 </h5>

          
          <h4 id = "ed"> Major </h4>
          <h5> Biomedical Engineering B.S.</h5>

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
        <p id = "temp" >This is the skills section. Add your content here.</p>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <p id = "temp" >This is the involvements section. Add your content here.</p>
      </section>

      <section id="interests">
        <h2>Interests</h2>
        <p id = "temp" >This is the interests section. Add your content here.</p>
      </section>
      </div>
      </div>
        </div>
        </div>
         
        </>
    )
}
export default Home
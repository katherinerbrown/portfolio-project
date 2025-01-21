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


        <div id="about" className="about-section">
        <h1 id="aboutme">About Me</h1>
        <p>This is the About Me section content...</p>

        <div className="image-container">
            <img src="/pages/backgradient.png" alt="Upper Right Image" className="image back" />
            <img src="/uploads/frontgradient.png" alt="Middle Image" className="image middle" />
            <img src="/uploads/headshot.png" alt="Bottom Left Image" className="image front" />
        </div>
        </div>
        </div> 
        </>
    )
}
export default Home
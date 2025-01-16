import './home.css'
import { FaBrain } from 'react-icons/fa';

function Home(){
    return(
        <>
        <div className="homePage">
        <div className="homePage-container">
          <h1>Katherine Brown</h1>
          <h2>Neural Engineering Student</h2>
          <h5>Columbia University, New York</h5>
          <button className="cta-button">Explore My Work</button>
        </div>
        </div>
        </>
    )
}
export default Home
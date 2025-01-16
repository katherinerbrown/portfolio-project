import './navbar.css'
import { FaBrain } from 'react-icons/fa'; // Import the brain icon

function NavigationBar(){
    return(
           <>
	           <nav>
			   <h1 id="name">
        			KRB <FaBrain className="brain-icon" /> {/* Add brain icon next to name */}
      			</h1>
					     <div>
					          <ul id = "navbar">
					               <li><a href="#/Home">Home</a> </li>
					               <li><a href="#/Projects">Projects</a></li>
								   <li><a href="#/Honors">Honors</a></li>
					          </ul>
					     </div>
					    </nav>
           </>
    )
}

export default NavigationBar
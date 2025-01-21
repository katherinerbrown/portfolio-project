import './navbar.css'
import { Link } from 'react-router-dom';

function NavigationBar(){
    return(
           <>
	           <nav>
			   <h1 id="name">Katherine Brown </h1>
					     <div>
					          <ul id = "navbar">
							  	<li><Link to="/">Home</Link></li>
								<li><Link to="#about">About</Link></li>
								<li><Link to="/experience">Experience</Link></li>
								<li><Link to="/achievements">Achievements</Link></li>
								<li><Link to="/connect">Connect</Link></li>
					          </ul>
					     </div>
					    </nav>
           </>
    )
}

export default NavigationBar

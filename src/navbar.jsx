import './navbar.css'

function NavigationBar(){
    return(
           <>
	           <nav>
			   <h1 id="name">Katherine Brown </h1>
					     <div>
					          <ul id = "navbar">
					               <li><a href="#/Home">Home</a> </li>
								   <li><a href="#/About">About</a></li>
					               <li><a href="#/Experience">Experience</a></li>
								   <li><a href="#/Achievements">Achievements</a></li>
								   <li><a href="#/Connect">Connect</a></li>
					          </ul>
					     </div>
					    </nav>
           </>
    )
}

export default NavigationBar
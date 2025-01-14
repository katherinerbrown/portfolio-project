import './navbar.css'

function NavigationBar(){
    return(
           <>
	           <nav>
					<h1 id= "name">
				         KRB
			        </h1>
					     <div>
					          <ul id = "navbar">
					               <li><a href="#/Home">Home</a> </li>
					               <li><a href="#/Projects">Projects</a></li>
					          </ul>
					     </div>
					    </nav>
           </>
    )
}

export default NavigationBar
import React from "react"
import { Link} from "react-router-dom"

function NavBar ({  setUser }) {
	function handleLogoutClick() {
		fetch("/logout", {method: "DELETE"}).then((r)=> {
			if (r.ok) {
				setUser(null);
			}
		})
	}
	return(
	<header>
		
		<Link to ="/" > Coffee Crave </Link>
		
		<nav>
			<button className="button" onClick={handleLogoutClick}>
				Logout
			</button>
		</nav>
		
		
	</header>
	)
}

export default NavBar 
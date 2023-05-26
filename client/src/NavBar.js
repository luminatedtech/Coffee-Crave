import React from "react"
import { Link,BrowserRouter } from "react-router-dom"

function NavBar ({ user, setUser }) {
	function handleLogoutClick() {
		fetch("/logout", {method: "DELETE"}).then((r)=> {
			if (r.ok) {
				setUser(null);
			}
		})
	}
	return(
	<header>
		<BrowserRouter>
		<Link to ="/" > Coffee Crave</Link>
		
		<nav>
			<button onClick={handleLogoutClick}>
				Logout
			</button>
		</nav>
		</BrowserRouter>
		
	</header>
	)
}

export default NavBar 
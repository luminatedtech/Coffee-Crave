import React from "react"
import { NavLink,BrowserRouter } from "react-router-dom"

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
		<NavLink to ="/"> Coffee Crave</NavLink>
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
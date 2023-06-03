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
    <div className="logoContainer">
      <Link to ="/" >
        <img alt="coffeephoto" className="navBarLogo" src="coffeelogo.png"/>
        <p>Coffee Crave</p>
      </Link>
    </div>
		<nav>
			<button className="button" onClick={handleLogoutClick}>
				Logout
			</button>
		</nav>
		
		
	</header>
	)
}

export default NavBar 
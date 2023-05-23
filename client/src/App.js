import React, { useEffect, useState } from "react";
import Login from "./Login";
import ShopList from "./ShopList";
import NavBar from "./NavBar"; 
import { BrowserRouter,Switch, Route } from "react-router-dom"
import Shop from "./Shop";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/me').then((r)=> {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, [])
  if (!user) return <Login onLogin={setUser} />
  return (
    
    <div>
      <NavBar user={user} setUser={setUser}/>
      <BrowserRouter>
      <Switch>
        <Route path="/">
          <ShopList/>
        </Route>
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

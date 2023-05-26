import React, { useEffect, useState } from "react";
import Login from "./Login";
import ShopList from "./ShopList";
import NavBar from "./NavBar"; 
import {Routes, Route, BrowserRouter} from "react-router-dom"
import Shop from "./Shop";
import ReviewForm from "./ReviewForm";

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
      <Routes>
        <Route path="/" element={<ShopList/>}/>
        <Route path="/newReview/:shopId" element={<ReviewForm user={user}/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;

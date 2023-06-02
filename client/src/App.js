import React, { useEffect, useState } from "react";
import Login from "./Login";
import ShopList from "./ShopList";
import NavBar from "./NavBar"; 
import {Routes, Route, BrowserRouter} from "react-router-dom"
import ReviewList from "./ReviewList";
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
      
    <BrowserRouter> 
    <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path="/" element={<ShopList/>}/>
        <Route path="/newReview/:shopId" element={<ReviewForm user={user}/>}/>
        <Route path="/shops/:shopId/reviews" element={<ReviewList/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;

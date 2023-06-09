import React, { useEffect, useState,createContext} from "react";
import Login from "./Login";
import ShopList from "./ShopList";
import NavBar from "./NavBar"; 
import ShopForm from "./ShopForm";
import {Routes, Route, BrowserRouter} from "react-router-dom"
import ReviewForm from "./ReviewForm";
export const LoginContext = createContext(null)
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/me').then((r)=> {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, [])
  if (!user) return (
    <LoginContext.Provider value={setUser}>
      <Login/>
    </LoginContext.Provider>
  )
  return (
    
    <div className="App">
      
    <BrowserRouter> 
    <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path="/ShopForm" element={<ShopForm/>}/>
        <Route path="/" element={<ShopList/>}/>
        <Route path="/newReview/:shopId" element={<ReviewForm user={user}/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;

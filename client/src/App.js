import React, { useEffect, useState } from "react";
import Login from "./Login";
import ShopList from "./ShopList";

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
    <ShopList /> 
  );
}

export default App;

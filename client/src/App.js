import React, { useEffect, useState } from "react";
import Login from "./Login";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Login onLogin = {setUser} /> 
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Login onLogin = {setUser} /> 
  );
}

export default App;

import React, { useEffect, useState } from "react";
import Login from "./Login";
import ShopList from "./ShopList";

function App() {
  const [user, setUser] = useState(null);

  return (
    <ShopList /> 
  );
}

export default App;

import React,{ useState, useEffect} from "react";


const ShopContext = React.createContext();


function ShopProvider({ children }) {
    const [shops, setShops] = useState([])

    useEffect(() => {
      fetch("/shops")
      .then((r)=> r.json())
      .then((shops)=> setShops(shops))
  }, [])
  return <ShopContext.Provider value={{shops,setShops}}>{children}</ShopContext.Provider>;
}

export { ShopContext, ShopProvider };
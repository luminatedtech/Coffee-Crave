import React, { useState,useEffect } from "react";
import Shop from "./Shop"

function ShopList () {

  const [shops, setShops] = useState([])

  useEffect(() => {
    fetch("/shops")
    .then((r)=> r.json())
    .then((shops)=> setShops(shops))
}, [])

  console.log(shops)

return (
    <div className="shopList"> {shops.map((shop,i)=>(
        <Shop key={shop.id} id={shop.id} image_url={shop.image_url} reviews={shop.reviews} address={shop.address} hours={shop.hours} name={shop.name} index={i}/>
    ))}

    </div>
  )
}

export default ShopList

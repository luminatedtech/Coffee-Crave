import React, { useState,useEffect } from "react";
import Shop from "./Shop"
function ShopList () {
const [shops, setShops] = useState([])

useEffect(() => {
    fetch("/shops")
    .then((r)=> r.json())
    .then((shops)=> setShops(shops))
}, [])
return (
    <div id="shopList"> {shops.map((shop)=>(
        <Shop key={shop.id} name={shop.name} image_url={shop.image_url} reviews={shop.reviews} address={shop.address} />
    ))}
    </div>
)
}


export default ShopList
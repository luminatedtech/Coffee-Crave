import React, { useContext } from "react";
import Shop from "./Shop"
import { ShopContext } from "./context/ShopContext";
function ShopList () {

const {shops} = useContext(ShopContext)
console.log(shops)
return (
    <div className="shopList"> {shops.map((shop,i)=>(
        <Shop key={shop.id} id={shop.id} image_url={shop.image_url} shop={shop} address={shop.address} hours={shop.hours} name={shop.name} reviews={shop.reviews} index={i}/>
    ))}

    </div>
  )
}

export default ShopList

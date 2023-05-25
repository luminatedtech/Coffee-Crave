import React from "react";

function Shop ({name,shop,address,image_url, index}) {
  return (
    <div className="shop">
      <img alt="shop" src={image_url}/>
      <div className="shopInfo">
        <h1>{`${index + 1}. ${name}`}</h1>
        <p>{address}</p>
      </div>
    </div>
  )
}

export default Shop

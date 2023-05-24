import React from "react";
function Shop ({name,shop,address,image_url}) {
    console.log()
    return (
        <div id="shop">
            <div> {name} </div>
            <div> {address} </div>
            <div><img src={image_url}/> </div>
            <div>  </div>
        </div>
    )
}

export default Shop
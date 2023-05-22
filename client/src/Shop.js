import React from "react";
function Shop ({name,reviews,address,image_url}) {
    return (
        <div id="shop">
            <div> {name} </div>
            <div> {address} </div>
            <div><img src={image_url}/> </div>
            
        </div>
    )
}

export default Shop
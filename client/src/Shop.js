import React from "react";
function Shop ({name,reviews,address,image_url}) {
    return (
        <div id="shop">
            <h2> {name} </h2>
            <h3> {address} </h3>
            <img src={image_url}/>
        </div>
    )
}

export default Shop
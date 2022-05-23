import React from "react";

const Display = () => {
    return(
        <div className="functionalProps">
            <Welcome />
        </div>
    )
}
const Welcome = () => {
    const greetings = 'Good Morning All Welcome!!!'
    return( 
        <div className="name">
            <h2>{greetings}</h2>
        </div>
    )
}
export default Display;

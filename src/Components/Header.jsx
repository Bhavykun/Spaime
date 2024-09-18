import React from "react";

const Header =()=>{

    const divStyle = {
        color: 'white',
        fontSize: '20px',
        padding : '20px',
    };

    return(
        <div style={divStyle}>
            <h1>Spaime</h1>
            <p>Check the Space and time complexity of any code.</p>
        </div>
    )
}

export default Header;
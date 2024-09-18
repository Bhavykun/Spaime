import React from "react";
import { useState } from "react";
import Result from "./Result";

const Textbox =()=>{
    const [text,setText]=useState("");
    const divStyle = {
        color: 'white',
        fontSize: '20px',
        padding : '20px',
    };

    const textbox = {
        height: "600px",
        width: "97%",
        maxWidth: "97%",
        padding: "20px 20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        fontSize: "16px",
        fontFamily: "'JetBrains Mono', monospace",
        resize: "vertical",
    };
    const handlechange =(event)=>{
        setText(event.target.value);
    }
    console.log(text);

    return(
        <div style={divStyle}>
            <textarea value={text} onChange={handlechange} style={textbox}></textarea>
            <Result data={text}/>
        </div>
    )
}

export default Textbox;
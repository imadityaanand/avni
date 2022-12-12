import React from "react";

function TopButton(props) {
    let className;

    let darkmode = localStorage.getItem("darkmode");
    if(darkmode === "true"){
        className = "top-button dark " + props.class;
    } else {
        className = "top-button " + props.class;
    }

    return (
        <button onClick={props.click} className={className} >
            {props.name}
        </button>
    )
}

export default TopButton;
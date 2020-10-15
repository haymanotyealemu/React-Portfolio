import React from "react";
import "./Warpper.css";

function Wrapper(props) {
    return <main className="wrapper">{props.children}</main>;
}

export default Wrapper;
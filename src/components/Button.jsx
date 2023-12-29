import React from "react";
import style from "../styles/button.module.css";
function Button(attributes) {
    return <button className={style.button} data-action={attributes.label}  {...attributes} >{attributes.label}</button> ;
}

export default Button;
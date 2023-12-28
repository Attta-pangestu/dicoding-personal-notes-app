import React from "react";
import style from "../styles/button.module.css";
function Button({label}) {
    return <button className={style.button} data-action={label}>{label}</button> ;
}

export default Button;
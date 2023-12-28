import React from "react";
import style from "../styles/text-input.module.css";

function Input(attributes) {
    return(
        <React.Fragment>
            {attributes.type === "textarea" ? (
            <textarea 
                {...attributes}
                className={`${style.textarea} ${style.input}`}
            />) : (
            <input
                {...attributes}
                className={style.input}
            />) 
        }
        </React.Fragment>
    );
}


export default Input;
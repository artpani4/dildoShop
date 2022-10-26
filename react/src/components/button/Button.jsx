import React from 'react';
import cl from "./Button.module.css"
const Button = (props) => {
    console.table(cl)
    return (
        <button {...props} className={cl.value + props ? props.className : ""}></button>
    );
};

export default Button;
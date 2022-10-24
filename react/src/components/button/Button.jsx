import React from 'react';
import cl from "./Button.css"
const Button = (props) => {
    return (
        <button {...props} className={cl}></button>
    );
};

export default Button;
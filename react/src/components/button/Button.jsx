import React from "react";
import cl from "./Button.module.css";
const Button = (props) => {
    return <button className={cl.button} {...props}></button>;
};

export default Button;

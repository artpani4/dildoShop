import React from "react";
import cl from "./Button.module.css";
const Button = (props) => {
    const classes = [cl["button"], props.className];
    return <button {...props} className={classes.join(" ")}></button>;
};

export default Button;

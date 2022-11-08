import React from "react";
import cl from "./Button.module.css";
const Button = (props) => {
    // console.log(props);
    const classes = [cl["button"], props.className];
    // console.log(classes.join(" "));
    console.log(classes.join(" "));
    return <button {...props} className={classes.join(" ")}></button>;
};

export default Button;

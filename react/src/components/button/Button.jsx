import React from "react";
import cl from "./Button.module.css";
const Button = (props) => {
    // console.log(props);
    const classes = [cl.button, props.className];
    // console.log(classes.join(" "));
    return <button className={classes.join(" ")} {...props}></button>;
};

export default Button;

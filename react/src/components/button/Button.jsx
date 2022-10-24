import React from 'react';
import cl from "./Button.css"
const Button = ({children,...props}) => {
    return (
        <button className={cl}>{children}</button>
    );
};

export default Button;
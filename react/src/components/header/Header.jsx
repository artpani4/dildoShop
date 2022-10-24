import React from 'react';
import Button from "../button/Button";
import {useTelegram} from "../../hooks/useTelegram";


const Header = () => {
const {onClose, user} = useTelegram()
    return (
        <div className="header">
            <Button onClick={()=>{
                console.log("EBASH!!!!")
                alert("EBASSSSHH")
                onClose()}}>Закрыть </Button>
            <span className="userName">{user?.username}</span>
        </div>
    );
};

export default Header;
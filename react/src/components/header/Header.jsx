import React from 'react';
import Button from "../button/Button";
const tg = window.Telegram.WebApp


const Header = () => {
    const onClose = ()=>{
        tg.close()
    }
    return (
        <div className="header">
            <Button onClick={onClose}>Закрыть </Button>
            <span className="userName">{tg.initDataUnsafe?.user?.username}</span>
        </div>
    );
};

export default Header;
import React from 'react';
import Button from "../button/Button";
const tg = window.Telegram.WebApp


const Header = () => {
    console.log(tg.initDataUnsafe?.user)
    const onClose = ()=>{
        tg.close()
    }
    return (
        <div className="header">
            <Button>Закрыть </Button>
            <span className="userName">{tg.initDataUnsafe?.user?.username}</span>
        </div>
    );
};

export default Header;
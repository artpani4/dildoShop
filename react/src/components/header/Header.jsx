import React from "react";
import Button from "../button/Button";
import { useTelegram } from "../../hooks/useTelegram";
import cl from "./Header.module.css";

const Header = () => {
    const { onClose, user } = useTelegram();
    return (
        <div className={cl.header}>
            <Button onClick={onClose}>Закрыть </Button>
            <span className="userName">{user?.username}</span>
        </div>
    );
};

export default Header;

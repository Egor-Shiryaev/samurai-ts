import React from 'react';
import s from "./Header.module.css"

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtJ0BxAfV74NsYKTtj__zk4fpE0zcIXQ0rXRR-UoZsYWSLf-Pc5_eth1Bl0agDrvPuXRU&usqp=CAU"
                alt=""/>
        </header>
    );
};


export default Header;
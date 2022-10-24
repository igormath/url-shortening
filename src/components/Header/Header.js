import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import HiddenMenu from "../HiddenMenu/HiddenMenu";

import './Header.css'

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleButton = () => {
        setToggleMenu(current => !current);
    };

    useEffect(() => {
    }, [toggleMenu]);

    return (
        <>
            <header>
                <h1 className="header__title">Shortly</h1>
                <nav className="header__menu">
                    <ul className="header__menu__options">
                        <li><p>Features</p></li>
                        <li><p>Pricing</p></li>
                        <li><p>Resources</p></li>
                    </ul>
                    <ul className="header__menu__buttons">
                        <li><button className="btn-login">Login</button></li>
                        <li><button className="btn">Sign Up</button></li>
                    </ul>
                </nav>
                <FaBars className="header__bars" onClick={handleButton} />
            </header>

            <HiddenMenu hideToggle={toggleMenu} />
        </>
    );
};

export default Header;

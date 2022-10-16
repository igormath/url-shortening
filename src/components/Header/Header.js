import { FaBars } from "react-icons/fa";

import './Header.css'

const Header = () => {
    return (
        <header>
            <h1 className="header__title">Shortly</h1>
            <nav className="header__menu">
                <ul className="header__menu__options">
                    <li><a href="">Features</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Resources</a></li>
                </ul>
                <ul className="header__menu__buttons">
                    <li><button className="btn-login">Login</button></li>
                    <li><button className="btn">Sign Up</button></li>
                </ul>
            </nav>
            <FaBars className="header__bars" />
        </header>
    )
}

export default Header;
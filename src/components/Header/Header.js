import { FaBars } from "react-icons/fa";

import './Header.css'

const Header = () => {
    return (
        <header>
            <h1 className="header__title">Shortly</h1>
            <FaBars className="header__bars" />
        </header>
    )
}

export default Header;
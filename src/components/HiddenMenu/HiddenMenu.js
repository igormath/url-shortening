import { useRef } from 'react';
import './HiddenMenu.css';

const HiddenMenu = ({ hideToggle }) => {

    const hiddenRef = useRef();

    if (hideToggle) {
        hiddenRef.current.style.zIndex = "100";
    } else {
        hiddenRef.current.style.zIndex = "-100";
    }

    return (
        <div className="hidden__container" ref={hiddenRef}>
            <nav className="hidden__menu">
                <ul className="hidden__menu__options">
                    <li><p>Features</p></li>
                    <li><p>Pricing</p></li>
                    <li><p>Resources</p></li>
                </ul>
                <ul className="hidden__menu__btn">
                    <li><button className="btn-login">Login</button></li>
                    <li><button className="btn">Sign Up</button></li>
                </ul>
            </nav>
        </div>
    );
};

export default HiddenMenu;

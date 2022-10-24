import Facebook from '../../assets/icon-facebook.svg';
import Twitter from '../../assets/icon-twitter.svg';
import Pinterest from '../../assets/icon-pinterest.svg';
import Instagram from '../../assets/icon-instagram.svg';

import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <h2 className='footer__title'>Shortly</h2>
            <nav className='footer__nav-lists'>
                <ul className='footer__features'>
                    <h4>Features</h4>
                    <li>Link Shortening</li>
                    <li>Branded Links</li>
                    <li>Analytics</li>
                </ul>
                <ul className='footer__resources'>
                    <h4>Resources</h4>
                    <li>Blog</li>
                    <li>Developers</li>
                    <li>Support</li>
                </ul>
                <ul className='footer__company'>
                    <h4>Company</h4>
                    <li>About</li>
                    <li>Out Team</li>
                    <li>Careers</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <ul className='footer__social'>
                <li><a href="https://facebook.com"><img src={Facebook} alt="Facebook logo" /></a></li>
                <li><a href="https://twitter.com"><img src={Twitter} alt="Twitter logo" /></a></li>
                <li><a href="https://pinterest.com"><img src={Pinterest} alt="Pinterest logo" /></a></li>
                <li><a href="https://instagram.com"><img src={Instagram} alt="Instagram logo" /></a></li>
            </ul>
        </footer>
    );
};

export default Footer;

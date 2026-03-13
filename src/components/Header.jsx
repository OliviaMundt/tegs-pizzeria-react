import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className="logo">
                <a href="index.html">
                    <span className="main-title">Tegs pizzeria</span>
                    <span className="slogan">Mmmm...moms....</span>
                </a>
            </div>
            <nav>
                <div className="hamburger" id="hamburger-btn">
                    <i className="fa-solid fa-bars"></i>
                </div>
                <ul id="nav-ul">
                    <li><Link to="/" className="active">HEM</Link></li>
                    <li><Link to="/meny">MENY</Link></li>
                    <li><Link to="/kontakt">KONTAKT</Link></li>

                    <li><Link to="/omoss">OM OSS</Link></li>
                    <li><Link to="/bestall">BESTÄLL HEM</Link></li>
                </ul>
            </nav>
            <div className="social-icons">
                <a href="https://www.tegspizzeria.nu/" aria-label="Instagram">
                    <i className="fa-brands fa-instagram"></i>
                </a>
        
                <a href="https://www.facebook.com/tegspizzeria.nu" aria-label="Facebook">
                    <i className="fa-brands fa-facebook"></i>
                </a>
            </div>
        </header>
        
    );
}

export default Header;
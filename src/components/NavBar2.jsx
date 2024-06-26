    import React from 'react';
    import './NavBar2.css';
    import logo from '../assets/nike.jpg'


    const NavBar2 = () => {
        return (
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt="Nike Logo" />
                </div>
                <ul className="nav-links">
                    <li>MENU</li>
                    <li>LOCATION</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                </ul>
                <button className="login-button">Login</button>
            </nav>
        );
    };

    export default NavBar2;

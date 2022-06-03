import React from 'react';
import Link from 'react-router-dom';

const Nav = () => (
    <nav className="nav">
        <ul className="nav__links">
            <li className="nav__link menu-animate">
                <Link to="/about">01 // About</Link>
            </li>
            <li className="nav__link menu-animate">
            <Link to="/about">02 // Works</Link>
            </li>
            <li className="nav__link menu-animate">
                <Link to="/about">03 // Let's work together</Link>
            </li>
        </ul>
    </nav>
)

export default Nav;
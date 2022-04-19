import React from 'react';
import Link from 'next/link';

const Nav = () => (
    <nav className="nav">
        <ul className="nav__links">
            <li className="nav__link menu-animate">
                <Link href="/about">
                    <a href="#">01 // About</a>
                </Link>
            </li>
            <li className="nav__link menu-animate">
            <Link href="/about">
                    <a href="#">02 // Works</a>
                </Link>
            </li>
            <li className="nav__link menu-animate">
                <Link href="/about">
                    <a href="#">03 // Let's work together</a>
                </Link>
            </li>
        </ul>
    </nav>
)

export default Nav;
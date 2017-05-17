import { Link } from 'react-router';
import React from 'react';

import Search from '../Search';

// Import Style
import styles from '../../assets/css/header.css';

// Import Images
import bl from '../../assets/img/beer-logo.png';

export default function Header() {
  return (
        <nav className={`navbar fixed-top navbar-toggleable-sm navbar-light bg-faded ${styles.navbarHeader}`}>
            <button
                className="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <Link className={`navbar-brand rounded ${styles.navbarBrandHeader}`} to="/">
                <img src={bl} alt="Brand Logo" />
            </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <div className={`${styles.navbarTitle}`}>Trainee</div>
                    </li>
                </ul>
                <Search />
            </div>
        </nav>
  );
}

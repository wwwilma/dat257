import { slide as Menu } from 'react-burger-menu'
import './Menu.css';
import React from 'react';
import { Link } from 'react-router-dom';

/*function for the sidebar and its items*/
function MenuComponent() {
    return (
        <Menu right
              isOpen={ false }>
            <Link className="menu-item" to="/">
                All Users
            </Link>
            <Link className="menu-item" to="/Home">
                Home
            </Link>
            <Link className="menu-item" to="/allhabits">
                All Habits
            </Link>
            <Link className="menu-item" to="/statistics">
                Statistics
            </Link>
            <Link className="menu-item" to="/information">
                Information
            </Link>
            <Link className="menu-item" to="/about-us">
                About Us
            </Link>
        </Menu>
    );
}

export default MenuComponent;

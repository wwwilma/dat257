import React from 'react'
import './Header.css'
import logo from './img/Track_logo.png'
import profilelogo from './profile.svg'


function Header() {
    return (
        <div className="Header">
            <img src={logo} className="App-logo" alt="logo"
                 style={{
                     width: 250,
                     height: 59
                 }}
            />

            <img src={profilelogo} className="profile-logo" alt="profilelogo"
                 style={{
                     width: 50,
                     height: 50,
                     right: 100,
                     top: 25
                 }}
            />
        </div>

    )
}

export default Header
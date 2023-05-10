import React from 'react'
import './Header.css'
import './Profile.css'
import logo from './img/Track_logo.png'
import profilelogo from './profile.svg'


function Header() {
    function onclickprofile() {

    }

    return (
        <div className="Header">
            <img src={logo} className="App-logo" alt="logo"
                 style={{
                     width: 250,
                     height: 59
                 }}
            />

            <img src={profilelogo} className="profile-logo" alt="profilelogo" onClick={onclickprofile}
            />
        </div>

    )
}

export default Header
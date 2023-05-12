import React from 'react'
import './Header.css'
import './Profile.css'
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
            <img src={profilelogo} className="profile-logo" alt="profilelogo"/>

            <div className="dropdown">
                <button className="dropbtn"></button>
                <div className="dropdown-content">
                    <a href="/" >Change user</a>
                </div>
            </div>
        </div>



    )
}

export default Header
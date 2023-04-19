import React from 'react'
import './Header.css'
import logo from './img/Track_log.png'


function Header() {
    return (
        <div className="Header">
            <img src={logo} className="App-logo" alt="logo"
                 style={{
                     width: 250,
                     height: 59
                 }}
            />
        </div>

    )
}


export default Header
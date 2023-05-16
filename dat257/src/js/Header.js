import React from 'react'
import '../css/Header.css'
import '../css/Profile.css'
import logo from '../img/Track_logo.png'
import switchuserlogo from '../img/switchuserlogo.png'
import {useNavigate } from 'react-router-dom';



function Header() {

    const navigate = useNavigate();

    /* Navigates the user to "All users"-page when clicking "switch user"-icon */
    function onClickswitchuser(event){
        navigate("/")
        event.stopPropagation();

    }

    /* Navigates the user to "Home"-page when clicking "Track"-logo */
    function onClicktracklogo(){
        navigate("/Home")
    }


    return (
        <div className="Header">
            <img src={logo} className="App-logo" alt="logo" onClick={onClicktracklogo}
                 style={{
                     width: 250,
                     height: 59
                 }}
            />

            <img src={switchuserlogo} className="profile-logo" alt="profilelogo"/>

            <div className="dropdown">
                <button className="dropbtn" onClick={onClickswitchuser}></button>
                <div className="dropdown-content">
                    <a>Change user</a>
                </div>
            </div>
        </div>



    )
}

export default Header
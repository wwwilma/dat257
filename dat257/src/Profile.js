import React from 'react'
import './Profile.css'
import profile from './profile.svg'


function Profile() {
    return (
        <div className="Profile">
            <img src={profile} className="profile-logo" alt="profile"
            />
        </div>

    )
}

export default Profile
import React, {useEffect, useState} from "react";
import "../css/Login.css";
import axios from "axios";
import {useNavigate } from 'react-router-dom';

// Buttons for usernames on login page.
export default function LoginBtn({onUserChange}) {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    // When the login page is loaded it will retrieve the users from the database and
    // set them in users.
    useEffect(() => {
        axios.get('http://localhost:3001/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    //When the button is clicked navigate to home and set the current user.
    function handleUserChange(newUserID){
        onUserChange(newUserID)
        navigate('/Home');
    }


    return (
        <div className= "containerLogin">
            {users.map(user => (
            <h1 key={user.id}
                className="userNameBtn"
                onClick={() => handleUserChange(user.id)}>
                {user.name}
            </h1>))}
        </div>
    );


}

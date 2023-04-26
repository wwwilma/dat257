import React, {useEffect, useRef, useState} from "react";
import "./Login.css";
import axios from "axios";
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

// Card component for the tasks.
export default function LoginBtn({onUserChange}) {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

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

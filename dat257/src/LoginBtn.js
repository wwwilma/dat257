import React, {useEffect, useRef, useState} from "react";
import "./Login.css";
import axios from "axios";

// Card component for the tasks.
export default function LoginBtn({onUserChange}) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div className= "container">
            {users.map(user => (
            <h1 key={user.id}
                className="userNameBtn"
                onClick={() => onUserChange(user.id)}>
                {user.name}
            </h1>))}
        </div>
    );
}

import React, {useEffect, useState} from "react";
import "../css/Login.css";
import axios from "axios";
import {useNavigate } from 'react-router-dom';
import plusSolid from "../img/plus-solid.svg";
// Buttons for usernames on login page.
export default function LoginBtn({onUserChange}) {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const [newUserName, setNewUserName] = useState('');
    const [showInputField, setShowInputField] = useState(false);

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
    function handleAddUser() {
        if (newUserName.trim() !== '') {
            const newUser = {
                id: 1,
                name: newUserName.trim()
            };
            setUsers(prevUsers => [...prevUsers, newUser]);
            setNewUserName('');
            setShowInputField(false);
        }
    }
    function renderAddUserButton() {
        if (showInputField) {
            return (
                    <h1 className="userNameBtn">
                        <input
                            className="input"
                            type="text"
                            value={newUserName}
                            onChange={(e) => setNewUserName(e.target.value)}
                            onKeyDown={event => {
                                if (event.key === 'Enter') {
                                handleAddUser()
                            }
                            }}
                            placeholder="Enter user name"
                        />
                        <img
                            onClick={handleAddUser}
                            src={plusSolid}
                            className="plusSolidImg"
                        />
                    </h1>
            );
        } else {
            return (
                <h1
                    className="userNameBtn"
                    onClick={() => setShowInputField(true)}
                >
                    <span>Add new user</span>
                    <img
                        src={plusSolid}
                        className="plusSolidImg"
                    />
                </h1>
            );
        }
    }

    return (
        <div className="containerLogin">
            {users.map(user => (
                <h1
                    key={user.id}
                    className="userNameBtn"
                    onClick={() => handleUserChange(user.id)}
                >
                    {user.name}
                </h1>
            ))}
            {renderAddUserButton()}
        </div>
    );



}

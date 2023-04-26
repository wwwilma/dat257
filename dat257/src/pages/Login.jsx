import React, {useEffect, useState} from "react";
import LoginBtn from "../LoginBtn";
import axios from "axios";
function Login() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/users')
            .then(response => {
                console.log(response.data);
                setUsers(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <LoginBtn>
                users = {users}
            </LoginBtn>
        </div>
    )
}

export default Login
import React, { useRef} from "react";
import "./Login.css";

// Card component for the tasks.
export default function LoginBtn({ users } ) {
    const userNameRef = useRef(null);


    return (
        <div className= "container">
            {users.map(user => (
            <h1 key={user.id}
                className="userNameBtn"
                ref={userNameRef}>
                {user.name}
            </h1>))}
        </div>
    );
}

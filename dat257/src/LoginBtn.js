import React, { useRef} from "react";
import "./Login.css";

// Card component for the tasks.
export default function LoginBtn({ user } ) {
    const userNameRef = useRef(null);

        function handleClick() {
    }

    return (
        <div
            className= "container">
            <h1
                className="userNameBtn"
                ref={userNameRef}
                onClick={handleClick}>
                name
            </h1>
        </div>
    );
}

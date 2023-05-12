import React, {useEffect} from "react";
import { useState } from 'react';
import axios from "axios";
import CardGridFavorite from "../CardGridFavorite";
//homepage
function Home({userID}) {
    const [userName, setUserName] = useState('{User_Name}');

    //When home is loaded it will retrieve the selected users name from the database
    useEffect(() => {
            getUserName(userID);
    }, [userID]);

    function getUserName(userID){
        axios.get(`http://localhost:3001/users/${userID}`)
            .then(response => {
                setUserName(response.data[0].name);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div>
            <h1>Hello {userName}!</h1>
            <CardGridFavorite user = {userID}/>
      </div>
    )
}

export default Home
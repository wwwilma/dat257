import React, {useEffect} from "react";
import { useState } from 'react';
import CardGrid from "../CardGrid";
import axios from "axios";
//homepage
function Home({userID}) {
    const [userName, setUserName] = useState('{User_Name}');
    const [habits, setHabits] = useState([]);

    //When home is loaded it will retrieve the selected users name from the database
    useEffect(() => {
            getUserName(userID);
            getAllHabits();
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
    function getAllHabits(){
        axios.get(`http://localhost:3001/home`)
            .then(response => {
                setHabits(response.data)
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div>
            <h1>Hello {userName}!</h1>
            <CardGrid habits={habits}/>
      </div>
    )
}

export default Home
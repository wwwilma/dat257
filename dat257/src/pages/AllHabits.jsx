import React from "react";
import "./pageHeader.css";
import CardGrid from "../CardGrid";

function AllHabits({userID}) {
    return (
        <div>
            <h1>All Habits</h1>
            <CardGrid user = {userID}/>
        </div>
    )
}

export default AllHabits
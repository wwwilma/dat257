import React from "react";
import CardGrid from "../CardGrid";
import "./pageHeader.css";

function AllHabits({userID}) {
    return (
        <div>
            <h1>All Habits</h1>
            <CardGrid user = {userID}/>
        </div>
    )
}

export default AllHabits
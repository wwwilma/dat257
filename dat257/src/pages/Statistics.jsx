import React, {useEffect, useState} from "react";
import '../css/Heatmap.css';
import axios from "axios";
import WeeklyHeatmap from "../js/WeeklyHeatmap";
import YearlyHeatmap from "../js/Yearlyheatmap";

function Statistics({userID}) {

    const [statistics, setStatistics] = useState([]);

    useEffect(() => {
        getStatistics(userID);
    }, [userID]);

    function getStatistics(userID){
        axios.get(`http://localhost:3001/trackers/${userID}`)
            .then(response => {
                const data = response.data;
                const transformedData = data.map(item => ({
                    date: item.date,
                    count: parseInt(item.counter)
                }));
                console.log(transformedData)
                setStatistics(transformedData);
            })
            .catch(error => {
                console.log(error);
            });
    }
    return statistics.length>0 &&(
        <div className="flexbox-container">
            <div className="week-heatmap-size"><WeeklyHeatmap statistics={statistics}/> </div>
            <div className="year-heatmap-size"><YearlyHeatmap statistics={statistics} /></div>
        </div>
    )
}

export default Statistics
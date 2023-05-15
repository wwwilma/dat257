import React, {useEffect, useState} from "react";
import Heatmap from '../js/Heatmap';
import axios from "axios";

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
        <div>
            <Heatmap statistics={statistics} />
        </div>
    )
}

export default Statistics
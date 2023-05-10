import React, {useEffect, useState} from "react";
import Heatmap from '../Heatmap';
import axios from "axios";

function Statistics({userID}) {

    const [statistics, setStatistics] = useState([]);

    useEffect(() => {
        getStatistics(userID);
    }, [userID]);

    function getStatistics(userID){
        axios.get(`http://localhost:3001/trackers/${userID}`)
            .then(response => {
                setStatistics(response.data)
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
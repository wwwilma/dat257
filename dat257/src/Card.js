import React, { useEffect, useState } from "react";
import "./Card.css";
import axios from "axios";

export default function Card({ imgSrc, title, desc, habitId, user }) {
    const [count, setCount] = useState(0);

    const fetchTimesDone = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/trackers/${user}/${habitId}`);
            setCount(response.data[0].counter);
        } catch (error) {
            console.error('Error fetching times done:', error);
        }
    };

    useEffect(() => {
        fetchTimesDone();
    }, []);

    function handleClickCard() {
        console.log('Card clicked');
    }
    async function handleClickDone() {
        try {
            const newCount = parseInt(count) + 1;
            setCount(newCount);
            await axios.post(`http://localhost:3001/trackers/${user}/${habitId}`, {
                count: newCount,
            });
        } catch (error) {
            console.error('Error updating click count:', error);
        }
    }

    return (
        <div className="card" onClick={handleClickCard}>
            <div className="thefront">
                <img src={imgSrc} alt="task-img" className="task-img" />
                <h1 className="title">{title}</h1>
                <h2 className="desc">{desc}</h2>
            </div>

            <div className="theback">
                <h1 className="timesDone">{count} times</h1>
                <div className="button-box">
                    <button className="done" onClick={handleClickDone}>
                        Done
                    </button>
                </div>
            </div>
        </div>
    );
}

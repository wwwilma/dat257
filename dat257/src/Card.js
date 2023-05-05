import React, { useEffect, useRef, useState } from "react";
import "./Card.css";
import infoIcon from "./img/info-icon.jpg";
import xIcon from "./img/x-icon.jpg";
import axios from "axios";

// Card component for the tasks.
export default function Card({ imgSrc, title, desc,link, user, habitId} ) {
    const cardRef = useRef(null);
    const imgRef = useRef(null);
    const titleRef = useRef(null);
    const doneRef = useRef(null);
    const timesDoneRef = useRef(null)
    //constant for counting the button clicks
    const [count, setCount] = useState(0);
    const descRef = useRef(null);
    const linkRef = useRef(null);
    const [style, setStyle] = useState("cardFront")
    const [showFront, setShowFront] = useState(true);
    const [showBack, setShowBack] = useState(false)

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

    // Function for handle click on card.
    function handleClickCardFront() {
        console.log('Card clicked');
        setStyle("cardBack")
        setShowFront(false)
        setShowBack(true)
    }

    function handleClickCardBack() {
        console.log('Card clicked');
        setStyle("cardFront")
        setShowFront(true)
        setShowBack(false)
    }

    async function handleClickDone(event) {
        event.stopPropagation();
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
        <div
            className={style}
            ref={cardRef}
        >
            <div
                className="thefront"
                ref={cardRef}
                onClick={handleClickCardFront}
            >
                {showFront && (
                    <>
                        <img
                            ref={imgRef}
                            src={infoIcon}
                            alt="info-icon"
                            className="info-icon"
                        />
                        <img
                            ref={imgRef}
                            src={imgSrc}
                            alt="task-img"
                            className="task-img"
                        />
                        <h1 className="title" ref={titleRef}>
                            {title}
                        </h1>
                        <h1 className="timesDone" ref={timesDoneRef}>
                            {count} times
                        </h1>
                        <div className="button-box" ref={doneRef}>
                            <button className="done" onClick={handleClickDone}>
                                Done
                            </button>
                        </div>
                    </>
                )}
            </div>

            <div
                className="theback"
                ref={cardRef}
                onClick={handleClickCardBack}
            >
                {showBack && (
                    <>
                        <img
                            ref={imgRef}
                            src={xIcon}
                            alt="close-icon"
                            className="close-icon"
                        />
                        <h2 className="desc" ref={descRef}>
                            {desc}
                        </h2>
                        <h3 className="link" ref={linkRef}>
                            {link}
                        </h3>
                    </>
                )}
            </div>

        </div>
    );
}

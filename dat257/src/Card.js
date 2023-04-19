import React, { useRef, useState } from "react";
import "./Card.css";

// Card component for the tasks.
export default function Card({ imgSrc, title} ) {
    const cardRef = useRef(null);
    const imgRef = useRef(null);
    const titleRef = useRef(null);
    const doneRef = useRef(null);
    const timesDoneRef = useRef(null)
    //constant for
    const [count, setCount] = useState(0);

    // Function for handle click on card.
    function handleClickCard() {
        console.log('Card clicked');
    }

    // Function where the counter increments with 1, every time the card is clicked.
    function handleClickDone() {
        setCount(count + 1);
    }

    // The return, that is the card that is displayed.
    return (
        <div
            className="card"
            ref={cardRef}
            onClick={handleClickCard}
        >
            <img
                ref={imgRef}
                src={imgSrc}
                alt="task-img"
                className="task-img"
            />
            <h1 className="title" ref={titleRef}>
                {title}
            </h1>
            <div className="button-box" ref={doneRef}>
                <h1 className="timesDone" ref={timesDoneRef}>
                    {count} times
                </h1>
                <button className="done" onClick={handleClickDone} >
                    Done
                </button>
            </div>
        </div>
    );
}

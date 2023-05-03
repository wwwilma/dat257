import React, { useRef, useState } from "react";
import "./Card.css";

// Card component for the tasks.
export default function Card({ imgSrc, title, desc,link} ) {
    const cardRef = useRef(null);
    const imgRef = useRef(null);
    const titleRef = useRef(null);
    const doneRef = useRef(null);
    const timesDoneRef = useRef(null)
    //constant for counting the button clicks
    const [count, setCount] = useState(0);
    const descRef = useRef(null);
    const linkRef = useRef(null);
    const [style,setStyle] = useState("cardFront")


    // Function for handle click on card.
    function handleClickCardFront() {
        console.log('Card clicked');
        setStyle("cardBack")
    }

    function handleClickCardBack() {
        console.log('Card clicked');
        setStyle("cardFront")
    }

    // Function where the counter increments with 1, every time the card is clicked.
    function handleClickDone(event) {
        event.stopPropagation();
        setCount(count + 1);
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
                <img
                    ref={imgRef}
                    src={imgSrc}
                    alt="task-img"
                    className="task-img"
                />
                <h1 className="title" ref={titleRef}>
                    {title}
                </h1>
                <h2 className="desc" ref={descRef}>
                    {desc}
                </h2>
                <h3 className="link" ref={linkRef}>
                    {link}
                </h3>


            </div>

            <div
                className="theback"
                ref={cardRef}
                onClick={handleClickCardBack}
            >
                <h1 className="timesDone" ref={timesDoneRef}>
                    {count} times
                </h1>
                <div className="button-box" ref={doneRef}>
                    <button className="done" onClick={handleClickDone} >
                        Done
                    </button>
                </div>
            </div>

        </div>
    );



}

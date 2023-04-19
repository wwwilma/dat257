
import React from "react";
import Card from "./Card";
import "./Card.css";

export default function CardGrid() {
    const cardData = [
        {
            imgSrc: require("./img/shower.png"),
            title: "Take a shower for less than 10 min",
        },
        {
            imgSrc: require("./img/sortWaste.jpg"),
            title: "Sort waste into recyclable groups",
        },
    ];

    return (
        <div className={"container"}>
            {cardData.map((card, index) => (
                <Card
                    key={index}
                    imgSrc={card.imgSrc}
                    title={card.title}
                    desc={card.desc}
                />
            ))}
        </div>
    );
}

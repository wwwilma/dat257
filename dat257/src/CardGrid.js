import React from "react";
import Card from "./Card";
import "./Card.css";
import faTeethOpen from "./img/teeth-open-solid.svg";
import faUtensils from "./img/utensils-solid.svg";
import faRecycle from "./img/recycle-solid.svg";
import faBurger from "./img/burger-solid.svg";
import faVanShuttle from "./img/van-shuttle-solid.svg";
import faCarrot from "./img/carrot-solid.svg";
import faLightbulb from "./img/lightbulb-solid.svg";
import faAppleWhole from "./img/apple-whole-solid.svg";
import faBottleWater from "./img/bottle-water-solid.svg";
import faSocks from "./img/socks-solid.svg"


export default function CardGrid() {
    const cardData = [
        {
            imgSrc: faTeethOpen,
            title: "Turning off the water when brushing your teeth.",
        },
        {
            imgSrc: faUtensils,
            title: "Saving water during the dish washing by filling up the sink first, and not letting the water run.",
        },
        {
            imgSrc: faRecycle,
            title: "Sorting the waste and recycle what you can.",
        },
        {
            imgSrc: faBurger,
            title: "Eating the food on your plate, not letting it go to waste.",
        },
        {
            imgSrc: faVanShuttle,
            title: "Carpooling, taking the bike, or public transportation.",
        },
        {
            imgSrc: faCarrot,
            title: "Buying an eco friendly food product (or similar), instead of a product that is worse to the environment.",
        },
        {
            imgSrc: faLightbulb,
            title: "Turning off the lights when you leave a room, turning off all lights when you leave your home.",
        },
        {
            imgSrc: faAppleWhole,
            title: "Eating at least one fruit or vegetable during the day.",
        },
        {
            imgSrc: faBottleWater,
            title: "Using something reusable instead of something disposable.",
        },
        {
            imgSrc: faSocks,
            title: "Letting the clothes dry without using the dryer.",
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

import React, {useEffect, useState} from "react";
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
import axios from "axios";


export default function CardGrid() {
   /* const cardData = [
        {
            imgSrc: faTeethOpen,
            title: "Turning off the water when brushing your teeth.",
            desc: "By turning off the water while brushing your teeth you can contribute to the global goal nr 6, which " +
                "strives to 'Ensure availability and sustainable management of water and sanitation for all'. Did you " +
                "know that a swede on average consumes 70l of water for personal hygiene each day?"
        },
        {
            imgSrc: faUtensils,
            title: "Saving water during the dish washing by filling up the sink first, and not letting the water run.",
            desc: "By not letting the water run you will contribute to minimizing the waste of one of our most valuable " +
                "natural resources! Did you know that a running tap gives 6l of water each minute? "

        },
        {
            imgSrc: faRecycle,
            title: "Sorting the waste and recycle what you can.",
            desc: "By sorting your waste you will promote a sustainable use of our eco-systems the preservation of our " +
                "biodiversity. Did you know that the wild population of vertebrates have increased with 60% over the " +
                "last 44 years?"
        },
        {
            imgSrc: faBurger,
            title: "Eating the food on your plate, not letting it go to waste.",
            desc: "It is essential to readjust our consumption and production in order to reach a sustainable " +
                "development, but currently 1/3 of the food that is produced is thrown away! By eating all the food on " +
                "your plate, you are able to contribute to minimizing food waste. ",

        },
        {
            imgSrc: faVanShuttle,
            title: "Carpooling, taking the bike, or public transportation.",
            desc: "By leaving you car at home you will increase your carbon footprint and thereby contribute to counter" +
                " climate change. "
        },
        {
            imgSrc: faCarrot,
            title: "Buying an eco friendly food product (or similar), instead of a product that is worse to the environment.",
            desc: "By choosing an eco-friendly product you can contribute to minimize the negative impact on eco-systems. Here is a tip on some certifications to look for:",

        },
        {
            imgSrc: faLightbulb,
            title: "Turning off the lights when you leave a room, turning off all lights when you leave your home.",
            desc: "We need to change our current way of consuming and producing energy. Being mindful about your energy" +
                " use will benefit your wallet, as well as counter climate change. Tip: connect your lamps and " +
                "electronic devices to a power strip, that way you can easily turn them all off at once"
        },
        {
            imgSrc: faAppleWhole,
            title: "Eating at least one fruit or vegetable during the day.",
            desc: "By doing your best to stay healthy you can enhance your own well-being. In turn you will also" +
                " increase your contribution to society. "
        },
        {
            imgSrc: faBottleWater,
            title: "Using something reusable instead of something disposable.",
            desc: "By using a reusable item instead of a disposable item you can contribute to minimizing waste, which" +
                " in turn contributes to more a sustainable consumption and production. Did you know that about 8" +
                " million tons of waste plastic ends up the oceans ech year? "
        },
        {
            imgSrc: faSocks,
            title: "Letting the clothes dry without using the dryer.",
            desc: "Implementing new energy solutions is important in order to counter climate change, but we also need" +
                " to me mindful about our energy consumption in order to counter climate change. Did you know that it " +
                "takes up to four times more energy to dry your clothes then to wash them?"
        },
    ];
*/
    const [habits, setHabits] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3001/habits`)
            .then(response => {
                setHabits(response.data)
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div className={"container"}>
            {habits.map((card, index) => (
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

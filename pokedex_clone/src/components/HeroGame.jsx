import React, {Component} from "react";
import HeroSide from "./HeroSide";
import '../css/herogame.css'
export default class HeroGame extends Component {
    state = {
        heroes: [
            {
                id: 1,
                name: "Iron Man",
                imgSrc: "/heros/iron_man.jpg",
                power: 100
            },
            {
                id: 2,
                name: "Thor",
                imgSrc: "/heros/thor.jpg",
                power: 200
            },
            {
                id: 3,
                name: "Scarlet Witch",
                imgSrc: "/heros/scarlet.jpg",
                power: 300
            },
            {
                id: 4,
                name: "Black Widow",
                imgSrc: "/heros/black_widow.jpg",
                power: 400
            },
            {
                id: 5,
                name: "Captain America",
                imgSrc: "/heros/captain.jpg",
                power: 500
            },
            {
                id: 6,
                name: "Hulk",
                imgSrc: "/heros/hulk.jpg",
                power: 600
            }
        ]
    }

    render() {
        let side1 = [...this.state.heroes];
        let side2 = [];
        while (side2.length < side1.length) {
            let randomIndex = Math.floor(Math.random() * (side1.length));
            let randomHero = side1.splice(randomIndex, 1)[0];
            side2.push(randomHero);
        }
        let power1=side1.reduce((power,hero)=> power+hero.power,0);
        let power2=side2.reduce((power,hero) => power + hero.power,0);
        return (<div className="hero-game">
            <h1>Hero Game</h1>
            <HeroSide heroes={side1} power={power1} isWinner={power1>power2} key="side-1" />
            <HeroSide heroes={side2} power={power2} isWinner={power2>power1} key="side-2" />
        </div>)
    }
}
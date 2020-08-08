import React, {Component} from "react";
import Hero from "./Hero"
export default class HeroSide extends Component {
    render() {
        let isWinner = this.props.isWinner;
        let postureStatus = (isWinner) ? "This team is winning" : "This team is Losing";
        return (<div className="hero-card">
            {this.props.heroes.map(hero=> <Hero hero={hero} key={hero.id} />)}
        </div>)
    }
}
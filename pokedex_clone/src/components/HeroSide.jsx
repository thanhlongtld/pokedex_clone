import React, {Component} from "react";
import Hero from "./Hero"
import "./../css/heroside.css";

export default class HeroSide extends Component {
    render() {
        let isWinner = this.props.isWinner;
        let postureStatus = (isWinner) ? "This team is winning" : "This team is Losing";
        return (
            <div className="side-container">
                <div className="hero-side">
                    {this.props.heroes.map(hero => <Hero hero={hero} key={hero.id}/>)}
                </div>
                <div className="posture-status">
                    <h2>{postureStatus}</h2>
                </div>
            </div>)
    }
}
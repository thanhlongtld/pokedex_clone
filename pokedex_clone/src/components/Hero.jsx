import React,{Component} from "react";
import "./../css/hero.css";
export default class Hero extends Component{
    render(){
        return (
            <div className="hero-container">
                <div className="hero-img">
                    <img src={process.env.PUBLIC_URL + this.props.hero.imgSrc} />
                </div>
                <div className="hero-info">
                    <h4 className="hero-name">{this.props.hero.name}</h4>
                    <p className="hero-power">{this.props.hero.power}</p>
                </div>
            </div>
        )
    }
}
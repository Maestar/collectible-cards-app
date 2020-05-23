import React from "react";
import './Card.styles.css';
import Tilty from "react-tilty";


class Card extends React.Component {

  render() {
    //NOTE:add a rarity prop and check rarity to determine what to render.
    //this lets us change how the card will look based on rarity.
      const{name, image, desc} = this.props.card;
    return (

      <Tilty className="card" >
        <h4 className="card-title">{name}</h4>
        <img className="card-image" alt='cardImg' src={image}/>
        <p className="card-desc">{desc}</p>
      </Tilty>

    );
  }
}

export default Card;

import React from "react";
import './Card.styles.css';
import Tilty from "react-tilty";


class Card extends React.Component {

  render() {
    //add onclick that calls a function in card binder that sets state to
    //let state know which card was clicked so the modal can load that data.
      const{name, image, desc, rarity} = this.props.card;
      const location = this.props.location;
    return (

      <Tilty className={`card ${rarity} ${location === 'modal' ? 'big-card' : 'little-card'}`} onClick={() => this.props.flipModal(this.props.card)} >
        <h4 className="card-title">{name}</h4>
        <img className="card-image" alt='cardImg' src={image}/>
        <p className="card-desc">{desc}</p>
      </Tilty>

    );
  }
}

export default Card;

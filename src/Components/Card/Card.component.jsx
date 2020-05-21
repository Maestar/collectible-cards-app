import React from "react";
import './Card.styles.css';


class Card extends React.Component {

  render() {
      const{name, image, desc} = this.props.card;
    return (
      <div className="card">
        <h4 className="card-title">{name}</h4>
        <img className="card-image" alt='cardImg' src={image}/>
        <p className="card-desc">{desc}</p>
      </div>
    );
  }
}

export default Card;

import React from 'react';
import Card from '../Card/Card.component';
import cardList from '../../cardList';

//pull the seed from the url.
class CardBinder extends React.Component {

    state = {
        cards: {},
        pack: {}
    }

    componentDidMount(){
        //load cards into state
        this.setState({cards: cardList});
    }

    generatePack(){
        const seed = this.props.match.params.packId;
    }
    render(){

        return (
            <div>
        {/* this is going to print every card in cards, we need to change this to print from a generated list gathered
            together from multiple rarity lists */}
            {Object.keys(this.state.cards).map(key => <Card
                                                        key={key}
                                                        fish={this.state.cards[key]}/>)};

            </div>
        );
    }
}

export default CardBinder;
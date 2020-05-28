import React from 'react';
import Card from '../Card/Card.component';
import CardList from '../../cardList';
import Modal from '../Modal/Modal.component';
import './CardBinder.styles.css';

//pull the seed from the url.
class CardBinder extends React.Component {

    state = {
        cards: {},
        pack: {},
        pickedCard: {},
        show: false
    }



    openPack = () => {
        //Take a seed, break it down, build pack list from seed, save to state.
        const seed = this.props.match.params.packId;
        let packList = {};
        const cardArray = seed.split(":");
        //this is an old fashion forloop because I want to take advantage of it's index.
        for (let index = 0; index < cardArray.length; index++){
            console.log(index);
            if(index === 0){
                //pull from rares
                packList[`card${index}`] = CardList.rareList[cardArray[index]];
                console.log('in 0');
            }
            else if (index > 0 && index < 4){
                packList[`card${index}`] = CardList.uncommonList[cardArray[index]];
                console.log('in 1-3')
            }
            else{
                packList[`card${index}`] = CardList.commonList[cardArray[index]];
                console.log('in 4+');
            }
        }
        console.log(JSON.stringify(packList));
        this.setState({cards: packList});
    }

    returnToPacks = () => {
        this.props.history.push(`/`);
    }

    flipModal = (obj) => {
        if(this.state.show){
            this.setState({show: false});
        }
        else{
            this.setState({pickedCard: obj, show: true});
        }

    }

    componentDidMount(){
        //generate pack's contents off seed.
        this.openPack();


    }

    render(){

        return (
            <>
            <div class="float-container">
            <div className="card-grid">
                {Object.keys(this.state.cards).map(key => <Card
                                                            key={key}
                                                            card={this.state.cards[key]}
                                                            flipModal={this.flipModal}
                                                            />
                                                    )}
                <button className="card-grid-button" onClick={this.returnToPacks}>Open a new Pack</button>
            </div>
            </div>
            <Modal
                show={this.state.show}
                card={this.state.pickedCard}
                flipModal={this.flipModal}
                />
            </>

        );
    }
}

export default CardBinder;
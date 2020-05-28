import React from 'react';
import Card from '../Card/Card.component';
import './Modal.styles.css';

class Modal extends React.Component{

    render(){

        if(this.props.show){
        return (
            <div className='overlay'>
                    <Card className='modal-content' card={this.props.card} flipModal={this.props.flipModal}/>
            </div>
        );
        }
        else{
            return null;
        }
    }
}

export default Modal;
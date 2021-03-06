import React from 'react';
import './PackPicker.styles.css';


class PackPicker extends React.Component{



    generatePack = () => {
      let newSeed = '';
      //1. generate a seed for generating cards.
      //these are all 5 now for testing reasons
      newSeed += `${Math.floor((Math.random() * 5) + 1)}:`;
      for(let i = 0; i < 3; i++){
        newSeed += `${Math.floor((Math.random() * 5) + 1)}:`;
      }
      for(let j = 0; j < 6; j++){
        if(j === 5){
          newSeed += `${Math.floor((Math.random() * 5) + 1)}`;
        }
        else{
          newSeed += `${Math.floor((Math.random() * 5) + 1)}:`;
        }
      }

      console.log(newSeed);

      //2. load the cardbinder.
      this.props.history.push(`/pack/${newSeed}`);
    };

    render (){
        return (
          <div className="flex-container">
              <button className="new-pack-button" onClick={this.generatePack}>Generate Cards</button>
          </div>
        );
    };
}

export default PackPicker;
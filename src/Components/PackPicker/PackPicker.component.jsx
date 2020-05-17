import React from 'react';


class PackPicker extends React.Component{



    openPack = () => {
      //1. generate a seed for generating cards.
      const newSeed = Math.floor((Math.random() * 20) + 1);
      console.log(newSeed);

      //2. load the cardbinder.
      this.props.history.push(`/pack/${newSeed}`);
    };

    render (){
        return (
          <div>
            <h2>This is the pack picker.</h2>
            <button onClick={this.openPack} className="pack">OCs Pack</button>
          </div>
        );
    };
}

export default PackPicker;
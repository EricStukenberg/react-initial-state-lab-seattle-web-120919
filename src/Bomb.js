// your Bomb code here!
import React, { Component } from 'react';

class Bomb extends React.Component {
    constructor(props) { //props that the component gets from its parent
        super()
        this.state = { //define initial state with a key of 'someKey' set to the 'someValue' prop
        secondsLeft: props.initialCount
        }
      }

      render() {
        let message = ""
        if(this.state.secondsLeft == 0) {
            message = "Boom!";
        } else {
            message = `${this.state.secondsLeft} seconds left before I go boom!`;
        }
        return(
            <div>{message}</div>
        )
      }


}

export default Bomb;


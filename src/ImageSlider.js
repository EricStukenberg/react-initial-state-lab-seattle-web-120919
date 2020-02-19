// your ImageSlider code here!
import React, { Component } from 'react';

class ImageSlider extends React.Component {

    constructor() {
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }

    increment = () => {
        const newSlideIndex = this.state.currentSlideIndex + 1
        this.setState({
            currentSlideIndex: newSlideIndex
        })
      }
     

    render() {
        return (
            <div>
                <h1>I am on slide {this.state.currentSlideIndex}</h1>
            </div>
        )
    }

}

export default ImageSlider;

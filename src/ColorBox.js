import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    

    const newValue = this.props.opacity - 0.1;
    console.log(this.props.opacity)
    return newValue > 0 ? (
      <div className="color-box" style={{opacity: newValue}}>
          <ColorBox opacity={ newValue } />
      </div>
    ) : null
  }

}


import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
      // if (this.props.opacity >= 0.2) {
        return (
          <div className="color-box" style={{opacity: this.props.opacity}}>
            { (this.props.opacity >= 0.2) ? <ColorBox opacity={this.props.opacity - 0.1} /> : null } 
          </div>
        )} 
      //   else {
      //   return null
      // }
  // }
}

    // let newOpacity = this.props.opacity.value - 0.1;
    //   {if (newOpacity < 0.2) 
    //     return (null)
    //   }
    // return (
    //   console.log(this.props.opacity.value)
      // <div className="color-box" style={opacity: newOpacity}>
      // </div>
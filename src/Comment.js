//your code here
import React, { Component } from 'react'

class Comment extends Component {



    render() {
       return (

           <div className="comment">
            <p>Comment</p>
            {this.props.commentText}
        </div>
           )
    }
}


export default Comment
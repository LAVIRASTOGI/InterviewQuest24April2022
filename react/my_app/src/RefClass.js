import React, { Component } from 'react'

export class RefClass extends Component {
    constructor(props){
        super(props)
        this.state={
            message:'lavi you in child'
        }
    }
    xyz(){
        console.log('child components functon called in parent'+this.state.message)
    }
  render() {
    return (
      <div>RefClass</div>
    )
  }
}

export default RefClass
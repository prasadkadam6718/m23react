import React, { Component } from 'react'

export default class LifeCycleIntro extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }
  static getDerivedStateFromProps() {

  }
  render() {
    return (
      <div>
        <h1>LifeCycleIntro</h1>
        <h1> count : {this.state.count}</h1>
      </div>
    )
  }

  componentDidMount() {

  }
}

import React, { Component } from 'react'
import './index.css'
export default class TodoItem extends Component {
  render() {
    return (
      <div className='todo-item'>
        <input type="checkbox" value={this.props.data.check} />
        <div>{this.props.data.label}</div>
      </div>
    )
  }
}

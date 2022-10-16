import React, { Component } from 'react'
import './index.css'
export default class TodoItem extends Component {
  changeValue = (val) => {
    console.log(val)
  }

  render() {
    return (
      <div className='todo-item'>
        <input type="checkbox" checked={this.props.data.check} onChange={this.changeValue} />
        <div>{this.props.data.label}</div>
      </div>
    )
  }
}

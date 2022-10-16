import React, { Component } from 'react'
import './index.css'
export default class TodoItem extends Component {
  changeValue = (data) => {
    let { check, id } = data
    const checkState = !check
    this.props.changeVal(id, checkState)
  }

  render() {
    return (
      <div className='todo-item'>
        <input type="checkbox" checked={this.props.data.check} onChange={() => this.changeValue(this.props.data)} />
        <div>{this.props.data.label}</div>
      </div>
    )
  }
}

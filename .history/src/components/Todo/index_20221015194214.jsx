import React, { Component } from "react";
import hello from './index.module.css'
import TodoItem from '../TodoItem'


class TodoInput extends Component {
  render() {
    return (
      <div>
        <input type="text" />
      </div>
    );
  }
}

export default class Todo extends Component {
  state = {
    list: [
      {
        id: 1,
        check: false,
        label: '123'
      },
      {
        id: 2,
        check: false,
        label: '456'
      },
    ]
  }
  changeVal = (id, state) => {
    const newList = this.state.list.slice()
    const item = newList.find(item => item.id === id)
    if (item) {
      item.check = state
    }
    this.setState({ list: newList })
  }
  render() {
    const todoList = this.state.list.map((item) => {
      return <TodoItem data={item} key={item.id} changeVal={this.changeVal} />
    })
    return (
      <div>
        <h2 className={hello.title}>hello~~</h2 >
        <TodoInput />
        <div>{todoList}</div>
      </div>
    )
  }
}




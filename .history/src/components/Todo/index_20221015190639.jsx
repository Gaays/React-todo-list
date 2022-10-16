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
    list: []
  }
  render() {
    const todoList = this.state.list.map(item => {
      return <TodoItem data={item} />
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




import React, { Component } from "react";
import hello from './index.module.css'
import TodoInput from '../Input/'
export default class Todo extends Component {
  render() {
    return (
      <h2 className={hello.title}>hello~~</h2 >
      <TodoInput />
    )
  }
}




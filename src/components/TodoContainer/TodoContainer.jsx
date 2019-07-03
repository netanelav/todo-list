import React from "react";
import TodoList from "../TodoList/TodoList";
import TodoForm from "../TodoForm/TodoForm";
import { doesNotReject } from "assert";

class TodoContainer extends React.Component {
  constructor() {
    super();
    this.handleNewTodo = this.handleNewTodo.bind(this);
    this.handleNewDoneTodo = this.handleNewDoneTodo.bind(this)
    this.state = {
      todos: [],
      completed: []
    };
  }

  handleNewTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }

  handleNewDoneTodo(todo){
    this.setState({
      completed: [...this.state.completed, todo]
    });
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoForm handleNewTodo={this.handleNewTodo} />
        <TodoList data-type="todo" handleNewDoneTodo={this.handleNewDoneTodo} todos={this.state.todos} />
        <h1>Done List</h1>
        <TodoList handleNewTodo={this.handleNewTodo} data-type="done" completed={this.state.completed} />
      </div>
    );
  }
}

export default TodoContainer;

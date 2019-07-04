import React from "react";
import TodoList from "../TodoList/TodoList";
import TodoForm from "../TodoForm/TodoForm";
// import { doesNotReject } from "assert";

class TodoContainer extends React.Component {
  constructor() {
    super();
    this.handleNewTodo = this.handleNewTodo.bind(this);
    this.handleNewDoneTodo = this.handleNewDoneTodo.bind(this)
    this.starUnstarItem = this.starUnstarItem.bind(this);
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

  starUnstarItem(list, itemIndex) {
    let newState = Object.assign({}, this.state)
    newState[list][itemIndex].starred = !newState[list][itemIndex].starred
    console.log(newState[list]);
    this.setState(newState)
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
        <TodoList data-type="todo" handleStarUnstar={this.starUnstarItem} handleNewDoneTodo={this.handleNewDoneTodo} todos={this.state.todos} />
        <h1>Done List</h1>
        <TodoList handleNewTodo={this.handleNewTodo}  handleStarUnstar={this.starUnstarItem} data-type="done" completed={this.state.completed} />
      </div>
    );
  }
}

export default TodoContainer;

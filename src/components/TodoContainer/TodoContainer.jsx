import React from "react";
import "./TodoContainer.css";
import TodoList from "../TodoList/TodoList";
import TodoForm from "../TodoForm/TodoForm";

class TodoContainer extends React.Component {
  constructor() {
    super();
    this.handleNewTodo = this.handleNewTodo.bind(this);
    this.handleNewDoneTodo = this.handleNewDoneTodo.bind(this);
    this.starItem = this.starItem.bind(this);
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

  starItem(list, itemIndex) {
    let newState = Object.assign({}, this.state);
    newState[list][itemIndex].starred = !newState[list][itemIndex].starred;
    console.log(newState[list]);
    this.setState(newState);
  }

  handleNewDoneTodo(todo) {
    this.setState({
      completed: [...this.state.completed, todo]
    });
  }

  render() {
    return (
      <div className="container">
        <p className="headline">
          Todo List App
          <img className="logo" />
        </p>
        <div className="row">
          <div className="col col-md-12">
            <TodoForm className="form" handleNewTodo={this.handleNewTodo} />
            <h2 className="todo-title">Todo List</h2>
            <TodoList
              className="todo-list"
              data-type="todo"
              handleStar={this.starItem}
              handleNewDoneTodo={this.handleNewDoneTodo}
              todos={this.state.todos}
            />
            <h2 className="done-title">Done List</h2>
            <TodoList
              className="done-list"
              data-type="done"
              handleNewTodo={this.handleNewTodo}
              completed={this.state.completed}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TodoContainer;

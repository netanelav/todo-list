import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Container.css";
import TodoList from "../TodoList/TodoList";
import Logo from "../../images/list.svg";

class Container extends Component {
  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.setDone = this.setDone.bind(this);
    this.setTodo = this.setTodo.bind(this);
    this.createTodo = this.createTodo.bind(this);
    this.state = {
      todos: [],
      completed: [],
      todo: {}
    };
  }

  createTodo(event) {
    let value = { todo: event.target.value };
    this.setState({
      todo: value
    });
  }

  addTodo() {
    document.getElementById("userInput").value = "";
    this.setState({
      todos: [...this.state.todos, this.state.todo]
    });
  }

  setDone(todo) {
    this.setState({
      completed: [...this.state.completed, todo]
    });
  }

  setTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }

  render() {
    return (
      <React.Fragment>
      <div className="row title">
          <img id="logo" src={Logo} />
          <p className="headline">Todo List</p>
        </div>
      <div className="container">
        <input
          id="userInput"
          className="input"
          onChange={this.createTodo}
          type="text"
          placeholder="Add Your Todo..."
        />
        <button className="btn" onClick={this.addTodo}>
          Add Todo
        </button>
        <div className="row">
          <div className="col col-md-12">
            <h2 className="todo-title">Todo List</h2>
            <TodoList
              className="todo-list"
              setDone={this.setDone}
              todos={this.state.todos}
            />
          </div>
        </div>
        <div className="row">
          <div className="col col-md-12">
            <h2 className="done-title">Done List</h2>
            <TodoList
              className="done-list"
              setTodo={this.setTodo}
              completed={this.state.completed}
            />
          </div>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default Container;

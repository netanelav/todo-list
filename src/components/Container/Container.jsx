import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Container.css";
import TodoList from "../TodoList/TodoList";
import Logo from "../../images/list.svg";

class Container extends Component {
  constructor(props) {
    super(props);
    this.counter = 0;
    this.placeholder = "Add Your Todos...";
    this.getTodo = this.getTodo.bind(this);
    this.getDate = this.getDate.bind(this);
    this.formatCurrentDate = this.formatCurrentDate.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.setDate = this.setDate.bind(this);
    this.setDone = this.setDone.bind(this);
    this.setTodo = this.setTodo.bind(this);
    this.state = {
      todos: [],
      completed: [],
      todo: {
        id: null,
        text: null,
        date: null,
        creation: this.formatCurrentDate(new Date()),
        isStar: false
      }
    };
  }

  getTodo(event) {
    let newTodo = { ...this.state.todo };
    newTodo.text = event.target.value;
    newTodo.id = this.counter;
    this.setState({
      todo: newTodo
    });
  }

  getDate(event) {
    let newTodo = { ...this.state.todo };
    newTodo.date = this.setDate(event.target.value);
    this.setState({
      todo: newTodo
    });
  }

  formatCurrentDate(date) {
    let formattedDate = `${date.getDate()}/${date.getMonth() +
      1}/${date.getFullYear()}`;
    return formattedDate;
  }

  addTodo() {
    this.counter ++;
    if (!document.getElementById("input").value == "") {
      document.getElementById("input").value = "";
      document.getElementById("input-date").value = "";
      this.setState({
        todos: [...this.state.todos, this.state.todo]
      });
    }
  }

  setDate(date) {
    let day = date.substring(8, 10);
    let month = date.substring(5, 7);
    let year = date.substring(0, 4);
    let dueDate = `${day}/${month}/${year}`;
    return dueDate;
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
            id="input"
            type="text"
            placeholder={this.placeholder}
            onChange={this.getTodo}
          />
          <input id="input-date" type="date" onChange={this.getDate} />
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

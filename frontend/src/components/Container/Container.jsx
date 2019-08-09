import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Container.css";
import TodoList from "../TodoList/TodoList";
import Logo from "../../images/list.svg";
import * as api from "../../utils/todolistApi"

class Container extends Component {
  constructor(props) {
    super(props);
    this.id = 0;
    this.placeholder = "Add a to-do...";
    this.getTodo = this.getTodo.bind(this);
    this.getDate = this.getDate.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.setDate = this.setDate.bind(this);
    this.handleStatus = this.handleStatus.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.formatDate = this.formatDate.bind(this);
    this.getCompleted = this.getCompleted.bind(this);
    this.getTodos = this.getTodos.bind(this);
    this.clearInputs = this.clearInputs.bind(this)

    this.state = {
      todos: [],
      todo: {
        id: null,
        text: null,
        date: null,
        creation: this.formatDate(new Date()),
        isStar: false,
        isCompleted: false
      }
    };
  }

  
  componentDidMount() {
    api.getTodos(
      oldTodos => {
        this.setState({ todos: oldTodos.todos });
      },
      error => {
        console.log(error);
      }
    );
  }

  getTodo(event) {
    let newTodo = { ...this.state.todo };
    newTodo.text = event.target.value;
    newTodo.isCompleted = false;
    newTodo.id = this.id;
    this.setState({ todo: newTodo });
  }

  addTodo() {
    this.id++;
    if (!this.input == "") {
      this.clearInputs();
    }
    api.createTodo( this.state.todo,
      newTodo => {
        this.setState({ todos: [...this.state.todos, newTodo] });
      },
      error => {console.log(error);}
    );
  }

  clearInputs() {
    this.input.value = "";
    this.inputDate.value = "";
    this.input.focus();
  }

  getDate(event) {
    let newTodo = { ...this.state.todo };
    newTodo.date = this.setDate(event.target.value);
    this.setState({ todo: newTodo });
  }

  formatDate(date) {
    let formattedDate = `${date.getDate()}/${date.getMonth() +
      1}/${date.getFullYear()}`;
    return formattedDate;
  }

  setDate(date) {
    let day = date.substring(8, 10);
    let month = date.substring(5, 7);
    let year = date.substring(0, 4);
    let dueDate = `${day}/${month}/${year}`;
    return dueDate;
  }

  handleStatus(todoToChange) {
  api.changeStatus(todoToChange,
    success => {
      // todo.isCompleted ? (todo.isCompleted = false) : (todo.isCompleted = true);
      this.setState({ todos: this.state.todos });
    },
    error => { console.log(error);}
  );
  this.setState({ todos: this.state.todos });
}

  getTodos() {
    let todos = [];
    for (let i = 0; i < this.state.todos.length; i++) {
      if (!this.state.todos[i].isCompleted) {
        todos.push(this.state.todos[i]);}}
    return todos;
  }

  getCompleted() {
    let completed = [];
    for (let i = 0; i < this.state.todos.length; i++) {
      if (this.state.todos[i].isCompleted) {
        completed.push(this.state.todos[i]);}}
    return completed;
  }

  handleRemove(todo) {
    api.deleteTodo(todo,
      todo => {
        let copiedArray = [...this.state.todos];
        let index = copiedArray.findIndex(obj => obj.id == todo.id);
        copiedArray.splice(index, 1);
        this.setState({ todos: [...copiedArray] });
      },
      error => {console.log(error);}
    );
  }

  render() {
    return (
      <React.Fragment>
        <div className="row title">
          <img id="logo" src={Logo} />
          <p className="headline">Todo List</p>
        </div>
        <div className="container">
          <input id="input" type="text" placeholder={this.placeholder} onChange={this.getTodo} ref={el => { this.input = el; }}/>
          <input id="input-date" type="date" onChange={this.getDate} ref={el => {this.inputDate = el;}}/>
          <button className="btn" onClick={this.addTodo}>Add Todo</button>
          <div className="row">
            <div className="col col-md-12">
              <h2 className="todo-title">TO-DOS</h2>
              <TodoList className="todo-list" status={this.handleStatus} todos={this.getTodos()} remove={this.handleRemove}/>
            </div>
          </div>
          <div className="row">
            <div className="col col-md-12">
              <h2 className="done-title">COMPLETED ({this.getCompleted().length})</h2>
              <TodoList className="done-list" status={this.handleStatus} completed={this.getCompleted()} remove={this.handleRemove}/>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Container;



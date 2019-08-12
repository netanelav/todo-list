import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Container.css";
import Headline from "../Headline/Headline";
import TodoList from "../TodoList/TodoList";
import * as api from "../../utils/todolistApi"

class Container extends Component {
  constructor(props) {
    super(props);
    this.placeholder = "Add a to-do...";
    this.getTodo = this.getTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.handlePriority = this.handlePriority.bind(this);
    this.handleStatus = this.handleStatus.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.getTodos = this.getTodos.bind(this);
    this.getCompleted = this.getCompleted.bind(this);
    this.clearInputs = this.clearInputs.bind(this)

    this.state = {
      todos: [],
      todo: {
        task: null,
        deadline: null,
        creation: new Date(),
        starred: false,
        completed: false
      }
    };
  }

  componentDidMount() {
    api.getTodos(
      oldTodos => {
        this.setState({ todos: oldTodos.todos });
      },
      error => { console.log(error); }
      );
  }

  getTodo() {
    let newTodo = { ...this.state.todo };
    newTodo.task = this.input.value;
    newTodo.deadline = this.inputDate.value;
    newTodo.completed = false;
    this.setState({ todo: newTodo });
  }

  addTodo() {
    if (this.input.value !== "" && this.inputDate.value !== "") {
      this.clearInputs();
      api.createTodo( this.state.todo,
        newTodo => {
          this.setState({ todos: [...this.state.todos, newTodo] });
        },
        error => {console.log(error); }
      );
    }
  }

  clearInputs() {
    this.input.value = "";
    this.inputDate.value = "";
    this.input.focus();
  }
  
  getTodos() {
    let todos = [];
    for (let i = 0; i < this.state.todos.length; i++) {
      if (!this.state.todos[i].completed) {
        todos.push(this.state.todos[i]);}}
    return todos;
  }

  getCompleted() {
    let completed = [];
    for (let i = 0; i < this.state.todos.length; i++) {
      if (this.state.todos[i].completed) {
        completed.push(this.state.todos[i]);}}
    return completed;
  }
  
  handleStatus(todoToChange) {
    api.changeStatus(todoToChange,
      success => {
        todoToChange.completed ? (todoToChange.completed = false) : (todoToChange.completed = true);
        this.setState({ todos: this.state.todos });
      },
      error => { console.log(error);}  
    );
  }
  
  handlePriority(todoToChange) {
    api.changePriority(todoToChange,
      success => {
        todoToChange.starred ? (todoToChange.starred = false) : (todoToChange.starred = true);
        this.setState({ todos: this.state.todos });
      },
      error => { console.log(error);}  
    );
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
      <Headline/>
        <div className="container">
          <input id="input" type="text" placeholder={this.placeholder} ref={el => {this.input = el;}}/>
          <span>target date:</span>
          <input id="input-date" type="date" onChange={this.getTodo} ref={el => {this.inputDate = el;}}/>
          <button className="btn" onClick={this.addTodo}>Add Todo</button>
          <div className="row">
            <div className="col col-md-12">
              <h2 className="todo-title">TO-DOS</h2>
              <TodoList className="todo-list" priority={this.handlePriority} status={this.handleStatus} todos={this.getTodos()} remove={this.handleRemove}/>
            </div>
          </div>
          <div className="row">
            <div className="col col-md-12">
              <h2 className="done-title">COMPLETED ({this.getCompleted().length})</h2>
              <TodoList className="done-list" priority={this.handlePriority} status={this.handleStatus} completed={this.getCompleted()} remove={this.handleRemove}/>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Container;



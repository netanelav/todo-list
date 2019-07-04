import React from "react";
import $ from 'jquery';
import star from "../../images/star.svg";
import starSelected from "../../images/star-selected.png";

class TodoList extends React.Component {
  constructor() {
    super();
    this.doneCounter = 0;
    this.redoCounter = 0;
    this.deleteTodo = this.deleteTodo.bind(this);
    this.doneTodo = this.doneTodo.bind(this);
    this.returnTodo = this.returnTodo.bind(this);
    this.starUnstar = this.starUnstar.bind(this);
  }

  deleteTodo(event) {
    event.target.parentElement.remove();
  } 

  doneTodo(event) {
    // let todo = e.target.parentElement;
    // todo.setAttribute("data-type", "done");
    this.deleteTodo(event);
    // this.props.handleNewDoneTodo(Object.assign({}, this.props.todos);
    this.props.handleNewDoneTodo(Object.assign({}, this.props.todos[this.doneCounter]));
    this.doneCounter ++;
  }

  returnTodo(event) {
    // let todo = e.target.parentElement;
    // todo.setAttribute("data-type", "todo");
    this.deleteTodo(event);
    // this.props.handleNewTodo(Object.assign({}, this.props.completed));

    this.props.handleNewTodo(Object.assign({}, this.props.completed[this.redoCounter]));
    this.redoCounter++;
  }

  starUnstar(e) {
    let list = $(e.target).parents('ul#todo-list') ? "todos" : "completed"
    let itemIndex = $(e.target).parent().attr('data-key');
    this.props.handleStarUnstar(list, itemIndex);
  }

  render() {
    if (this.props.todos && this.props.todos.length > 0) {
      return (
        <ul id="todo-list">
          {this.props.todos.map((item, index) => (
            <li data-key={index} key={index}>
              <input onClick={this.starUnstar} type="image" className="icon" src={item.starred ? starSelected : star} />
              <input onClick={this.doneTodo} type="checkbox" />
              {`${index} Task: ${item.text} Due time: ${item.date}`}
              <button onClick={this.deleteTodo} type="checkbox">X</button>
            </li>
          ))}
        </ul>
      );
    }
    if (this.props.completed && this.props.completed.length > 0) {
      return (
        <ul id="done-list">
          {this.props.completed.map((item, index) => (
            <li key={index}>
              <input onClick={this.returnTodo} type="checkbox" />
              {`${item.text} Due time: ${item.date}`}
              <button onClick={this.deleteTodo}>X</button>
            </li>
          ))}
        </ul>
      );
    }
    return <div>Waiting for your todos...</div>;
  }
}

export default TodoList;

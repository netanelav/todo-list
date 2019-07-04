import React from "react";
import $ from 'jquery';
import star from "../../images/star1.png";
import starSelected from "../../images/star-selected1.png";
import deleteicon from "../../images/remove1.png";

class TodoList extends React.Component {
  constructor() {
    super();
    this.deleteTodo = this.deleteTodo.bind(this);
    this.doneTodo = this.doneTodo.bind(this);
    this.returnTodo = this.returnTodo.bind(this);
    this.starUnstar = this.starUnstar.bind(this);
  }

  

  deleteTodo(e) {
    e.target.parentElement.remove();
  }

  doneTodo(e) {
    let todo = e.target.parentElement;
    todo.setAttribute("data-type", "done");
    this.deleteTodo(e);
    this.props.handleNewDoneTodo(Object.assign({}, this.state));
  }

  returnTodo(e) {
    let todo = e.target.parentElement;
    todo.setAttribute("data-type", "todo");
    this.deleteTodo(e);
    this.props.handleNewTodo(Object.assign({}, this.state));
  }

  starUnstar(e) {
    let list = $(e.target).parents('ul#todo-list') ? "todos" : "completed"
    console.log(list)
    let itemIndex = $(e.target).parent().attr('data-key');
    this.props.handleStarUnstar(list, itemIndex);
  }

  render() {
    if (this.props.todos && this.props.todos.length > 0) {
      return (
        <ul id="todo-list">
          {this.props.todos.map((item, index) => (
            <li data-key={index} key={index}>
              <img onClick={this.starUnstar} className="icon" src={item.starred ? starSelected : star} />
              <input onClick={this.doneTodo} type="checkbox" />
              {`Task: ${item.text} Due time: ${item.date}`}
              <img className="icon" onClick={this.deleteTodo} type="checkbox" src={deleteicon} />
            </li>
          ))}
        </ul>
      );
    }
    if (this.props.completed && this.props.completed.length > 0) {
      return (
        <ul id="done-list">
          {this.props.completed.map((item, index) => (
          <li data-key={index} key={index}>
            <img onClick={this.starUnstar} className="icon" src={item.starred ? starSelected : star} />
            <input onClick={this.returnTodo} type="checkbox" />
            {`Task: ${item.text} Due time: ${item.date}`}
            <img className="icon" onClick={this.deleteTodo} type="checkbox" src={deleteicon} />
            </li>
          ))}
        </ul>
      );
    }
    return <div>No todos yet</div>;
  }
}

export default TodoList;

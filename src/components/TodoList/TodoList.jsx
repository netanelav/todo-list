import React from "react";
import $ from 'jquery';
import star from "../../images/star1.png";
import starSelected from "../../images/star-selected1.png";
import deleteicon from "../../images/remove1.png";
import "./TodoList.css";

class TodoList extends React.Component {
  constructor() {
    super();
    this.doneCounter = 0;
    this.redoCounter = 0;
    this.deleteTodo = this.deleteTodo.bind(this);
    this.doneTodo = this.doneTodo.bind(this);
    this.returnTodo = this.returnTodo.bind(this);
    this.starItem = this.starItem.bind(this);
  }

  deleteTodo(event) {
    event.target.parentElement.remove();
  }

  doneTodo(event) {
    // let todo = e.target.parentElement;
    // todo.setAttribute("data-type", "done");
    this.deleteTodo(event);
    // this.props.handleNewDoneTodo(Object.assign({}, this.props.todos);
    this.props.handleNewDoneTodo(
      Object.assign({}, this.props.todos[this.doneCounter])
    );
    this.doneCounter++;
  }

  returnTodo(event) {
    // let todo = e.target.parentElement;
    // todo.setAttribute("data-type", "todo");
    this.deleteTodo(event);
    // this.props.handleNewTodo(Object.assign({}, this.props.completed));

    this.props.handleNewTodo(
      Object.assign({}, this.props.completed[this.redoCounter])
    );
    this.redoCounter++;
  }

  starItem(e) {
    let list = $('ul#todo-list').find(e.target).length ? "todos" : "completed";
    let itemIndex = $(e.target)
      .parent()
      .attr("data-key");
    this.props.handleStar(list, itemIndex);
  }

  render() {
    if (this.props.todos && this.props.todos.length > 0) {
      return (
        <div className="row no-gutters">
          <div className="col col-md-12">
            <ul id="todo-list">
              {this.props.todos.map((item, index) => (
                <li data-key={index} key={index}>
                <img onClick={this.starItem} className="icon star" src={item.starred ? starSelected : star} />
                <span className="checkbox-styled">
                  <input id={`checkbox${index}`} type="checkbox" style={{borderColor: "red"}} />
                  <label htmlFor={`checkbox${index}`} onClick={this.doneTodo}></label>
                </span>
                <p className="item-title">{`${item.text}`}</p>
                {/* {`Task: ${item.text} Due time: ${item.date}`} */}
                <img className="icon remove" onClick={this.deleteTodo} src={deleteicon} />
            </li>
          ))}
        </ul>
      </div>
    </div>
    );
    }
    if (this.props.completed && this.props.completed.length > 0) {
      return (
        <div className="row">
          <div className="col col-md-12">
            <ul id="done-list">
              {this.props.completed.map((item, index) => (
              <li data-key={index} key={index}>
                <img onClick={this.starItem} className="icon star" src={item.starred ? starSelected : star} />
                <span className="checkbox-styled">
                  <input id={`checkbox${index}`} type="checkbox" style={{borderColor: "red"}} />
                  <label htmlFor={`checkbox${index}`} onClick={this.returnTodo}></label>
                </span>
                <p className="item-title">{`${item.text}`}</p>
                {/* {`Task: ${item.text} Due time: ${item.date}`} */}
                <img className="icon remove" onClick={this.deleteTodo} src={deleteicon} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        );
    }
    return <div>Waiting for your todos...</div>;
  }
}

export default TodoList;

import React from "react";
import "./TodoForm.css";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      text: "",
      date: ""
    };
  }

  handleAddTodo() {
    this.props.handleNewTodo(Object.assign({}, this.state));
  }

  handleInputChange(e) {
    let value = e.target.value;
    let inputType = e.target.type;
    this.setState({
      [inputType]: value
    });
  }

  render() {
    return (
      <div>
        <input onChange={this.handleInputChange} type="text" placeholder="Add Todo..."/>
        <input type="date" />
        <button onClick={this.handleAddTodo}>Add</button>
      </div>
    );
  }
}

export default TodoForm;

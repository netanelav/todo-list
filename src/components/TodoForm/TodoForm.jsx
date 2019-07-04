import React from "react";
import "./TodoForm.css";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      text: "",
      date: "",
      starred: false
    };
  }

  handleAddTodo() {
    this.props.handleNewTodo(Object.assign({}, this.state));
  }

  handleInputChange(event) {
    let value = event.target.value;
    let inputType = event.target.type;
    this.setState({
      [inputType]: value
    });
  }

  render() {
    return (
      <div className="form-container">
        <input className="input" onChange={this.handleInputChange} type="text" placeholder="Add Todo..."/>
        {/* <input type="date" /> */}
        <button className="btn" onClick={this.handleAddTodo}>Add Todo</button>
      </div>
    );
  }
}

export default TodoForm;

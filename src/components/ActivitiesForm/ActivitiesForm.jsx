import React from "react";
import "./ActivitiesForm.css";

class ActivitiesForm extends React.Component {
  constructor() {
    super();
    this.handleSubmitActivity = this.handleSubmitActivity.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      what: "",
      when: "",
      where: ""
    };
  }

  handleSubmitActivity(e) {
    this.props.handleNewActivity(Object.assign({}, this.state));
  }

  handleInputChange(e) {
    let inputValue = e.target.value;
    let stateKey = e.target.getAttribute("data-bind");
    this.setState({
      [stateKey]: inputValue
    });
  }

  render() {
    return (
      <div>
        <input
          className="activity-input"
          data-bind="what"
          onChange={this.handleInputChange}
          type="text"
          placeholder="what"
        />
        <input
          className="activity-input"
          data-bind="when"
          onChange={this.handleInputChange}
          type="text"
          placeholder="when"
        />
        <input
          className="activity-input"
          data-bind="where"
          onChange={this.handleInputChange}
          type="text"
          placeholder="where"
        />
        <button onClick={this.handleSubmitActivity}>Submit activity</button>
      </div>
    );
  }
}

export default ActivitiesForm;

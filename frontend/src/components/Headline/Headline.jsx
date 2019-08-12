import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Headline.css";
import Logo from "../../images/list.svg";

class Headline extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="row title align-items-center">
          {/* <div className="col-2">
            <img id="logo" src={Logo} />
          </div> */}
          <div className="col-4">
            <p className="headline">Todo List</p>
          </div>
          <div className="col-1 offset-7">
            <a class="logout-btn" href="{% url 'logout' %}">Logout</a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Headline;



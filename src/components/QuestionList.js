import React, { Component } from "react";
import { connect } from "react-redux";

class QuestionList extends Component {
  render() {
    return (
      <div className="tab-frame">
        <input type="radio" name="tab" id="tab1"></input>
        <label for="tab1">tab1</label>

        <input type="radio" name="tab" id="tab2"></input>
        <label for="tab2">tab2</label>

        <div className="tab">sample content 1</div>
        <div className="tab">sample content 2</div>
      </div>
    );
  }
}

export default connect()(QuestionList);

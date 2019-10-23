import React, { Component } from "react";
import { connect } from 'react-redux'
import { handleInitialData } from "../actions/shared";
import Nav from "./Nav";
import QuestionList from "./QuestionList";
import '../App.css';
import LoadingBar from 'react-redux-loading'

class App extends Component {
  
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div>
        <LoadingBar />
        <Nav />
        <QuestionList />
      </div>
    );
  }
}


export default connect()(App);

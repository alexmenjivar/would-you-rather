import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import Nav from "./Nav";
import QuestionList from "./QuestionList";
//import Results from './Results'
//import Question from './Question'
import NewQuestion from "./NewQuestion";
import LeaderBoard from "./LeaderBoard";
import Login from './Login'
//import LeaderCard from "./LeaderCard";
//import NotFound from './NotFound'
//import Answer from './Answer'
import "../App.css";
import LoadingBar from "react-redux-loading";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <Nav />
          {this.props.loading === true ? null : (
            <div>
              <Route path='/login' component={Login} />
              <Route path='/' exact component={QuestionList} />
              <Route path='/new' component={NewQuestion} />
              <Route path='/leaderboard' component={LeaderBoard} />
            </div>
          )}
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    loading: Object.keys(users).length === 0
  };
}

export default connect(mapStateToProps)(App);

import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import Nav from "./Nav";
import QuestionList from "./QuestionList";
import NewQuestion from "./NewQuestion";
import LeaderBoard from "./LeaderBoard";
import Login from './Login'
import NotFound from './NotFound'
import "../App.css";
import LoadingBar from "react-redux-loading";
import QuestionContainer from "./QuestionContainer";
import PrivateRoute from './PrivateRoute'

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
            <Switch>
              <Route path='/login' component={Login} />
              <PrivateRoute path='/' exact component={QuestionList} />
              <PrivateRoute path='/new' component={NewQuestion} />
              <PrivateRoute path='/leaderboard' component={LeaderBoard} />
              <PrivateRoute path='/questions/:question_id' component={QuestionContainer} />
              <Route path='*' component={NotFound} />
            </Switch>
          )}
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: Object.keys(state.users).length === 0 || Object.keys(state.questions).length === 0
  };
}

export default connect(mapStateToProps)(App);

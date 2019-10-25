import React, { Component } from "react";
import { connect } from 'react-redux'
import { handleInitialData } from "../actions/shared";
import Nav from "./Nav";
import QuestionList from "./QuestionList";
//import Results from './Results'
//import Question from './Question'
//import NewQuestion from "./NewQuestion";
//import Login from './Login'
//import LeaderCard from './LeaderCard'
//import NotFound from './NotFound'
//import Answer from './Answer'
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
        {this.props.loading === true
        ? null
        : <QuestionList />
        }
      </div>
    );
  }
}

function mapStateToProps({authedUser}){
  return{
    loading: authedUser === null
  }
}


export default connect(mapStateToProps)(App);

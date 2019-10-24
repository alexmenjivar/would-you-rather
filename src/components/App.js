import React, { Component } from "react";
import { connect } from 'react-redux'
import { handleInitialData } from "../actions/shared";
import Nav from "./Nav";
//import QuestionList from "./QuestionList";
import Results from './Results'
//import NewQuestion from "./NewQuestion";
import LeaderCard from './LeaderCard'
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
        : <LeaderCard />
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

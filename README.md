This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Would You Rather Project

Web app that lets a user play the “Would You Rather?” game. The game goes like this: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”. Answering "neither" or "both" is against the rules.

In this app, users will be able to answer questions, see which questions they haven’t answered, see how other people have voted, post questions, and see the ranking of users on the leaderboard.

## To get started 
* Clone the project with `git clone https://github.com/alexmenjivar/would-you-rather.git`
* Move to rhe directory `cd would-you-rather`
* Install all project dependencies with `npm install`
* Start the development server with `npm start`

## Important

The project uses 2 third-party libraries that use deprecated lifecycle method (componentWillReceiveProps) and generate some warnings when the app runs. To fix this, is require to change the key and function `componentWillReceiveProps` to `UNSAFE_componentWillReceiveProps` in the following files:
* project-dir/node_modules/react-redux-loading/build/loading_bar.js
* project-dir/node_modules/rc-animate/Animate.js

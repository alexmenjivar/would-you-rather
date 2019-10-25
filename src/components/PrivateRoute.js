import React, { Component } from "react";
import {
    BrowserRoute as Route,
    Route,
    Link,
    Redirect
} from 'react-router-dom'

const isLogin = () => {
    if (true===true) { //validar usuario
        return true;
    }
    return false;
}

export const PrivateRoute = ({component: Component, ...rest}) =  (
    <Route 
        {...rest}
        render = {(props) => (
           isLogin() === true
           ? <Component {...props} />
           : <Redirect to='/login' />
        )}
    
    />
)
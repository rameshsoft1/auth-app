import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import SignUp from '../User/SignUp/SignUp';
import Login from '../User/Login/Login';
import NavigationBar from '../../component/NavigationBar/NavigationBar';


class DashBoard extends Component{

    render(){
        return(
            <div>
               <BrowserRouter>
                <NavigationBar />
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={SignUp} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}


export default DashBoard;
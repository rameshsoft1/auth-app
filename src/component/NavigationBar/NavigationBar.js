import React from 'react';
import {NavLink} from 'react-router-dom';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

class NavigationBar extends React.Component{
    handleClick = (event) =>{
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

    render(){
        return(
            <Breadcrumbs aria-label="breadcrumb">
                <NavLink to="/login" className="btn btn-outline-primary" >Login</NavLink>
                <NavLink to="/signup" className="btn btn-primary" >Signup</NavLink>
            </Breadcrumbs>
         )
    }
}

export default NavigationBar;
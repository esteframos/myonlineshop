import React from 'react';
import {Redirect, Route} from "react-router-dom";


export default function AuthRoute(props) {
  
    let ecommerceUserAdmin  = localStorage.getItem("ecommerceUserAdmin");
    if(ecommerceUserAdmin != ""){
        // user is logged in
        return (
            <Route to={props.path} exact>
                {props.children}
            </Route>
        )
    }else{
        // no user logged in
        return(
            <Redirect to="/administrator/login" />
        )
    }

}  
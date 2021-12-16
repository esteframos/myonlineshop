import React from 'react';
import {Redirect, Route} from "react-router-dom";


export default function GuestRoute(props) {
  
    if(localStorage.getItem('ecommerceUserAdmin') == ""){


        return (
            <Route to={props.path} exact>
                 {props.children} 
            </Route>
        )

    }else{

        return (
             <Redirect to="/administrator/home" exact/>
        )

    }

}  
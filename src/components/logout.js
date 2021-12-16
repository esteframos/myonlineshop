import React from 'react';
import {Redirect, Route} from "react-router-dom";


export  function Logout() {

    localStorage.setItem("ecommerceUserCustomer", "");
    return (
        <>
            <Redirect to="/login" />
        </>
    )
}
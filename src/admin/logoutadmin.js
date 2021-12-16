import React from 'react';
import {Redirect, Route} from "react-router-dom";


export  function LogoutAdmin() {

    localStorage.setItem("ecommerceUserAdmin", "");
    return (
        <>
            <Redirect to="/administrator/login" />
        </>
    )
}
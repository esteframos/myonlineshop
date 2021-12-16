import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


let ecommerceUserAdmin  = localStorage.getItem("ecommerceUserAdmin");
if(ecommerceUserAdmin == null){
  localStorage.setItem("ecommerceUserAdmin", "");
}


let ecommerceUserCustomer = localStorage.getItem("ecommerceUserCustomer");
if(ecommerceUserCustomer == null){
  localStorage.setItem("ecommerceUserCustomer", "");
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
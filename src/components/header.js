import React, {useState, useRef, useEffect} from "react";
import { Row, Col, Modal, Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
import If, { Else } from 'if-else-react';
import axios from 'axios';

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

export function Header() {

    const [show, setShow] = useState(false);
    const [nameuser, setNameuser] = useState("");


  if(localStorage.getItem("ecommerceUserCustomer")  != ""){
      
                const config = {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "JWT " + localStorage.getItem('ecommerceUserCustomer')
                    },
                    url: "https://ecomerce-master.herokuapp.com/api/v1/user/me"
                };

                axios(config)
                .then(function (response) {
                    setNameuser(response.data.user.first_name+" "+response.data.user.last_name);
                  //setNameuser(response.data.name );
                })
                .catch(function (error) {
                    //toast.error("Error con el usuario");
                }
                );
  }
  
  return (
        <>



        <div className="header">

            <Row>
                <Col md={4}>
                                        
                    <div className="container-social">

                        <table><tbody><tr>

                            <td>
                                <Link to="/" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#004AAD" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                                </svg>
                                </Link>
                            </td>
                            <td>
                                <Link to="/" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#004AAD" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <rect x="4" y="4" width="16" height="16" rx="4" />
                                <circle cx="12" cy="12" r="3" />
                                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                                </svg>
                                </Link>
                            </td>
                            </tr></tbody></table>

                </div>


                </Col>

                        <Col md={4}>

                        <Link to="/">
                            <center>
                                <img src = "https://cdn.glitch.me/f11042f5-ca2c-4525-9d33-4dcce3e421fd%2FLogo_Ecommerce.png?v=1639373568629" width="90px" height="90px" />
                            </center>
                        </Link>

                        </Col>

                        <Col md={4}>


                <div className="container-cart">

                        <Link to="/carrito">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#004AAD" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="6" cy="19" r="2" />
                        <circle cx="17" cy="19" r="2" />
                        <path d="M17 17h-11v-14h-2" />
                        <path d="M6 5l14 1l-1 7h-13" />
                        </svg>
                        

                        <span className="counter-cart">{localStorage.getItem("cart_counter")}</span>
                        </Link>


                    <If condition={localStorage.getItem("ecommerceUserCustomer") == "" }>
                        <Link to="/login" className="btn-login">Ingresar</Link>
                        <Link to="/signup" className="btn-login">Registrarse</Link>
                    <Else />
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#004AAD" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="12" cy="7" r="4" />
                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                        </svg>
                        Hola, {nameuser}

                        <Link to="/logout"  className="btn-logout">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-logout" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#004AAD" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                        <path d="M7 12h14l-3 -3m0 6l3 -3" />
                        </svg>
                        </Link>

                    </If>

                        </div>

                        </Col>
                    </Row>

        </div>



        </>
    );
}

export default Header;



import React, {useState, useRef, useEffect} from "react";
import { Row, Col, Form} from 'react-bootstrap';
import axios from 'axios';
import {Footer} from "../components/footer";
import Header from "../components/header";
import {toast} from 'react-toastify';
import { Link, useHistory } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

export function Login() {

    let history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   
    const submitHandler = () => {
        
        if(email == ""){
            toast.warning('Debe ingresar su email');
            return;
        }
        
        if(password == ""){
            toast.warning('Debe ingresar su contraseña');
            return;
        }
      
        const data = JSON.stringify({
            "email"     : email,
            "password"  : password
        });

        const config = {
            method: "post",
            url: "https://ecomerce-master.herokuapp.com/api/v1/login",
            headers: {
              "Content-Type": "application/json"
            },
            data: data
        };

        axios(config)
        .then(function (response) {
            localStorage.setItem("ecommerceUserCustomer", response.data.token);
            toast.success("Ha ingresado correctamente, happy shopping!");

            history.push("/home");
        })
        .catch(function (error) {
            toast.error(error.response.data.message);
        });

    }

    return(
        <>
            <Header />
            <br/>
            <br/>
            <br/>
            <br/>

            <div className="container register">
                <div className="row">

                    <div className="col-md-3 register-left">
                        <h3>Bienvenido(a)</h3>
                        <p>Para poder realizar su compra en <b>My online shop</b> debe iniciar sesión</p>

                        <center>
                            <Link to="/signup">
                            <button class="btnRegister btnRegisternew" name="" value="Login">Registrarse</button>
                            </Link>
                        </center>    
                            <br/>

                    </div>

                    <div className="col-md-9 register-right">
                        
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 className="register-heading">Iniciar Sesión</h3>
                                <div className="row register-form">

                                    <div class="col-md-6 form_login">
                                        <div className="form-group">
                                            <label for="email">Email</label>
                                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" className="form-control" placeholder="Email"/>
                                        </div>
                                    </div>  

                                    <div className="col-md-6 form_login">
                                        <div className="form-group">
                                            <label for="email">Contraseña</label>
                                            <input  value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" className="form-control" placeholder="Password"/>
                                        </div>
                                    </div>                                   

                                    <button onClick={submitHandler} className="btnRegister">Iniciar Sesión</button>
                                        
                                    </div>
                                </div>
                            </div>

                    </div>
                </div>
            </div>

        </>
    );

}
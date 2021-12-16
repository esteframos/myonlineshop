import React, {useState, useRef, useEffect} from "react";
import { Row, Col, Form} from 'react-bootstrap';
import axios from 'axios';
import {Footer} from "../components/footer";
import Header from "../components/header";
import {toast} from 'react-toastify';
import { useHistory , Link} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

toast.configure()


export function Signup() {
    let history = useHistory();

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [brithday, setBrithday] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const submitHandler = () => {
        
        if(firstname == ""){
            toast.warning('Debe ingresar su nombre');
            return;
        }
        if(lastname == ""){
            toast.warning('Debe ingresar su apellido');
            return;
        }
        if(brithday == ""){
            toast.warning('Debe ingresar su fecha de cumpleaños');
            return;
        }
        if(gender == ""){
            toast.warning('Debe ingresar su género');
            return;
        }
        if(email == ""){
            toast.warning('Debe ingresar su email');
            return;
        }
        if(password == ""){
            toast.warning('Debe ingresar su password');
            return;
        }

        
        const data = JSON.stringify({
            "first_name": firstname,
            "last_name" : lastname,
            "birth_date": brithday,
            "gender"    : gender,
            "email"     : email,
            "password"  : password
        });

        const config = {
            method: "post",
            url: "https://ecomerce-master.herokuapp.com/api/v1/signup",
            headers: {
              "Content-Type": "application/json"
            },
            data: data
        };

        axios(config)
        .then(function (response) {
            toast.success("Te has registrado Satisfactoriamente, dirígete a Login");
            history.push("/login");
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
                        <p>Para poder realizar su compra en <b>My online shop</b> debe registrarse</p>
                        <br/>
                        <center>
                            <Link to="/login">
                            <button class="btnRegister btnRegisternew" name="" value="Login">Iniciar</button>
                            </Link>
                        </center>  
                    </div>

                    <div className="col-md-9 register-right">
                        
                    

                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 className="register-heading">Nuevo usuario</h3>
                                <div className="row register-form">
                                   
                                    <div className="col-md-6 form_login">

                                        <div className="form-group">
                                            <label for="firstName">Nombre</label>
                                            <input value={firstname} onChange={(e) => setFirstName(e.target.value)} type="text" id="first_name" className="form-control" placeholder="Nombre" />
                                        </div>
                                    </div>

                                    <div className="col-md-6 form_login">
                                        <div class="form-group">
                                            <label for="lastname">Apellidos</label>
                                            <input value={lastname} onChange={(e) => setLastName(e.target.value)} type="text" id="last_name" class="form-control" placeholder="Apellidos"/>
                                        </div>
                                    </div>

                                    <div className="col-md-6 form_login">
                                        <div className="form-group">
                                            <label for="birth_day">Cumpleaños</label>
                                            <input value={brithday} onChange={(e) => setBrithday(e.target.value)} type="date" className="form-control" id="birth_day" />
                                        </div>  
                                    </div>


                                    <div className="col-md-6 form_login">
                                        <div className="form-group">
                                            <label >Género</label>
                                            <select class="form-control" value={gender} onChange={(e) => setGender(e.target.value)} >
                                                <option value="">Seleccionar</option>
                                                <option value="M">Masculino</option>
                                                <option value="F">Femenino</option>
                                            </select>
                                        </div>
                                    </div>


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

                                
                                    <button onClick={submitHandler} className="btnRegister">Registrar</button>
                                        
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>

        </>
    );

}
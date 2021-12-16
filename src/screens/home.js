import React, {useState, useRef, useEffect} from "react";
import { Row, Col, Card} from 'react-bootstrap';

import {Footer} from "../components/footer";
import Header from "../components/header";
import CardProduct from "../components/cardproducto";


import axios from 'axios';

export function Home() {

    const [productos, setProductos] = useState([]);
    const [productostotal, setProductostotal] = useState([]);


    useEffect(() => {
      load_data()
    }, [])

    let textInput = React.createRef();
    
    const load_data = () => {
      axios.get('https://ecomerce-master.herokuapp.com/api/v1/item')
      .then(res => {
        let data = res.data;
        let data_ = data.slice(150,170);
        setProductos(data_);
        setProductostotal(data);
      });
  
    }


    const handleBusqueda = () => {
      if(textInput.current.value != ""){

        let quickResult = productostotal.filter(obj => Object.values(obj).some(val => val?val.toString().toLowerCase().includes(textInput.current.value):false));
        setProductos( quickResult );
      }
    };


  return (
    <>
        <Header />


        <br />
        <br />
        <br />
        <br />
        <br />
        

        <div className="banner-header">
          <center>
          <img className="img-banner" src="https://cdn.glitch.me/f11042f5-ca2c-4525-9d33-4dcce3e421fd/image832.png?v=1639625597958" />
          </center>
          <div className="container-search">
            <center>
              <input ref={textInput} type="text" className="search-input" placeholder="Buscar producto..." />
              <button className="search-button" onClick={handleBusqueda}>Buscar</button>
            </center>
          </div>

        </div>


        <br />
        <br />
        <div className="listado-productos">
        <Row>  
        {productos.map((i) => (
             <Col md={3}>
                <CardProduct producto={i} />  
          </Col>
          ))}
        </Row>
        </div>

        <Footer/>
    
    </>
  );
}
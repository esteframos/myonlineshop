import React, {useState, useRef, useEffect} from "react";
import { Row, Col, Card} from 'react-bootstrap';

import {Footer} from "../components/footer";
import {HeaderAdmin} from "./headeradmin";
import CardProduct from "../components/cardproducto";


import axios from 'axios';

export function ListadoProductos() {


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
        <HeaderAdmin />

        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="container-search">
          <center>
            <input ref={textInput} type="text" className="search-input" placeholder="Buscar producto..." />
            <button className="search-button" onClick={handleBusqueda}>Buscar</button>
          </center>
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
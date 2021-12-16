import React, {useState, useRef, useEffect} from "react";
import { Row, Col, Card} from 'react-bootstrap';

import {Footer} from "../components/footer";
import {HeaderAdmin} from "./headeradmin";
import CardProduct from "../components/cardproducto";


import axios from 'axios';

export function ListadoProductos() {

    const [productos, setProductos] = useState([]);

    let textInput = React.createRef();

    axios.get('https://ecomerce-master.herokuapp.com/api/v1/item')
    .then(res => {
      let data = res.data;
      data = data.slice({});
      setProductos(data);
    });

    const handleBusqueda = () => {
      if(textInput.current.value != ""){
        //search value in product object
        

        let data_p = productos.findIndex(x => x.product_name == textInput.current.value );
        console.log(data_p);
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
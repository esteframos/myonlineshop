import React, {useState, useRef, useEffect} from "react";
import { Row, Col, Card} from 'react-bootstrap';
import { Link, useParams} from "react-router-dom";
import {Footer} from "../components/footer";
import Header from "../components/header";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

toast.configure();

export function Product() {
    let { id } = useParams();

    const [product, setProduct] = useState({});
    const [cantidadproducto, setCantidadproducto] = useState(1);


    axios.get('https://ecomerce-master.herokuapp.com/api/v1/item/' + id)
     .then(res => {
       let data = res.data;
       setProduct(data);
    });

    const contadorminus = () => {
        let aux_value = cantidadproducto - 1;
        if(aux_value >= 1){
            setCantidadproducto(aux_value);
        }
    }

    const contadorplus = () => {
        let aux_value = cantidadproducto + 1;
        setCantidadproducto(aux_value);
    }


    const addProduct = () => {
        if( localStorage.getItem("ecommerceUserCustomer")  == ""){
            toast.warning('Debe iniciar sesión para poder agregar productos al carrito');
            return;
        }else{
            
            var productos_cart = JSON.parse(localStorage.getItem("productos_cart") || "[]");
            productos_cart.push(product);
            localStorage.setItem("productos_cart", JSON.stringify(productos_cart));




            let cart_counter = localStorage.getItem("cart_counter");
            if(cart_counter == null){
            localStorage.setItem("cart_counter", 0);
            }else{
                cart_counter = parseInt(cart_counter) + 1;
                localStorage.setItem("cart_counter", cart_counter);
            }

            toast.success('Producto agregado al carrito');
        }
    }

return (
<>

<Header />

<br />
<br />
<br />
<br />
<br />
<br />
    <div className="container-main">
        <Row>  
            <Col md={5}>
             <img className="product-detail-img" src={product.image} />  
            </Col>

            <Col md={7}>

             <span className="product-name-detail"><strong>{product.product_name}</strong></span>
             <br />
             <span className="product-price-detail"><strong>MXN${product.price}</strong></span>
                      
             <br />
             <span className="product-sku-detail">SKU: {product.sku}</span>
                <br />
             <span className="product-description-detail">{product.description}</span>
             <br />
             <span className="product-category-detail">Categoría: {product.category}</span>
             <br />
             <span className="product-brand-detail">Marca: {product.brand}</span>
             <br />
             
             <span className="product-cantidad-detail">Cantidad: {product.cantidad}</span>
             <br />
             
             

            <div className="i2b-spinner" data-js="spinner-price">
                 <button className="isp-btn" onClick={contadorminus}>-</button>
                 <input class="isp-text" type="text" name="qty" value={cantidadproducto} title="Cantidad" />
                 <button className="isp-btn" onClick={contadorplus}>+</button>
            </div>

            <br />
            <button className="btn-login" onClick={addProduct}>Agregar al carrito</button>

            </Col>
        </Row>
    </div>


<br />
<br />
<Footer/>
</>
);

}
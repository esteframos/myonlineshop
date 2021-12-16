import React from "react";
import {
    Link
  } from "react-router-dom";

export default function CardProducto(props) {

    return (

        <div className="card-producto">   
           <img className="img-product" src={props.producto.image} alt=""/>

           <div className="info-product">
           <center>
               <Link to={"/producto/"+props.producto._id}>
                <span className="principal-color principal-font title-product-card">{props.producto.product_name}</span>
               </Link>
            </center>
           <center><span className="principal-font final-price">MXN$ {props.producto.price}</span> </center>
           <Link to={"/producto/"+props.producto._id}>
           <button className="btn-add-cart">Ver producto</button>
           </Link>
          </div> 
        </div>

    );

}
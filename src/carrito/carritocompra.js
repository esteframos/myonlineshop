import { createContext, useContext, useState, useEffect, useLayoutEffect  } from "react";
import {Footer} from "../components/footer";
import Header from "../components/header";

import { Link, useHistory } from "react-router-dom";

export default function CarritoCompra() {
  // Este state se inicializa con lo que haya en localStorage (si es que hay algo con el key de "carrito")
  let history = useHistory();

  const [carrito, setCarrito] = useState([]);

  // const [carrito, setCarrito] = useState(
  //   // Checamos si ya hay carrito en localStorage y lo parseamos si si, si no lo inicializamos con un objeto
  //   // literal con productos como un array vacío
  //   localStorage.getItem("productos_cart")
  //     ? JSON.parse(localStorage.getItem("productos_cart"))
  //     : { productos: [] }
  // );



  const [total, setTotal] = useState(0);

 

  useEffect(() => {

    setCarrito(localStorage.getItem("productos_cart")
    ? JSON.parse(localStorage.getItem("productos_cart"))
    : { productos: [] });




  }, []);


useEffect(() => {

  let total_ = 0;

  carrito.map((i) => {
  
    total_ = total_ + i.price;
    console.log(total_);
  
  });
  console.log(total_);
  setTotal(total_);

}, [carrito]);


  const limpiarCarrito = () => {
    localStorage.setItem("productos_cart", "[]");
    setCarrito({ productos: [] });
    localStorage.setItem("cart_counter", 0);
    history.push("/home");
  }


  return (
    <>
      <Header />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

    
    <div className="row listado_carritos">
   
    {carrito && carrito.map && carrito.map((i) => (
      <div className="col-md-12 item-cart-product">
          
          <strong>{i.product_name}</strong>
          <br />
         MNX$ {i.price}

      </div>
      ))}


    </div>
    
    <br/>
    <br/>
    <br/>

    <div className="total-carrito"><strong>Total: MNX$ {total}</strong></div>

    <br/>
    <br/>
    <button onClick={limpiarCarrito} className="btn-limpiar">Limpiar carrito</button>

    </>
  );
}

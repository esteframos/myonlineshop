import React, {useState, useRef, useEffect} from "react";
import { Row, Col} from 'react-bootstrap';
import {
Link
  } from "react-router-dom";


export function HeaderAdmin() {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



  return (
        <>
        <div className="header">

<Row>
                        <Col md={2}>

                       
                           
<div className="container-social">
   <Link to="/administrador/home">
    <img src = "https://cdn.glitch.me/f11042f5-ca2c-4525-9d33-4dcce3e421fd%2FLogo_Ecommerce.png?v=1639373568629" width="90px" height="90px" />
  </Link>

</div>


                        </Col>

                        <Col md={8}>
<br/>
<br/>

                          <Link to="/administrator/nuevo-producto"><center>Crear nuevo producto</center></Link>
                        

                        </Col>

                        <Col md={2}>


<div className="container-cart">
                    



<Link to="/administrator/logout">
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-logout" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#004AAD" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
  <path d="M7 12h14l-3 -3m0 6l3 -3" />
</svg>
</Link>

                        </div>

                        </Col>
                    </Row>

        </div>




        </>
    );
}

export default HeaderAdmin;



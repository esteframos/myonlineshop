import React, {useState, useRef, useEffect} from "react";
import { Row, Col, Modal, Button} from 'react-bootstrap';
import { Footer } from "../components/footer";
import HeaderAdmin from "./headeradmin";
import axios from 'axios';
import {toast} from 'react-toastify';
import { useHistory , Link} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

export function CreatedProduct() {
    let history = useHistory();

    const [productname, setProductname] = useState("");
    
    const [sku, setSku] = useState("");
    const [description, setDescription] = useState("");

    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [brand, setBrand] = useState("");
    const [image, setImage] = useState("");
    const [state, setState] = useState(true);


    const submitHandler = () => {
    
        if(productname == ""){
            toast.warning('Debe ingresar el nombre del producto');
            return;
        }

        if(sku == ""){
            toast.warning('Debe ingresar el sku del producto');
            return;
        }

        if(description == ""){
            toast.warning('Debe ingresar la descripción del producto');
            return;
        }

        if(price == ""){
            toast.warning('Debe ingresar el precio del producto');
            return;
        }

        if(category == ""){
            toast.warning('Debe ingresar la categoría del producto');
            return;
        }

        if(brand == ""){
            toast.warning('Debe ingresar la marca del producto');
            return;
        }

        if(image == ""){
            toast.warning('Debe ingresar la imagen del producto');
            return;
        }

        if(state == ""){
            toast.warning('Debe ingresar el estado del producto');
            return;
        }

        const data = JSON.stringify({
            "product_name": productname,
            "sku" : sku,
            "description": description,
            "price": parseFloat(price),
            "category": category,
            "brand": brand,
            "image": image,
            "isActive": state
        });


        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "JWT " + localStorage.getItem('ecommerceUserAdmin')
            },
            url: "https://ecomerce-master.herokuapp.com/api/v1/item",
            data: data
        };

        axios(config)
        .then(function (response) {
            toast.success('Producto creado correctamente');
            history.push("/administrator/home");
            const win = window.open("/producto/" + response.data._id);
            win.focus();
        })
        .catch(function (error) {
            toast.error("Ingrese una categoría válida");
        }
        );
        


    }


    return(
        <>
            <HeaderAdmin />

              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <div className="container-main">
                <div className="row">
                    
                    <div className="col-md-6 field-product">
                        <div class="form-group">
                            <label for="product_name">Nombre del producto</label>
                            <input value={productname} onChange={(e) => setProductname(e.target.value)} type="text" id="product_name" class="form-control" placeholder="Nombre del producto"/>
                        </div>
                    </div>


                    <div className="col-md-6 field-product">
                        <div class="form-group">
                            <label for="sku">sku</label>
                            <input value={sku} onChange={(e) => setSku(e.target.value)} type="text" id="sku" class="form-control" placeholder="Número de sku"/>
                        </div>
                    </div>


                    <div className="col-md-12 field-product">
                        <div class="form-group">
                            <label for="description">Descripción</label>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} class="form-control" id="description" rows="3"></textarea>
                        </div>
                    </div>


                    <div className="col-md-6 field-product">
                        <div class="form-group">
                            <label for="price">Precio</label>
                        <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" id="price" class="form-control" placeholder="Precio del producto en MXN$"/>
                        </div>
                    </div>

                    <div className="col-md-6 field-product">
                        <div class="form-group">
                            <label for="category">Categoría</label>
                        <input value={category} onChange={(e) => setCategory(e.target.value)}input type="text" id="category" class="form-control" placeholder="Categoría del producto"/>
                        </div>
                    </div>
                    
                    
                    <div className="col-md-6 field-product">
                        <div class="form-group">
                            <label for="brand">Marca</label>
                        <input value={brand} onChange={(e) => setBrand(e.target.value)} input type="text" id="brand" class="form-control" placeholder="Marca del producto"/>
                        </div>
                    </div>

                    <div className="col-md-6 field-product">
                        <div class="form-group">
                            <label for="image">Imagen</label>
                        <input value={image} onChange={(e) => setImage(e.target.value)} type="text" id="image" class="form-control" placeholder="Imagen del producto"/>
                        </div>
                    </div>

                    <div className="col-md-6 field-product">
                        <div class="form-group">
                            <label for="state">Estado</label>
                            <select id="state" class="form-control" value={state} onChange={(e) => setState(e.target.value)}>
                                <option value={true}>Disponible</option>
                                <option value={false}>No disponible</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-md-12 field-product">
                        <center><button onClick={submitHandler} >Guardar producto</button></center>
                    </div>

                </div>              
              </div>          
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />


            <Footer />

        </>
    )

}
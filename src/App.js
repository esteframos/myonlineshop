import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Home} from './screens/home';
import {Product} from './screens/product';
import {Login} from './screens/login';
import {Signup} from './screens/signup';
import {LoginAdmin} from './admin/loginadmin.js';
import {CreatedProduct} from './admin/createdproduct.js';
import {ListadoProductos} from './admin/listadoproductos.js';
import {HomeAdministrator} from './admin/homeadministrator.js';
import {LogoutAdmin} from './admin/logoutadmin.js';
import {Logout} from './components/logout.js';
import CarritoCompra from './carrito/carritocompra.js';


import AuthRoute from './authroute';
import GuestRoute from './guestroute';

function App() {
  return (

    <Router>
    
      <Switch>

      <AuthRoute path="/administrator/nuevo-producto">
           <CreatedProduct />
      </AuthRoute>
     
      <AuthRoute path="/administrator/productos">
           <ListadoProductos />
      </AuthRoute>

      <AuthRoute path="/administrator/home">
        <ListadoProductos />
      </AuthRoute>

      <AuthRoute path="/administrator/logout">
          <LogoutAdmin /> 
      </AuthRoute>

      <GuestRoute path="/administrator/login">
          <LoginAdmin />
      </GuestRoute>


      <Route path="/signup" exact>
          <Signup />
      </Route>

        <Route path="/login" exact>
          <Login />
        </Route>

        <Route path="/producto/:id" exact>
          <Product />
        </Route>

        <Route path="/home" exact>
          <Home />
        </Route>


        <Route path="/carrito" exact>
          <CarritoCompra />
        </Route>


        <Route path="/logout" exact>
          <Logout/>
        </Route>

        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="*">
          {/* <NotFound/> */}
        </Route>


      </Switch>




    </Router>

);
}

export default App;
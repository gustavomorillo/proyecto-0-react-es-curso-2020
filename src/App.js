import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";
import Carrito from "./components/Carrito";

function App() {
  const [productos, guardarProductos] = useState([
    { id: 1, nombre: "Camisa ReactJS", precio: 50 },
    { id: 2, nombre: "Camisa Node.js", precio: 40 },
    { id: 3, nombre: "Camisa Angular", precio: 30 }
  ]);
  const [carrito, agregarProducto] = useState([]);

  const fecha = new Date().getFullYear();
  return (
    <Fragment>
      <Header titulo="tienda virtual" />
      <h1>Lista de Productos</h1>
      {productos.map(producto => (
        <Producto
          producto={producto}
          carrito={carrito}
          productos={productos}
          agregarProducto={agregarProducto}
          key={producto.id}
        />
      ))}
      <Carrito carrito={carrito} agregarProducto={agregarProducto} />
      <Footer fecha={fecha} />
    </Fragment>
  );
}

export default App;

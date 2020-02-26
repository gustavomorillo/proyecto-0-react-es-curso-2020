import React from "react";
import "./carrito.css";
import Producto from "./Producto";

const Carrito = ({ carrito, agregarProducto }) => (
  <div className="carrito">
    {carrito.length === 0 ? (
      <h3>No hay elementos en el carrito</h3>
    ) : (
      carrito.map(producto => (
        <Producto producto={producto} key={producto.id} carrito={carrito} agregarProducto={agregarProducto} />
      ))
    )}
  </div>
);

export default Carrito;

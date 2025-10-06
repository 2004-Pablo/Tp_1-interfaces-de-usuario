import React, { useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard.jsx";

export default function Carta() {

  //Declaración inicial de los productos como un array de objetos
  const [productos, setProductos] = useState([
    { id: 1, nombre: "Café Espresso", precio: 4200, img: "/espresso.jpg" },
    { id: 2, nombre: "Café Latte", precio: 6000, img: "/latte.jpg" },
    { id: 3, nombre: "Cappuccino", precio: 4900, img: "/cappuccino.jpg" },
    { id: 4, nombre: "Moccha", precio: 6100, img: "/moccha.jpg" },
    { id: 5, nombre: "Té Verde", precio: 3000, img: "/te_verde.jpg" },
    { id: 6, nombre: "Té Negro", precio: 2100, img: "/teNegro.jpg" },
    { id: 7, nombre: "Brownie", precio: 3000, img: "/brownie.jpg" },
    { id: 8, nombre: "Sándwich Caprese", precio: 5000, img: "/sandwich.jpg" },
    { id: 9, nombre: "Waffle de Frutos Rojos", precio: 7500, img: "/waffle.jpg" },
    { id: 10, nombre: "Tostado de J&Q", precio: 6800, img: "/tostado.jpg" },
    { id: 11, nombre: "Cookies c/ Chips de Chocolate", precio: 3500, img: "/cookie.jpg" },
    { id: 12, nombre: "Medialuna", precio: 750, img: "/medialuna.jpg" },
  ]);
  
//Revisar cuando se tenga el carrito, en que lugar dejar toda la logica del carrito

  //Función para manejar el evento onAdd recibido desde ProductCard
  const [carrito, setCarrito] = useState([]); //Defino un Hook con useState, donde declaro
  //que el estado carrito sera un array, y la funcion para modificar dicho estado. Inicio 
  //el array vacio ya que el carrito inicialmente estara vacio

  function agregarAlCarrito(producto) {
    setCarrito([...carrito, producto]);
    //1)Utilizo el operador de propagacion, que crea una copia del array carrito y coloca
    //todos sus elementos dentro del nuevo array + el nuevo producto
    //2)Debo utilizar dicho operador ya que el estado debe ser inmutable, al crear un
    //nuevo array con el operador de propagacion, se sabe que el estado ha cambiado ya que
    //es un nuevo objeto (tiene que ver con el rendimiento/renderizado)
  }

  return (
    <div className="container py-4">
      <h2 className="h3 fw-bold">Nuestra Carta</h2>
      <div className="row g-4">
        {productos.map((p) => ( //map para hacer que cada elemento de productos, se convierta en un componente ProductCard
           <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={p.id}>
            {/*key es una propiedad especial de React que ayuda a identificar de manera 
            única cada elemento dentro de una lista renderizada de componentes, 
            en este caso la que se genera con el map(), lo cual permite que React
            identifique que elementos cambiaron, se agregaron o eliminaron se manera eficiente*/ }
            <ProductCard //Uso el componente reutilizable ProductCard ya creado 
              producto={p} //Creo el prop producto, siendo dicha prop todo el objeto p, para todos los elementos p del array
              onAdd={agregarAlCarrito} //Creo el prop onAdd, que cada vez que se utiliza llama a la función agregarAlCarrito
            />
          </div>           
        ))}
      </div>
    </div>
  );
}


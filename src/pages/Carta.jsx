import React, { useState } from "react";
import productos from "../data/productos";
import ProductCard from "../components/ProductCard/ProductCard.jsx";

export default function Carta() {
  const [carrito, setCarrito] = useState([]); //Defino un Hook con useState, donde declaro
  //que el estado carrito sera un array, y la funcion para modificar dicho estado, inicio 
  // un un array vacio ya que el carrito inicialmente estará vacio

  function agregarAlCarrito(producto) {
    setCarrito([...carrito, producto]);
    //1)Utilizo el operador de propagacion, que crea una copia del array carrito y coloca
    //todos sus elementos dentro del nuevo array
    //2)Debo utilizar dicho operador ya que el estado debe ser inmutable, al crear un
    //nuevo array con el operador de propagacion, se sabe que el estado ha cambiado ya que
    //es un nuevo objeto (tiene que ver con el rendimiento/renderizado)
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Nuestra Carta</h2>
      <div className="row g-4">
        {productos.map((p) => ( //map para hacer que cada elemento de productos, se convierta en un componente ProductCard
          <ProductCard  //Uso el componente reutilizable ProductCard ya creado  
            className="col-12 col-sm-6 col-md-4 col-lg-3"
            key={p.id} //Key es usado para identificar objetos distintos y optimizar renderizacion
            producto={p} //Creo el prop producto, siendo dicha prop todo el objeto p, para todos los elementos p del array
            onAdd={agregarAlCarrito} //Creo el prop onAdd, que cada vez que se utiliza llama a la función agregarAlCarrito
          />
        ))}
      </div>
    </div>
  );
}


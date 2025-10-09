import React, { useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";

export default function Carta({ onAdd }) { //onAdd: Prop

  //Declaración inicial de los productos como un array de objetos
  const [productos, setProductos] = useState([
    { id: 1, nombre: "Café Espresso", precio: 4200, img: "/espresso.jpg", categoria: "Cafés" },
    { id: 2, nombre: "Café Latte", precio: 6000, img: "/latte.jpg", categoria: "Cafés" },
    { id: 3, nombre: "Cappuccino", precio: 4900, img: "/cappuccino.jpg", categoria: "Cafés" },
    { id: 4, nombre: "Moccha", precio: 6100, img: "/moccha.jpg", categoria: "Cafés" },
    { id: 5, nombre: "Té Verde", precio: 3000, img: "/te_verde.jpg", categoria: "Tés" },
    { id: 6, nombre: "Té Negro", precio: 2100, img: "/teNegro.jpg", categoria: "Tés" },
    { id: 7, nombre: "Brownie", precio: 3000, img: "/brownie.jpg", categoria: "Dulces" },
    { id: 8, nombre: "Sándwich Caprese", precio: 5000, img: "/sandwich.jpg", categoria: "Salados" },
    { id: 9, nombre: "Waffle de Frutos Rojos", precio: 7500, img: "/waffle.jpg", categoria: "Salados" },
    { id: 10, nombre: "Tostado de J&Q", precio: 6800, img: "/tostado.jpg", categoria: "Salados" },
    { id: 11, nombre: "Cookies c/ Chips de Chocolate", precio: 3500, img: "/cookie.jpg", categoria: "Dulces" },
    { id: 12, nombre: "Medialuna", precio: 750, img: "/medialuna.jpg", categoria: "Dulces" },
  ]);

  //Hook para manejar el Estado del filtro de los productos
  const [filtro, setFiltro] = useState("Todos");

  //Operador ternario para asignar el valor a productosFiltrados segun el filtro
  const productosFiltrados = 
    filtro === "Todos" //Condicion
    ? productos //valorSiVerdadero
    : productos.filter(p => p.categoria === filtro); //valorSiFalso

  return (
    <div className="container py-4">
      <h2 className="h3 fw-bold">Nuestra Carta</h2>

      {/*Botones para los filtros*/}
      <div className="mb-4">
        <button className="btn btn-outline-primary me-2" onClick={() => setFiltro("Todos")}>Todos</button>
        <button className="btn btn-outline-primary me-2" onClick={() => setFiltro("Cafés")}>Cafés</button>
        <button className="btn btn-outline-primary me-2" onClick={() => setFiltro("Tés")}>Tés</button>
        <button className="btn btn-outline-primary me-2" onClick={() => setFiltro("Salados")}>Salados</button>
        <button className="btn btn-outline-primary" onClick={() => setFiltro("Dulces")}>Dulces</button>
      </div>

      <div className="row g-4">
        {/*map para hacer que cada elemento de productosFiltrados, se convierta en un componente ProductCard*/}
        {productosFiltrados.map((p) => ( 
           <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={p.id}>
            {/*key es una propiedad especial de React que ayuda a identificar de manera 
            única cada elemento dentro de una lista renderizada de componentes, 
            en este caso la que se genera con el map(), lo cual permite que React
            identifique qué elementos cambiaron, se agregaron o eliminaron, de una manera eficiente*/ }
            <ProductCard //Uso el componente reutilizable ProductCard ya creado 
              producto={p} //Crea el prop producto, siendo dicha prop todo el objeto p, para todos los elementos p del array
              onAdd={onAdd} //Crea el prop onAdd, que cada vez que se utiliza llama a la función onAdd 
              //recibida desde App (agregarAlCarrito)
            />
          </div>           
        ))}
      </div>
    </div>
  );
}
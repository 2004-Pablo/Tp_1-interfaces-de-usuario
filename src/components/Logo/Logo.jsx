import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Logo() {
  return (
    <nav className="navbar navbar-light bg-light">
        <div className="container">
            <NavLink to= "/">
                <img src="LogoPrincipalSinFondo.png" alt="" width="50" height="50"/>
            </NavLink>
        </div>
    </nav>
  )
}
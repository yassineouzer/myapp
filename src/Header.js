import React from 'react'
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundImage:"linear-gradient(#87CEEB,#87CEEB)"}}>
  <div className="container-fluid">
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link" to="/Myborrows">Mes emprunts</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/Mybooks">Mes livres</Link>
        </li>

        <li className="nav-item">
         <Link className="nav-link" to="/Listbooks">Mes livres disponibles</Link>
             </li> 
             </ul>

       
      
  
      <div>
      
        <button className="btn btn-outline-success" type="submit">Se deconnecter</button></div>
     </div></div>
     </nav>
   
    )
}

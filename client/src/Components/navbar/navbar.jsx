import React from "react"
import { Link } from "react-router-dom";
import logonav from "../../assets/logonav.png";


function NavBar () {

    return (

<nav className="navbar navbar-expand-lg navbar-white bg-white">
    <div className="container-fluid">
    <div className="navbar-brand my-2">
        <img src={logonav} alt="" width="160"/>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <Link to="/home" className="nav-link active" aria-current="page">Inicio</Link>
        </li>
        <li className="nav-item">
            <Link to="/protocols" className="nav-link active" aria-current="page">Protocolos</Link>
        </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="Agentes" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Agentes
                </a>
                <ul className="dropdown-menu shadow-lg p-3 mb-5 bg-body rounded" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="Planta">Planta</a></li>
                    <li><a className="dropdown-item" href="Contratados">Contratados</a></li>
                    <li><a className="dropdown-item" href="Agents">Todos los agentes</a></li>
                </ul>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="Sectores" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sectores
                </a>
                <ul className="dropdown-menu shadow-lg p-3 mb-5 bg-body rounded" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="Área abierta">Área abierta</a></li>
                    <li><a className="dropdown-item" href="Área Cerrada">Área cerrada</a></li>
                    <li><a className="dropdown-item" href="Sectors">Todos los sectores</a></li>
                </ul>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="Sectores" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Crear
                </a>
                <ul className="dropdown-menu shadow-lg p-3 mb-5 bg-body rounded" aria-labelledby="navbarDropdown">
                    <li><Link to="/formsector" className="nav-link active" aria-current="page">Nuevo sector</Link></li>
                    <li><Link to="/formagent" className="nav-link active" aria-current="page">Nuevo agente</Link></li>
                </ul>
            </li>
        </ul>
        <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Buscar agente" aria-label="Search" />
            <button className="btn btn-outline-dark" type="submit">
                <i className="bi bi-search"></i>
            </button>
        </form>
    </div>
    </div>
</nav>

    )
};


export default NavBar;

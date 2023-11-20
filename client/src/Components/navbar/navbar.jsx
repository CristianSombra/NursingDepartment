import React from "react"
import logonav from "../../assets/logonav.png";


function NavBar () {

    return (

<nav class="navbar navbar-expand-lg navbar-white bg-white">
    <div class="container-fluid">
    <div class="navbar-brand my-2">
        <img src={logonav} alt="" width="160"/>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="Inicio">Inicio</a>
        </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="Agentes" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Agentes
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="Planta">Planta</a></li>
                    <li><a class="dropdown-item" href="Contratados">Contratados</a></li>
                </ul>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="Sectores" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sectores
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="Área abierta">Área abieta</a></li>
                    <li><a class="dropdown-item" href="Área Cerrada">Área cerrada</a></li>
                </ul>
            </li>
        </ul>
        <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-dark" type="submit">Search</button>
        </form>
    </div>
    </div>
</nav>

    )
};


export default NavBar;

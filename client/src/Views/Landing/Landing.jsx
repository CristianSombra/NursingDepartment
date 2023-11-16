import React from 'react';
import {Link} from 'react-router-dom'
import fondo from '../../assets/background.jpg'
import './Landing.css'

const Landing = () => {
    return (
        <div class="container-fluid">
        <div class="container-intro d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
            <div class="row">
                <img src={fondo} class="img-fluid" alt="fondo" />
                    <div class="col text-center">
                    <h1 class="title text-black">Departamento de Enfermería</h1>
                    <h2 class="subtitle text-muted">Base de datos del personal</h2>
                    <Link to="/home">
                        <button class="my-5 btn btn-outline-dark btn-lg">Ingresar</button>
                    </Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Landing;

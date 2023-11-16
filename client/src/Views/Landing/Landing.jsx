import React from 'react';
import './Landing.css'

const Landing = () => {
    return (
        <div class="container-fluid background">
        <div class="container-intro d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
            <div class="row">
                <div class="col text-center">
                    <h2 class="title">Departamento de Enfermería</h2>
                    <h3 class="subtitle">Recurso humano</h3>
                    <button class="btn btn-dark">Ingresar</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Landing;

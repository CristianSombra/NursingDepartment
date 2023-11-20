import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'
import fondo from '../../assets/background.jpg'
import './Landing.css'

const Landing = () => {
    useEffect(() => {
        // Ocultar barras de desplazamiento al cargar la página
        document.body.style.overflow = 'hidden';
    
        // Restaurar barras de desplazamiento al desmontar el componente
        return () => {
        document.body.style.overflow = 'visible';
        };
    }, []);


    return (
        <div class="container-fluid container-fluid-landing">
        <div class="container-intro d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
            <div class="row">
                <div className="col">
                <img src={fondo} class="img-fluid" alt="fondo" />
                    <div class="col text-center">
                    <h1 class="title text-black">Departamento de Enfermería</h1>
                    <h2 class="subtitle text-muted">Base de datos del personal</h2>
                        
                        <Link to="/home" class="my-5 btn-1">
                            <button><span>Ingresar</span></button>
                        </Link>
                        </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;

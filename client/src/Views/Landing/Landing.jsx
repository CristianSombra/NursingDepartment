import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'
import fondo from '../../assets/background.jpg'

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
        <div className="container-fluid container-fluid-landing">
            <div className="container-intro d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
                <div className="row">
                    <div className="col">
                        <img src={fondo} className="img-fluid" alt="fondo" />
                        <div className="col text-center">
                            <h1 className="title text-black">Departamento de Enfermería</h1>
                            <h2 className="subtitle text-muted mb-5">Base de datos del personal</h2>
                            <Link to="/home" className="my-5">
                                <div className="btn btn-outline-dark btn-lg">
                                    <span>Ingresar</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;

import React from "react";
import agents from '../../assets/personal.png';
import sectors from '../../assets/servicios.png';
import './Home.css'

const  Home = () => {
    
    return (
        <div className="container">
            <div className="row justify-content-evenly">
                <div className="col-12 col-md-4 mt-3">
                    <div className="card">
                        <img src={agents} alt="" className="img-card-top rounded" />
                        <div className="card-body text-center">
                        <h4 className="card-title">Agentes</h4>
                        <a href="Agents" className="btn btn-outline-dark">Ingresar</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 mt-3">
                    <div className="card">
                        <img src={sectors} alt="" className="img-card-top rounded" />
                        <div className="card-body text-center">
                        <h4 className="card-title">Servicios</h4>
                        <a href="Sectors" className="btn btn-outline-dark">Ingresar</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Home;

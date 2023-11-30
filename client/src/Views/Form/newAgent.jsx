import React,{ useState } from "react";
import { CreateAgentHandler } from "../../Components/handlers/handlers";


const NewAgent = () => {
    const [imageUrl, setImageUrl] = useState("");
    const [agent, setAgent] = useState({

    })



    const createAgent = CreateAgentHandler();

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setImageUrl(URL.createObjectURL(selectedImage));
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAgent ((prevAgent) => ({
            ...prevAgent,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createAgent(agent);
        } catch (error) {
            console.error('Error al crear el agente', error)
        }
    }

    return (
        <div className="container">
            <div className="row mt-5 d-flex justify-content-center">
                <div className="col-12 col-md-10">
                    <form action="">
                        <div className="row my-3">
                            <h1 className="text-center mb-4">Formulario para crear nuevo agente</h1>

                            <div className="col-12 col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Tu imagen:</label>
                                    <input 
                                        type="file" 
                                        id="image"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        required
                                        className="form-control" 
                                        />
                                        {imageUrl && (
                                        <div className="mt-5 text-center">
                                            <img src={imageUrl} alt="Preview" className="img-fluid rounded" />
                                        </div>
                                        )}
                                </div>
                            </div>

                            <div className="col-12 col-md-6">
                                <div className="row">
                                    <div className="col-12">
                                        <label htmlFor="nombre y apellido" className="form-label">Nombre y apellido</label>
                                        <input type="text" className="form-control" id="nombre y apellido"/>
                                    </div>
                                    <div className="col-12 mt-3">
                                        <label htmlFor="nivel academico" className="form-label">Nivel académico</label>
                                        <input type="text" className="form-control" id="nivel academico"/>
                                    </div>
                                    <div className="col-12 mt-3">
                                        <label htmlFor="domicilio" className="form-label">Domicilio</label>
                                        <input type="text" className="form-control" id="domicilio"/>
                                    </div>
                                    <div className="col-12 mt-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="text" className="form-control" id="email"/>
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="col-12">
                                        <div className="row mt-3">
                                            <div className="col-12 col-sm-6">
                                                <label htmlFor="dni" className="form-label">DNI</label>
                                                <input type="text" className="form-control" id="dni"/>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <label htmlFor="matricula" className="form-label">N° de matrícula</label>
                                                <input type="text" className="form-control" id="matricula"/>    
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-12 col-sm-6">
                                                <label htmlFor="genero" className="form-label">Género</label>
                                                <input type="text" className="form-control" id="genero"/>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <label htmlFor="nacimiento" className="form-label">Nacimiento</label>
                                                <input type="text" className="form-control" id="nacimiento"/>    
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-12 col-sm-6">
                                                <label htmlFor="celular" className="form-label">Celular</label>
                                                <input type="text" className="form-control" id="celular"/>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <label htmlFor="fecha de admisión" className="form-label">Fecha de admisión</label>
                                                <input type="text" className="form-control" id="matricula"/>    
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-12 col-sm-6">
                                                <label htmlFor="sector" className="form-label">Sector</label>
                                                <input type="text" className="form-control" id="sector"/>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <label htmlFor="estado" className="form-label">Estado</label>
                                                <input type="text" className="form-control" id="estado"/>    
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-12 col-sm-6">
                                                <label htmlFor="posicion" className="form-label">Posición</label>
                                                <input type="text" className="form-control" id="posicion"/>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <label htmlFor="horario" className="form-label">Horario</label>
                                                <input type="text" className="form-control" id="horario"/>    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="my-5 text-center">
                                <button type="submit" className="btn btn-outline-dark">
                                    Crear agente
                                </button>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default NewAgent
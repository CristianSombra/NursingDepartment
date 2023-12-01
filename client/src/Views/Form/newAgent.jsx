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
                                        <select name="nivel academico" id="nivel academico" className="form-select">
                                            <option value="default">
                                                <p className="text-muted">Elije una opción</p>
                                                </option>
                                            <option value="">Auxiliar</option>
                                            <option value="">Técnico Superior en Enfermería</option>
                                            <option value="">Enfermero Profesional</option>
                                            <option value="">Enfermero Universitario</option>
                                            <option value="">Licenciado en Enfermería</option>
                                        </select>
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
                                                <select name="genero" id="genero" className="form-select">
                                                    <option value="default">Elije una opción</option>
                                                    <option value="hombre">Hombre</option>
                                                    <option value="mujer">Mujer</option>
                                                    <option value="otro">Otro</option>
                                                </select>
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
                                                <select name="sector" id="sector" className="form-select">
                                                    <option value="falta">Crear código para recibir los servicios</option>
                                                </select>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <label htmlFor="estado" className="form-label">Estado</label>
                                                <select name="estado" id="estado" className="form-select">
                                                    <option value="default">Elije una opción</option>
                                                    <option value="">Contratado</option>
                                                    <option value="">Planta</option>
                                                </select>    
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-12 col-sm-6">
                                                <label htmlFor="posicion" className="form-label">Posición</label>
                                                <select name="posicion" id="posicion" className="form-select">
                                                    <option value="default">Elije una opción</option>
                                                    <option value="piso">Piso</option>
                                                    <option value="jefe de area">Jefe de área</option>
                                                    <option value="supervisor de turno">Supervisor de turno</option>
                                                    <option value="jefe de departamento">Jefe de departamento</option>
                                                    <option value="director">Director</option>
                                                </select>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <label htmlFor="horario" className="form-label">Horario</label>
                                                <select name="horario" id="horario" className="form-select">
                                                    <option value="default">Elije una opción</option>
                                                    <option value="00-06">00-06</option>
                                                    <option value="06-12">06-12</option>
                                                    <option value="12-18">12-18</option>
                                                    <option value="18-00">18-00</option>
                                                    <option value="00-08">00-08</option>
                                                    <option value="08-16">08-16</option>
                                                    <option value="16-00">16-00</option>
                                                    </select>    
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
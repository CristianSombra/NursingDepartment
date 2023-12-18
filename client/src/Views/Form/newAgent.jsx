import React,{ useState, useEffect } from "react";
import { getAllSectors } from "../../Redux/actions";
import { CreateAgentHandler, useSectorChangeHandler } from "../../Components/handlers/handlers";
import { useSelector, useDispatch } from "react-redux";


const NewAgent = () => {
    const allSectorsData = useSelector((state) => state.sectors)
    const dispatch = useDispatch();
    const [imageUrl, setImageUrl] = useState("");
    const [agent, setAgent] = useState({
            "id": "",
            "image": "",
            "name": "",
            "dni": "",
            "gender": "",
            "birthday": "",
            "email": "",
            "phone": "",
            "address": "",
            "dateAdmission": "",
            "academicLevel": "",
            "state": "",
            "position": "",
            "time": "",
    })

    const createAgent = CreateAgentHandler();
    const  { selectedSector , handleSectorChange } = useSectorChangeHandler()

    const [formState, setFormState ] = useState({
        success: false,
        message:"",
        creatingSector: false,
    })

    useEffect(() => {
        dispatch(getAllSectors(selectedSector));
    }, [dispatch, selectedSector]);

    useEffect(() => {
        handleSectorChange(selectedSector);
    }, [handleSectorChange, selectedSector]);

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setImageUrl(URL.createObjectURL(selectedImage));
    };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(`Campo ${name} actualizado con el valor: ${value}`);
        
        setAgent((prevAgent) => ({
            ...prevAgent,
            [name]: name === 'id' ? Number(value) : value,
        }));

    };
    


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Proceder con la creación del agente
            await createAgent({ agentData: agent });

            // Si se crea correctamente,
            setFormState({
                success: true,
                message: "Agente creado correctamente",
                creatingSector: false,
            });

            // Limpiar el formulario
            setAgent({
                "id": "",
                "image": "",
                "name": "",
                "dni": "",
                "gender": "",
                "birthday": "",
                "email": "",
                "phone": "",
                "address": "",
                "dateAdmission": "",
                "academicLevel": "",
                "state": "",
                "position": "",
                "time": "",
            });

            setTimeout(() => {
                setFormState({
                    ...formState,
                    success: false,
                });
            }, 3000);

        } catch (error) {
            // Si no se crea correctamente,
            setFormState({
                success: false,
                message: error.response?.data.message || "Error al crear el agente",
                creatingAgent: false,
            });
        }
    };


    return (
        <div className="container">
            <div className="row mt-5 d-flex justify-content-center">
                <div className="col-12 col-md-10">
                    <form onSubmit={handleSubmit}>
                        <div className="row my-3">
                            <h1 className="text-center mb-4">Formulario para crear nuevo agente</h1>

                            <div className="col-12 col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="imagen" className="form-label">Tu imagen:</label>
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
                                            <img src={imageUrl} alt="Vista previa del agente" className="img-fluid rounded" />
                                        </div>
                                        )}
                                </div>
                            </div>

                            <div className="col-12 col-md-6">
                                <div className="row">
                                    <div className="col-12">
                                        <label htmlFor="nombre y apellido" className="form-label">Nombre y apellido</label>
                                        <input name="name" type="text" className="form-control" id="nombre y apellido" value={agent.name} onChange={handleChange} />
                                    </div>

                                    <div className="col-12 mt-3">
                                        <label htmlFor="nivel academico" className="form-label">Nivel académico</label>
                                        <select name="academicLevel" id="nivel academico" className="form-select" value={agent.academicLevel} onChange={handleChange}>
                                            <option value="default">Elije una opción</option>
                                            <option value="Auxiliar">Auxiliar</option>
                                            <option value="Técnico Superior en Enfermería">Técnico Superior en Enfermería</option>
                                            <option value="Enfermero Profesional">Enfermero Profesional</option>
                                            <option value="Enfermero Universitario">Enfermero Universitario</option>
                                            <option value="Licenciado en Enfermería">Licenciado en Enfermería</option>
                                        </select>
                                    </div>

                                    <div className="col-12 mt-3">
                                        <label htmlFor="domicilio" className="form-label">Domicilio</label>
                                        <input name="address" type="text" className="form-control" id="domicilio" value={agent.address} onChange={handleChange}/>
                                    </div>
                                    <div className="col-12 mt-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input name="email" type="text" className="form-control" id="email" value={agent.email} onChange={handleChange}/>
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="col-12">
                                        <div className="row mt-3">
                                            <div className="col-12 col-sm-6">
                                                <label htmlFor="dni" className="form-label">DNI</label>
                                                <input name="dni" type="text" className="form-control" id="dni" value={agent.dni} onChange={handleChange} />
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <label htmlFor="matricula" className="form-label">N° de matrícula</label>
                                                <input name="id" type="number" className="form-control" id="matricula" value={agent.id} onChange={handleChange} />    
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-12 col-sm-6">
                                                <label htmlFor="genero" className="form-label">Género</label>
                                                <select name="gender" id="genero" className="form-select" value={agent.gender} onChange={handleChange}>
                                                    <option value="default">Elije una opción</option>
                                                    <option value="M">M</option>
                                                    <option value="F">F</option>
                                                    <option value="X">X</option>
                                                </select>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <label htmlFor="nacimiento" className="form-label">Nacimiento</label>
                                                <input name="birthday" type="date" className="form-control" id="nacimiento" value={agent.birthday} onChange={handleChange}/>    
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-12 col-sm-6">
                                                <label htmlFor="celular" className="form-label">Celular</label>
                                                <input name="phone" type="text" className="form-control" id="celular" value={agent.phone} onChange={handleChange}/>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <label htmlFor="fecha de admisión" className="form-label">Fecha de admisión</label>
                                                <input name="dateAdmission" type="date" className="form-control" id="fecha de admisión" value={agent.dateAdmission} onChange={handleChange}/>    
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-12 col-sm-6">
                                                <label htmlFor="sector" className="form-label">Sector</label>
                                                    <select
                                                            name="id_sector" 
                                                            id="id_sector" 
                                                            className="form-select"
                                                            value={agent.sector} 
                                                            onChange={handleChange}
                                                            >
                                                        <option value="All">Seleccionar sector</option>
                                                                {allSectorsData && allSectorsData.map(sector => (
                                                                <option value={sector.id_sector} key={sector.id}>{sector.name}</option>
                                                            ))}
                                                    </select>

                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <label htmlFor="estado" className="form-label">Estado</label>
                                                <select name="state" id="estado" className="form-select" value={agent.state} onChange={handleChange}>
                                                    <option value="default">Elije una opción</option>
                                                    <option value="Contratado">Contratado</option>
                                                    <option value="Planta">Planta</option>
                                                </select>    
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-12 col-sm-6">
                                                <label htmlFor="posicion" className="form-label">Posición</label>
                                                <select name="position" id="posicion" className="form-select" value={agent.position} onChange={handleChange}>
                                                    <option value="default">Elije una opción</option>
                                                    <option value="Piso">Piso</option>
                                                    <option value="Jefe de área">Jefe de área</option>
                                                    <option value="Supervisor de turno">Supervisor de turno</option>
                                                    <option value="Jefe de departamento">Jefe de departamento</option>
                                                    <option value="Director">Director</option>
                                                </select>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <label htmlFor="horario" className="form-label">Horario</label>
                                                <select name="time" id="horario" className="form-select" value={agent.time} onChange={handleChange}>
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
                            <div
                            className={`alert ${formState.message && (formState.success ? 'alert-success' : 'alert-danger')}`}
                            role="alert"
                        >
                            {formState.message}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default NewAgent
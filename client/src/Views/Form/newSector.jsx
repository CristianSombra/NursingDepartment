import React, { useState } from "react";
import { CreateSectorHandler } from "../../Components/handlers/handlers";
import ImageUpload from "../../Components/cloudinary/cloudinary";


const NewSector = () => {
    const [sector, setSector] = useState({
        "id_sector": "",
        "image": null,
        "name": "",
        "state": ""
    });

    const createSector = CreateSectorHandler();

    const [formState, setFormState ] = useState({
        success: false,
        message:"",
        creatingSector: false,
    })

    const [validationName, setValidationName] = useState({name: ""});
    const [validationId, setValidationId] = useState({id:""});
    const [imageUploadKey, setImageUploadKey] = useState(0);

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        if (name === "name") {
            // Validar el nombre: solo letras y no más de 30 caracteres
            const isValid = /^[a-zA-Z\s]{0,30}$/.test(value);
    
            setValidationName((prevErrors) => ({
                ...prevErrors,
                name: isValid
                    ? ""
                    : "El nombre debe contener solo letras y no exceder los 30 caracteres.",
            }));
    
            if (isValid) {
                setSector((prevSector) => ({
                    ...prevSector,
                    [name]: value,
                }));
            }
        }
    
        if (name === "id_sector") {
            // Validar el ID del servicio: solo mayúsculas y no más de 5 caracteres
            const isValidId = /^[A-Z]{0,5}$/.test(value);
    
            setValidationId((prevErrors) => ({
                ...prevErrors,
                id: isValidId
                    ? ""
                    : "El ID debe contener solo mayúsculas y no exceder los 5 caracteres.",
            }));
    
            if (isValidId) {
                setSector((prevSector) => ({
                    ...prevSector,
                    [name]: value,
                }));
            }
        }
    };
    

    const handleAreaChange = (areaType) => {
        setSector((prevSector) => ({
            ...prevSector,
            state: areaType
        }));
    };

    const handleImageChange = (imageUrl) => {
        setSector((prevSector) => ({
            ...prevSector,
            image: imageUrl
        }));
    };

    const resetForm = () => {
        setSector({
            "id_sector": "",
            "image": null,
            "name": "",
            "state": ""
        });

        setFormState({
            success: false,
            message: "",
            creatingSector: false,
        });
        setImageUploadKey((prevKey) => prevKey + 1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        //Verifico si todos los campos están completos 
        const missingFields = [];
            if (sector.name.trim() === "") {
                missingFields.push("Nombre del servicio");
            }
            if (sector.id_sector.trim() === "") {
                missingFields.push("ID del servicio");
            }
            if (sector.state.trim() === "") {
                missingFields.push("Tipo de área");
            }
            if (sector.image === null) {
                missingFields.push("Imagen");
            }
        
            if (missingFields.length > 0) {
        // Mostrar mensaje de error con los campos faltantes
                setFormState({
                    success: false,
                    message: `Faltan completar los siguientes campos: ${missingFields.join(", ")}`,
                    creatingSector: false,
                });
        return;
    }

        try {
            // Proceder con la creación del sector
            await createSector(sector);

            // Si se crea correctamente,
            setFormState({
                success: true,
                message: "Servicio creado correctamente",
                creatingSector: false,
            });

            setTimeout(() => {
                resetForm();
            }, 2000);

        } catch (error) {
            // Si no se crea correctamente,
            setFormState({
                success: false,
                message: error.response?.data.message || "Error al crear el servicio",
                creatingSector: false,
            });
        }
    };

    return (
        <div className="container">
            <div className="row mt-5 d-flex justify-content-center">
                <div className="col-12 col-md-10">
                    <form onSubmit={handleSubmit}>
                        <div className="row my-3">
                            <h1 className="text-center mb-4">Formulario para crear nuevo sector</h1>
                            <div className="col-12 col-md-6">
                                <div className="mb-5">
                                    <label htmlFor="image" className="form-label">Tu imagen:</label>
                                        <div className="mb-3 text-center">
                                            <ImageUpload key={imageUploadKey} setImageCallback={handleImageChange} />
                                        </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="nombre del servicio" className="form-label">Nombre del servicio:</label>
                                    <input
                                        type="text"
                                        className={`form-control ${validationName.name && "is-invalid"}`}
                                        name="name"
                                        value={sector.name}
                                        onChange={handleChange}
                                        placeholder="Ejemplo: Unidad de terapia intensiva pediátrica"
                                    />
                                    {validationName.name && (
                                        <div className="invalid-feedback">{validationName.name}</div>
                                    )}
                                </div>
                                <div className="my-5">
                                    <label htmlFor="id del servicio" className="form-label">ID del servicio:</label>
                                    <input
                                        type="text"
                                        className={`form-control ${validationId.id && "is-invalid"}`}
                                        name="id_sector"
                                        value={sector.id_sector}
                                        onChange={handleChange}
                                        placeholder="Ejemplo: UTIP"
                                    />
                                    {validationId.id && (
                                        <div className="invalid-feedback">{validationId.id}</div>
                                    )}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="tipo de área" className="form-label">
                                        Tipo de área:
                                    </label>
                                    <div className="form-check">
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            name="tipo de área"
                                            id="área abierta"
                                            onChange={() => handleAreaChange('Área abierta')}
                                            checked={sector.state === 'Área abierta'}
                                        />
                                        <label htmlFor="área abierta" className="form-check-label">
                                            Área abierta
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            name="tipo de área"
                                            id="área cerrada"
                                            onChange={() => handleAreaChange('Área cerrada')}
                                            checked={sector.state === 'Área cerrada'}
                                        />
                                        <label htmlFor="área cerrada" className="form-check-label">
                                            Área cerrada
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="my-5 text-center">
                        <button className="btn btn-outline-dark">
                                Crear Sector
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
    );
};

export default NewSector;

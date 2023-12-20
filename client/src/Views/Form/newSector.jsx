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


    const handleChange = (e) => {
        const { name, value } = e.target;
        setSector((prevSector) => ({
            ...prevSector,
            [name]: value
        }));
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Proceder con la creación del sector
            await createSector(sector);

            // Si se crea correctamente,
            setFormState({
                success: true,
                message: "Servicio creado correctamente",
                creatingSector: false,
            });

            // Limpiar el formulario
            setSector({
                "id_sector": "",
                "image": null,
                "name": "",
                "state": ""
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
                                <div className="mb-3">
                                    <label htmlFor="image" className="form-label">Tu imagen:</label>
                                        <div className="mt-3 text-center">
                                            <ImageUpload setImageCallback={handleImageChange} />
                                        </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6">
                                <div className="mb-5">
                                    <label htmlFor="nombre del servicio" className="form-label">Nombre del servicio</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={sector.name}
                                        onChange={handleChange}
                                        placeholder="Ejemplo: Unidad de terapia intensiva pediátrica"
                                    />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="id del servicio" className="form-label">ID del servicio</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="id_sector"
                                        value={sector.id_sector}
                                        onChange={handleChange}
                                        placeholder="Ejemplo: UTIP"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="tipo de área" className="form-label">
                                        Tipo de área
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
                            <button type="submit" className="btn btn-outline-dark" disabled={formState.creatingSector}>
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

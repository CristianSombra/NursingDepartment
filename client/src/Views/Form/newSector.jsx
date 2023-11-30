import React, { useState } from "react";
import { CreateSectorHandler } from "../../Components/handlers/handlers";


const NewSector = () => {
    const [imageUrl, setImageUrl] = useState("");
    const [sector, setSector] = useState({
        "id_sector": "",
        "image": "",
        "name": "",
        "state": ""
    })


    const createSector = CreateSectorHandler();
    
    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setImageUrl(URL.createObjectURL(selectedImage));
    };

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createSector(sector);
        } catch (error) {
            console.error('Error al crear el sector', error)
        }
    }


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
                                    <input
                                        type="file"
                                        id="image"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        required
                                        className="form-control"
                                        />
                                        {imageUrl && (
                                        <div className="mt-3 text-center">
                                            <img src={imageUrl} alt="Preview" className="img-fluid rounded" />
                                        </div>
                                        )}
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
                                        placeholder="Ejemplo: Unidad de terapia intensiva pediátrica"/> 
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="id del servicio" className="form-label">ID del servicio</label>
                                    <input 
                                        type="text" 
                                        className="form-control"
                                        name="id_sector"
                                        value={sector.id_sector}
                                        onChange={handleChange} 
                                        placeholder="Ejemplo: UTIP"/>
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
                                <button type="submit" className="btn btn-outline-dark">
                                    Crear Sector
                                </button>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default NewSector
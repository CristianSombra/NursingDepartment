import React, { useState } from "react";


const NewSector = () => {
    const [imageUrl, setImageUrl] = useState("");

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setImageUrl(URL.createObjectURL(selectedImage));
    };


    return (
        <div className="container">
            <div className="row mt-5 d-flex justify-content-center">
                <div className="col-12 col-md-10">
                    <form action="">
                        <div className="row mt-5">
                            <div className="col-12 col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="image" className="form-label">Tu Imagen:</label>
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
                                <div className="mb-3">
                                    <label for="nombre del servicio" className="form-label">Nombre del servicio</label>
                                    <input type="text" className="form-control" placeholder="Ejemplo: Unidad de terapia intensiva pediátrica"/> 
                                </div>
                                <div className="mb-3">
                                    <label for="id del servicio" className="form-label">ID del servicio</label>
                                    <input type="text" className="form-control" placeholder="Ejemplo: UTIP"/>
                                </div>
                        
                                <div className="mb-3">
                                    <label for="tipo de área" className="form-label">Tipo de área</label>
                                    <div className="form-check">
                                        <input type="radio" className="form-check-input" name="tipo de área" id="área abierta"/>
                                        <label for="área abierta" className="form-check-label">Área abierta</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="radio" className="form-check-input" name="tipo de área" id="área cerrada"/>
                                        <label for="área cerrada" className="form-check-label">Área cerrada</label>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default NewSector
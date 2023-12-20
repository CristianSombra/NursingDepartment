import React, { useState } from 'react';
import { Image, CloudinaryContext } from 'cloudinary-react';

const cloudinaryCloudName = "nursingstaff"; // Reemplazo con mi cloud name
const cloudinaryUploadPreset = "preset_nursingstaff"; // Reemplazo con mi upload preset

const ImageUpload = ({ setImageCallback }) => {
    const [uploadedImage, setUploadedImage] = useState(null);

    const handleImageChange = async (e) => {
        const selectedImage = e.target.files[0];

        // Sube la imagen a Cloudinary
        const formData = new FormData();
        formData.append('file', selectedImage);
        formData.append('upload_preset', cloudinaryUploadPreset);

        try {
            const response = await fetch(
                `https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/image/upload`,
                {
                    method: 'POST',
                    body: formData,
                }
            );

            const data = await response.json();
            setUploadedImage(data.secure_url);
            setImageCallback(data.secure_url);
        } catch (error) {
            console.error('Error al cargar la imagen:', error);
        }
    };

    return (
        <div>
            <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
                required
                className="form-control"
            />
            {uploadedImage && (
                <div className="mt-3 text-center">
                    <CloudinaryContext cloudName={cloudinaryCloudName}>
                        <Image publicId={uploadedImage} alt="Vista previa" className="img-fluid rounded" />
                    </CloudinaryContext>
                </div>
            )}
        </div>
    );
};

export default ImageUpload;

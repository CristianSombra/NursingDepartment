import React, { useEffect } from "react";
import './scrollTop.css'

const ScrollTop = () => {
    useEffect(() => {
        // Obtener el botón de scroll hacia arriba
        const scrollToTopBtn = document.getElementById("scroll-to-top");

        const handleScroll = () => {
            const scrollY = window.scrollY;

            if (scrollY > 300) {
                // Mostrar el botón cuando el usuario ha desplazado 300 píxeles hacia abajo
                scrollToTopBtn.style.display = "block";
            } else {
                // Ocultar el botón cuando el usuario está en la parte superior de la página
                scrollToTopBtn.style.display = "none";
            }
        };

        // Adjuntar el evento de scroll al componente
        window.addEventListener("scroll", handleScroll);

        // Limpiar el evento al desmontar el componente para evitar pérdidas de rendimiento
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); // El segundo argumento del useEffect es un array de dependencias vacío, lo que significa que solo se ejecutará una vez al montar el componente

    // Función para hacer scroll hacia arriba cuando se hace clic en el botón
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Desplazamiento suave
        });
    };

    return (
        <button id="scroll-to-top" className="btn btn-info" onClick={scrollToTop}>
            <i className="bi bi-arrow-up-circle-fill"></i>
        </button>
    );
};

export default ScrollTop;

import React from "react";

const Protocols = () => {
    const pdfPath = process.env.PUBLIC_URL + "/protocolos/";

    return(
        <div className="container">
            <div className="row mt-5 justify-content-center">
                <div className="col-12 col-md-8">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover table-lg">
                            <caption className="text-center">Lista de protocolos</caption>
                            <thead>
                                <tr className="table-dark">
                                    <th>Sector</th>
                                    <th>Responsable</th>
                                    <th>Archivo</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Protocolo de supervisión</th>
                                    <th>Lic. José Bordón</th>
                                    <th>
                                        <a href={pdfPath + "manualsupervision.pdf"} target="_blank">
                                            <i class="bi bi-filetype-pdf fs-4"></i>
                                        </a>
                                    </th>
                                </tr>
                                <tr>
                                    <th>Protocolo de jefatura</th>
                                    <th>Lic. José Bordón</th>
                                    <th>
                                        <a href={pdfPath + "manualjefatura.pdf"} target="_blank">
                                            <i class="bi bi-filetype-pdf fs-4"></i>
                                        </a>
                                    </th>
                                </tr>
                                <tr>
                                    <th>Protocolo de infectología</th>
                                    <th>Lic. Macela Digiorgi</th>
                                    <th>
                                        <a href="" target="">
                                            <i class="bi bi-filetype-pdf fs-4"></i>
                                        </a>
                                    </th>
                                </tr>
                                <tr>
                                    <th>Protocolo de Vacunas</th>
                                    <th>Lic. Laura Flores</th>
                                    <th>
                                        <a href="" target="">
                                            <i class="bi bi-filetype-pdf fs-4"></i>
                                        </a>
                                    </th>
                                </tr>
                                <tr>
                                    <th>Protocolo de Consultorios Externos</th>
                                    <th>Lic. Natalia Álvarez</th>
                                    <th>
                                        <a href="" target="">
                                            <i class="bi bi-filetype-pdf fs-4"></i>
                                        </a>
                                    </th>
                                </tr>
                                <tr>
                                    <th>Protocolo de oncología</th>
                                    <th>Lic. Yésica Vilte</th>
                                    <th>
                                        <a href="" target="">
                                            <i class="bi bi-filetype-pdf fs-4"></i>
                                        </a>
                                    </th>
                                </tr>
                                <tr>
                                    <th>Protocolo de Hemodiálisis</th>
                                    <th>Lic. Horacio Chávez</th>
                                    <th>
                                        <a href="" target="">
                                            <i class="bi bi-filetype-pdf fs-4"></i>
                                        </a>
                                    </th>
                                </tr>
                                <tr>
                                    <th>Protocolo de guardia central</th>
                                    <th>Lic. Raúl Guzmán</th>
                                    <th>
                                        <a href="" target="">
                                            <i class="bi bi-filetype-pdf fs-4"></i>
                                        </a>
                                    </th>
                                </tr>
                                <tr>
                                    <th>Protocolo de clínica médica</th>
                                    <th>Lic. Alejandra Sanz</th>
                                    <th>
                                        <a href="" target="">
                                            <i class="bi bi-filetype-pdf fs-4"></i>
                                        </a>
                                    </th>
                                </tr>
                                <tr>
                                    <th>Protocolo de Cirugía</th>
                                    <th>Lic. Magalí Ramos</th>
                                    <th>
                                        <a href="" target="">
                                            <i class="bi bi-filetype-pdf fs-4"></i>
                                        </a>
                                    </th>
                                </tr>
                                <tr>
                                    <th>Convenio colectivo de trabajo</th>
                                    <th>-</th>
                                    <th>
                                    <a href={pdfPath + "conveniocolectivodetrabajo.pdf"} target="_blank">
                                            <i class="bi bi-filetype-pdf fs-4"></i>
                                        </a>
                                    </th>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default Protocols;
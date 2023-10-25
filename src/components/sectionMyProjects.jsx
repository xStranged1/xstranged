import house from '../assets/house.png'
import esmalte from '../assets/esmalte.png'
import casaLaCosta from '../assets/casaLaCosta.png'

export default function SectionMyProjects() {
    return(
        <div>
            <h1 className="visually-hidden">Features examples</h1>

            <div className="container px-4 py-5" id="featured-3">
                <h2 className="pb-2 border-bottom">Algunos de mis proyectos</h2>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div className="feature col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                        <img src={house} className="mt-5" width="192" height="139"/>
                    </div>
                    <h3 className="fs-2 text-body-emphasis">appLimpieza</h3>
                    <p>Aplicación movil desarrollada para gestionar la información de tareas semanales asignadas a un grupo de usuarios</p>
                    <button type="button" className="btn btn-outline-secondary btn-lg px-4" onClick={()=>{window.location.href = '#appLimpieza'}}>Ver más</button>
                </div>
                <div className="feature col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                        <img src={casaLaCosta} className="mt-5" width="200%" height="200%"/>
                    </div>
                    <h3 className="fs-2 text-body-emphasis">CasaLaCosta</h3>
                    <p>Sitio Web para dar a conocer a el Centro de Estudiantes del Partido de La Costa, el inmueble ubicado en La Plata y su mascota.</p>
                    <p>desarrollado junto con⠀
                        <a href="https://github.com/nachitoooo" target="_blank" className="icon-link">Nacho</a>
                    </p>
                    <a className="btn btn-primary btn-lg px-4 me-md-2" target='_blank' href="https://nachitoooo.github.io/casadelacosta/">
                        Visitar sitio web
                    </a>
                </div>
                <div className="feature col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                        <img src={esmalte} className="mt-5" width="100" height="100"/>
                    </div>
                    <h3 className="fs-2 text-body-emphasis">Consultorio Laura Bottarini</h3>
                    <p>Sistema web local para gestionar clientes y turnos de un consultorio esteticista</p>
                    <button type="button" className="btn btn-outline-secondary btn-lg px-4" onClick={()=>{window.location.href = '#Consultorio'}}>Ver más</button>
                </div>
                </div>
            </div>
        </div>
    )
}
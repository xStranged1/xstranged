import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
export default function SectionAppLimpieza(){
    return(
        <div>
            <h1 id='appLimpieza'>appLimpieza</h1>
            <div className="container px-4 py-5">
                <h2 className="pb-2 border-bottom text-left">Funcionalidades</h2>
                <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
                <div className="col d-flex flex-column align-items-start gap-2">
                    <h2 className="fw-bold text-body-emphasis text-left">React Native + Firebase</h2>
                    <p className="text-body-secondary text-left">El objetivo</p>
                    <a href="#" className="btn btn-primary btn-lg">Primary button</a>
                </div>

                <div className="col">
                    <div className="row row-cols-1 row-cols-sm-2 g-4">
                    <div className="col d-flex flex-column gap-2">
                        <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                            <i class="bi bi-person-fill-add"></i>
                        </div>
                        <h4 className="fw-semibold mb-0 text-body-emphasis text-left">Register/Log-In</h4>
                        <p className="text-body-secondary text-left">Autenticar usuarios, otorgar permisos y configuracion</p>
                    </div>

                    <div className="col d-flex flex-column gap-2">

                        <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                            <i class="bi bi-house-add"></i>
                        </div>
                        <h4 className="fw-semibold mb-0 text-body-emphasis text-left">Crear sectores y tareas</h4>
                        <p className="text-body-secondary text-left">CRUD sectores y tareas. Cada tarea pertenece a un sector, tiene nombre, descripción y frecuencia</p>
                    </div>

                    <div className="col d-flex flex-column gap-2">
                        <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                            <i class="bi bi-hand-index"></i>
                        </div>
                        <h4 className="fw-semibold mb-0 text-body-emphasis text-left">Asignar tareas manualmente</h4>
                        <p className="text-body-secondary text-left">Un usuario con permisos puede asignar tareas a otro usuario, tambien desasignar</p>
                    </div>

                    <div className="col d-flex flex-column gap-2">
                        <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                            <i class="bi bi-gear-fill"></i>
                        </div>
                        <h4 className="fw-semibold mb-0 text-body-emphasis text-left">Asignar tareas automaticamente</h4>
                        <p className="text-body-secondary text-left">De forma aleatoria y equitativa o rotacional por semana y en un orden configurable</p>
                    </div>
                    <div className="col d-flex flex-column gap-2">
                        <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                            <i class="bi bi-check2-square"></i>
                        </div>
                        <h4 className="fw-semibold mb-0 text-body-emphasis text-left">Marcar tareas</h4>
                        <p className="text-body-secondary text-left">Un usuario puede marcar completadas sus propias tareas y el usuario que tiene permiso las puede marcar controladas</p>
                    </div>
                    <div className="col d-flex flex-column gap-2">
                        <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                            <i class="bi bi-collection"></i>
                        </div>
                        <h4 className="fw-semibold mb-0 text-body-emphasis text-left">Notificaciones</h4>
                        <p className="text-body-secondary text-left">El sistema notifica a los usuarios si no marcaron completadas sus tareas</p>
                    </div>
                    <div className="col d-flex flex-column gap-2">
                        <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                            <i class="bi bi-collection"></i>
                        </div>
                        <h4 className="fw-semibold mb-0 text-body-emphasis text-left">Marcar tareas</h4>
                        <p className="text-body-secondary text-left">Lorem ipsum dolor sit amet consectetur adipisicing e</p>
                    </div>

                    <div className="col d-flex flex-column gap-2">

                        <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                            <i class="bi bi-gear-fill"></i>
                        </div>
                        <h4 className="fw-semibold mb-0 text-body-emphasis text-left">Historial</h4>
                        <p className="text-body-secondary text-left">Cada usuario tiene su propio historial de tareas guardado</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        
    )
}
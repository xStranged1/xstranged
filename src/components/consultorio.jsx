import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import woman from '../assets/woman.png'
import s1 from '../assets/screens-consultorio/1s.png'
import s2 from '../assets/screens-consultorio/2s.png' 
import s3 from '../assets/screens-consultorio/3s.png' 
import s4 from '../assets/screens-consultorio/4s.png'
import s5 from '../assets/screens-consultorio/5s.png'


export default function SectionConsultorio() {

    const carbon = {
        color: "#07183f",
        textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
      };
    const textBlue = {
        color: "#1e2460",
        textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
    }
       

    return(
        <div>
            <div class="px-4 py-5 my-5 text-center" id='Consultorio'>
                <img class="d-block mx-auto mb-4" src={woman} alt="" width="256" height="256"/> 
                <h1 class="display-5 fw-bold text-body-emphasis">Consultorio Esteticista</h1>
                <div class="col-lg-6 mx-auto">
                    <p class="lead mb-4">Proyecto realizado en el año 2019, utilizando PHP, SQL y corriendo en un servidor local APACHE. Actualmente sigue en funcionamiento</p>
                </div>
            </div>

            <div id="myCarousel" className="carousel slide mb-6"  data-bs-ride="carousel">
                <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="4" aria-label="Slide 6"></button>

                </div>
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <rect width="100%" height="100%" fill="var(--bs-secondary-color)"/>
                            <image
                                href={s1}
                                width="100%"
                                height="100%"
                            />
                    </svg>

                    <div className="container">
                        <div className="carousel-caption">
                            <h1 style={carbon}>Pantalla de inicio</h1>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <rect width="100%" height="100%" fill="var(--bs-secondary-color)"/>
                            <image
                                href={s2}
                                width="100%"
                                height="100%"
                            />
                    </svg>

                    <div className="container">
                        <div className="carousel-caption">
                            <h1 style={carbon}>Pantalla Crear Cliente</h1>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <rect width="100%" height="100%" fill="var(--bs-secondary-color)"/>
                            <image
                                href={s3}
                                width="100%"
                                height="100%"
                            />
                    </svg>

                    <div className="container">
                        <div className="carousel-caption">
                            <h1 style={carbon}>Pantalla Ver Clientes</h1>
                            <p style={carbon}>Si se elimina un cliente se eliminan tambien sus turnos</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <rect width="100%" height="100%" fill="var(--bs-secondary-color)"/>
                            <image
                                href={s4}
                                width="100%"
                                height="100%"
                            />
                    </svg>

                    <div className="container">
                        <div className="carousel-caption">
                            <h1 style={carbon}>Pantalla de Turnos</h1>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <rect width="100%" height="100%" fill="var(--bs-secondary-color)"/>
                            <image
                                href={s5}
                                width="100%"
                                height="100%"
                            />
                    </svg>

                    <div className="container">
                        <div className="carousel-caption">
                            <h1 style={carbon}>Pantalla Modificar Turnos</h1>
                        </div>
                    </div>
                </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </button>
            </div>
            <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>
        </div>
    )
}
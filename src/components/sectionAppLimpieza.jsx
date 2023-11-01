import 'bootstrap/dist/js/bootstrap.bundle.js'
import imgFirebase from '../assets/imgFirebase.png'
import imgReact from '../assets/imgReact.png'
import imgExpo from '../assets/imgExpo.png'
import imgNotification from '../assets/imgNotification.png'
import screenSignIn from '../assets/screens-appLimpieza/screenSignIn.png'
import screenLogIn from '../assets/screens-appLimpieza/screenLogIn.png'
import gif from '../assets/screens-appLimpieza/gif.gif'
import screen1 from '../assets/screens-appLimpieza/screen1.png'
import videoHome from '../assets/screens-appLimpieza/videoHome.mp4'
import video1 from '../assets/screens-appLimpieza/sw.mp4'
import { useState } from 'react'



export default function SectionAppLimpieza(){

    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const carbon = {
        userSelect: 'none',
        fontSize: 30,
        color: "#07183f",
        textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
        opacity: 0.75,
        marginBottom:-25,
      };
      
    const handleIndicators = () => {
        isVideoPlaying ? setIsVideoPlaying(false) : setIsVideoPlaying(true)
      }

    const handleCarousel = () =>{
        // console.log('hola');
    }
    return(
        <div id='appLimpieza'>
            <h1 className="display-5 fw-bold text-body-emphasis">appLimpieza</h1>
            <div className="container px-4 py-5">
                <h2 className="pb-2 border-bottom text-left">Funcionalidades</h2>
                <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
                <div className="col d-flex flex-column align-items-center gap-2">          
                    <div className="d-flex align-items-center">
                        <img src={imgReact} className="bi me-2" width="80" height="80"/>
                        <div style={{marginLeft: 10}}/>
                        <h2 className="fw-bold text-body-emphasis text-left">  + </h2>
                        <div style={{marginLeft: 10}}/>
                        <img src={imgFirebase} className="bi me-2" width="55" height="55"/>
                        <div style={{marginLeft: 10}}/>
                        <h2 className="fw-bold text-body-emphasis text-left">  + </h2>
                        <div style={{marginLeft: 10}}/>
                        <img src={imgExpo} className="bi me-2" width="55" height="55"/>
                    </div>
                    <h3 className="fs-2 text-body">React Native, Firebase y Expo</h3>
                    <p className="text-body-secondary text-center">Desarrollado con React Native, Firebase y Expo.</p>
                


                    <div id="carrouselAppLimpieza" className="carousel slide mb-6"  data-bs-ride="carousel" style={{width: 316}}>
                        <div className = {isVideoPlaying ? 'carousel-indicators ds-none' : 'carousel-indicators '} >
                            <button type="button" data-bs-target="#carrouselAppLimpieza" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carrouselAppLimpieza" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carrouselAppLimpieza" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carrouselAppLimpieza" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carrouselAppLimpieza" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#carrouselAppLimpieza" data-bs-slide-to="5" aria-label="Slide 6"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000" style={{backgroundColor: "#fff"}}>
                                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                    <rect width="100%" height="100%" fill="var(--bs-secondary-color)"/>
                                        <image
                                            href={screenSignIn}
                                            width="100%"
                                            height="100%"
                                        />
                                </svg>
                                <div className="container">
                                    <div className="carousel-caption">
                                            <h1 style={carbon}>SignIn</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="10000">
                                <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                                    <rect width="100%" height="100%" fill="var(--bs-secondary-color)"/>
                                        <image
                                            href={screenLogIn}
                                            width="100%"
                                            height="100%"
                                        />
                                </svg>
                                <div className="container">
                                    <div className="carousel-caption">
                                        <h1 style={carbon}>Login</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="60000" >
                                        <video width="100%" height="100%" controls onPause={handleIndicators} onPlay={handleIndicators}>
                                            <source src={videoHome} type="video/mp4" />
                                        </video>

                                <div className="container">
                                    <div className="carousel-caption">
                                        <h1 style={carbon}>Home</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="60000" >
                                        <video width="100%" height="100%" autoPlay>
                                            <source src={video1} type="video/mp4" />
                                        </video>

                                <div className="container">
                                    <div className="carousel-caption">
                                        <h1 style={carbon}>Pantalla1</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="10000">
                                <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                                    <rect width="100%" height="100%" fill="var(--bs-secondary-color)"/>
                                        <image
                                            href={gif}
                                            width="100%"
                                            height="100%"
                                        />
                                </svg>

                                <div className="container">
                                    <div className="carousel-caption">
                                        <h1 style={carbon}>Pantalla2</h1>
                                        <p style={carbon}>dfsacwqqw</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="10000">
                                <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                                    <rect width="100%" height="100%" fill="var(--bs-secondary-color)"/>
                                        <image
                                            href={screen1}
                                            width="100%"
                                            height="100%"
                                        />
                                </svg>

                                <div className="container">
                                    <div className="carousel-caption">
                                        <h1 style={carbon}>Pantalla3</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="10000">
                                <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                                    <rect width="100%" height="100%" fill="var(--bs-secondary-color)"/>
                                        <image
                                            href={screen1}
                                            width="100%"
                                            height="100%"
                                        />
                                </svg>

                                <div className="container">
                                    <div className="carousel-caption">
                                        <h1 style={carbon}>Pantalla4</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button onClick={handleCarousel} className="carousel-control-prev" type="button" data-bs-target="#carrouselAppLimpieza" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon arrow-black" style={{ filter: "invert(90%)" }}  aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button onClick={handleCarousel} className="carousel-control-next" type="button" data-bs-target="#carrouselAppLimpieza" data-bs-slide="next">
                            <span className="carousel-control-next-icon arrow-black" style={{ filter: "invert(90%)" }} aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
            </div>








                </div>

                <div className="col">
                    <div className="row row-cols-1 row-cols-sm-2 g-4">
                        <div className="col d-flex flex-column gap-2">
                            <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                                <i className="bi bi-person-fill-add"></i>
                            </div>
                            <h4 className="fw-semibold mb-0 text-body-emphasis text-left">Register/Log-In</h4>
                            <p className="text-body-secondary text-left">Autenticar usuarios, otorgar permisos y configuracion</p>
                        </div>

                        <div className="col d-flex flex-column gap-2">

                            <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                                <i className="bi bi-house-add"></i>
                            </div>
                            <h4 className="fw-semibold mb-0 text-body-emphasis text-left">Crear sectores y tareas</h4>
                            <p className="text-body-secondary text-left">CRUD sectores y tareas. Cada tarea pertenece a un sector, tiene nombre, descripción y frecuencia</p>
                        </div>

                        <div className="col d-flex flex-column gap-2">
                            <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                                <i className="bi bi-hand-index"></i>
                            </div>
                            <h4 className="fw-semibold mb-0 text-body-emphasis text-left">Asignar tareas manualmente</h4>
                            <p className="text-body-secondary text-left">Un usuario con permisos puede asignar tareas a otro usuario, tambien desasignar</p>
                        </div>

                        <div className="col d-flex flex-column gap-2">
                            <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                                <i className="bi bi-gear-fill"></i>
                            </div>
                            <h4 className="fw-semibold mb-0 text-body-emphasis text-left">Asignar tareas automaticamente</h4>
                            <p className="text-body-secondary text-left">De forma aleatoria y equitativa o rotacional por semana y en un orden configurable</p>
                        </div>
                        <div className="col d-flex flex-column gap-2">
                            <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                                <i className="bi bi-check2-square"></i>
                            </div>
                            <h4 className="fw-semibold mb-0 text-body-emphasis text-left">Marcar tareas</h4>
                            <p className="text-body-secondary text-left">Un usuario puede marcar completadas sus propias tareas y el usuario que tiene permiso las puede marcar controladas</p>
                        </div>
                        <div className="col d-flex flex-column gap-2">
                            <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                                <i className="bi bi-collection"></i>
                            </div>
                            <h4 className="fw-semibold mb-0 text-body-emphasis text-left">Estado de las tareas asignadas</h4>
                            <p className="text-body-secondary text-left">Verde si estan todas controladas, azul si estan marcadas por el usuario y amarillo si estan asignadas sin marcar </p>
                        </div>
                        <div className="col d-flex flex-column gap-2">
                            <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                                <img src={imgNotification} width={33} height={33} alt="" />
                            </div>
                            <h4 className="fw-semibold mb-0 text-body-emphasis text-left">Notificaciones</h4>
                            <p className="text-body-secondary text-left">El sistema notifica a los usuarios si no marcaron completadas sus tareas</p>
                        </div>
                        

                        <div className="col d-flex flex-column gap-2">

                            <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                                <i className="bi bi-gear-fill"></i>
                            </div>
                            <h4 className="fw-semibold mb-0 text-body-emphasis text-left">Historial</h4>
                            <p className="text-body-secondary text-left">Todos los usuarios tienen su historial de tareas asignadas por semana</p>
                        </div>
                    </div>
                                    
                </div>
                </div>
            </div>
        </div>
        
    )
}
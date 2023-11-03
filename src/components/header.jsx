import { useState } from 'react'
import ghIcon from '../assets/gitHub.png'
export default function Header () {
    const [expanded, setExpanded] = useState(false)
    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark py-3 mb-4 border-bottom" aria-label="navbar">
            <div className="container px-4">
                <a href="https://github.com/xstranged1" target='_blank' className="mb-md-0 me-md-auto display-contents mr-60 link-body-emphasis text-decoration-none hover-op">
                    <img src={ghIcon} className="bi me-2 invert-color" width="40" height="40"/>
                    <div className='ml-10'/>
                    <span className="fs-4 color-ghwt">xStranged</span>
                </a>
                <button className="navbar-toggler" onClick={() => {expanded ? setExpanded(false) : setExpanded(true)}} type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse flex-reverse ${expanded ? 'mt-4': '' }`} id="navbar">
                    <ul className="nav nav-pills justify-content-center">
                        <li className="nav-item"><a href="#appLimpieza" className="nav-link active color-ghwt">appLimpieza</a></li>
                        <li className="nav-item"><a href="#CasaLaCosta" className="nav-link color-ghwt ">CasaLaCosta</a></li>
                        <li className="nav-item"><a href="#Consultorio" className="nav-link color-ghwt">Esteticista</a></li>
                        <li className="nav-item"><a href="#Contacto" className="nav-link color-ghwt">Contacto</a></li>
                    </ul>
                    
                </div>
            </div>
        </nav>
        // <div className='container'>

        //     <nav className="navbar-expand-lg d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        //         <a href="https://github.com/xstranged1" target='_blank' className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none hover-op">
        //             <img src={ghIcon} className="bi me-2" width="40" height="40"/>
        //             <span className="fs-4">xStranged</span>
        //         </a>
                

                // <ul className="nav nav-pills">
                //     <li className="nav-item"><a href="#appLimpieza" className="nav-link active">appLimpieza</a></li>
                //     <li className="nav-item"><a href="#CasaLaCosta" className="nav-link">CasaLaCosta</a></li>
                //     <li className="nav-item"><a href="#Consultorio" className="nav-link">Esteticista</a></li>
                //     <li className="nav-item"><a href="#Contacto" className="nav-link">Contacto</a></li>
                // </ul>
                

        //     </nav>
        // </div>
    )
}
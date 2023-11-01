import 'bootstrap/dist/css/bootstrap.min.css';
import ghIcon from '../assets/gitHub.png'
export default function Header () {
    return(
        <div className='container'>
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="https://github.com/xstranged1" target='_blank' className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none hover-op">
                    <img src={ghIcon} className="bi me-2" width="40" height="40"/>
                    <span className="fs-4">xStranged</span>
                </a>

                <ul className="nav nav-pills">
                    <li className="nav-item"><a href="#appLimpieza" className="nav-link active">appLimpieza</a></li>
                    <li className="nav-item"><a href="#CasaLaCosta" className="nav-link">CasaLaCosta</a></li>
                    <li className="nav-item"><a href="#Consultorio" className="nav-link">Esteticista</a></li>
                    <li className="nav-item"><a href="#Contacto" className="nav-link">Contacto</a></li>
                </ul>
            </header>
        </div>
    )
}
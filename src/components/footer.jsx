export default function Footer(){
    return(
        <div>
            <div className="b-example-divider"></div>
            <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                <a href="https://github.com/xStranged1" target="_blank" className="mb-1 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1" >
                    <i className="bi-github fs-3"></i>
                </a>
                    <span className="mb-1 mb-md-0 text-body-secondary">&copy; xStranged1</span>
                </div>
                <ul className="nav justify-content-end list-unstyled d-flex mt-2"> 
                    <li className="ms-3"><p className="text-body-secondary">fede.valle04@gmail.com</p> </li>
                    <li className="ms-3"><a className="text-body-secondary" about="_blank" href="https://www.instagram.com/fedevalle1/"><i className="bi bi-instagram fs-4"></i></a></li>
                    <li className="ms-3"><a className="text-body-secondary" about="_blank" href="#"><i className="bi bi-discord fs-4"></i></a></li>
                </ul>
            </footer>
            </div>
        </div>
    )
}
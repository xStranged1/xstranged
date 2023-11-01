import me from '../assets/me.jpg'

export default function SectionMe() {

    return(
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
                <img src={me} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
            </div>
            <div className="col-lg-6">
                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3" style={{textAlign: 'left'}}>Federico Valle</h1>
                <p className="lead" style={{textAlign: 'left'}}>Soy un estudiante de 3er año de Ingeniería en Sistemas de Información en la UTN FRLP. </p>
                <p className="lead" style={{textAlign: 'left'}}>Disfruto de diseñar soluciones a problemas reales, de adquirir conocimiento, me gusta la ciencia, entre otras cosas.</p>
                <p className="lead" style={{textAlign: 'left'}}></p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                </div>
            </div>
            </div>
        </div>
    )
}
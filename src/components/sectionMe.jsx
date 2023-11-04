import { Suspense } from 'react'
import me from '../assets/me.jpg'

export default function SectionMe() {

    return(
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
                <img src={me} loading='lazy' className="d-block mx-lg-auto img-fluid" alt="Federico Valle" width="700" height="500" style={{ borderRadius: 5 }} />
            </div>
            <div className="col-lg-6">
                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-4" style={{textAlign: 'left'}}>Federico Valle</h1>
                <p className="lead" style={{textAlign: 'left'}}>Soy un estudiante de 3er año de Ingeniería en Sistemas de Información en la UTN FRLP.</p>
                <p className="lead" style={{textAlign: 'left'}}>Me gusta analizar problemas reales, diseñar soluciones, desarrollar sitios web, tengo facilidad para aprender nuevas tecnologías, tambien me gusta la ciencia, la fisica, entre otras cosas.</p>
                <p className="lead" style={{textAlign: 'left'}}>Aprendí a programar en 3er año de secundaria, me encanto y decidí esto es a lo que me queria dedicar.</p>
                
            </div>
            </div>
        </div>
    )
}
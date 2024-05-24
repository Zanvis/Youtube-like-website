import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function FilmDetail(){
    let {film_id} = useParams();
    
    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                    <img src="/logo512.png" className="img-thumbnail" alt="foto"/>
                </div>
                <div className="col-8">
                    <h3>Tytuł filmu {film_id}</h3>
                    <p>Informacje o filmie</p>
                    <p className="fw-bold">Autor filmu: <Link to="/about">Nazwa autora</Link></p>
                    <p className="fw-bold">Czas trwania: <span>20 minut</span></p>
                    <p className="fw-bold">Ilość wyświetleń: <span>1200</span></p>
                    <p className="fw-bold">Oceny: 5/5</p>
                </div>
            </div>
            {/* Tematy filmu start */}
            <div className="card mt-4">
                <h3 className="card-header">
                    Lista tematów filmu
                </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Informacje wstępne o Satranim</li>
                    <li className="list-group-item">Sprzęt Satrianiego</li>
                </ul>
            </div>
            {/* Tematy filmu end */}
            <h3 className="pb-1 mb-4">Podobne filmy</h3>
            <div className="row mb-4">
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/detail/1"><img src="/logo512.png" className="card-img-top" alt="foto"/></Link>
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to="/detail/1" className="btn btn-primary">Tytuł filmu</Link>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/detail/1"><img src="/logo512.png" className="card-img-top" alt="foto"/></Link>
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to="/detail/1" className="btn btn-primary">Tytuł filmu</Link>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <h1>FilmDetail {film_id}</h1>
    );
}

export default FilmDetail;
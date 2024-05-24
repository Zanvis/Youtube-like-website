import { Link } from "react-router-dom";

function Home(){
    return(
        <div className="container mt-4">
            {/* Ostatnie filmy start */}
            <h3 className="pb-1 mb-4">Ostatnie filmy</h3>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <Link to="/detail/1"><img src="logo512.png" className="card-img-top" alt="foto"></img></Link>
                            <div className="card-body">
                                <h5 className="card-title">
                                    <Link to="/detail/1" className="btn btn-primary">Tytuł filmu</Link>
                                    {/* <a href="#" className="btn btn-primary">Tytuł filmu</a> */}
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                        <Link to="/detail/2"><img src="logo512.png" className="card-img-top" alt="foto"></img></Link>
                            <div className="card-body">
                                <h5 className="card-title">
                                    <Link to="/detail/2" className="btn btn-primary">Tytuł filmu</Link>
                                    {/* <a href="#" className="btn btn-primary">Tytuł filmu</a> */}
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <Link to="/about"><img src="logo512.png" className="card-img-top" alt="foto"></img></Link>
                            <div className="card-body">
                                <h5 className="card-title">
                                    <a href="#" className="btn btn-primary">Tytuł filmu</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <Link to="/about"><img src="logo512.png" className="card-img-top" alt="foto"></img></Link>
                            <div className="card-body">
                                <h5 className="card-title">
                                    <a href="#" className="btn btn-primary">Tytuł filmu</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Ostatnie filmy end */}
                {/* Popularne filmy start */}
            <h3 className="pb-1 mb-4">Popularne filmy</h3>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <a href="#"><img src="logo512.png" className="card-img-top" alt="foto"></img></a>
                            <div className="card-body">
                                <h5 className="card-title">
                                    <a href="#" className="btn btn-primary">Tytuł filmu</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <a href="#"><img src="logo512.png" className="card-img-top" alt="foto"></img></a>
                            <div className="card-body">
                                <h5 className="card-title">
                                    <a href="#" className="btn btn-primary">Tytuł filmu</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <a href="#"><img src="logo512.png" className="card-img-top" alt="foto"></img></a>
                            <div className="card-body">
                                <h5 className="card-title">
                                    <a href="#" className="btn btn-primary">Tytuł filmu</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <a href="#"><img src="logo512.png" className="card-img-top" alt="foto"></img></a>
                            <div className="card-body">
                                <h5 className="card-title">
                                    <a href="#" className="btn btn-primary">Tytuł filmu</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            {/* Popularne filmy end */}
            {/* Popularni autorzy filmów start */}
            <h3 className="pb-1 mb-4">Popularni autorzy</h3>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <a href="#"><img src="logo512.png" className="card-img-top" alt="foto"></img></a>
                            <div className="card-body">
                                <h5 className="card-title">
                                    <a href="#" className="btn btn-primary">Nazwa autora</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <a href="#"><img src="logo512.png" className="card-img-top" alt="foto"></img></a>
                            <div className="card-body">
                                <h5 className="card-title">
                                    <a href="#" className="btn btn-primary">Nazwa autora</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <a href="#"><img src="logo512.png" className="card-img-top" alt="foto"></img></a>
                            <div className="card-body">
                                <h5 className="card-title">
                                    <a href="#" className="btn btn-primary">Nazwa autora</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <a href="#"><img src="logo512.png" className="card-img-top" alt="foto"></img></a>
                            <div className="card-body">
                                <h5 className="card-title">
                                    <a href="#" className="btn btn-primary">Nazwa autora</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            {/* Popularni autorzy filmów end */}
            {/* Opinie filmów start */}
            <h3 className="pb-1 mb-4 mt-5">Opinie filmów</h3>
            <div id="carouselFeedback" className="carousel slide bg-dark text-white py-5" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselFeedback" data-bs-slide-to="0" aria-current="true" className="active"></button>
                    <button type="button" data-bs-target="#carouselFeedback" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#carouselFeedback" data-bs-slide-to="2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <figure className="text-center">
                            <blockquote className="blockquote">
                                <p>Ten film jest fajny</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                <p>Jan Kowalski</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="carousel-item">
                        <figure className="text-center">
                            <blockquote className="blockquote">
                                <p>Ten film jest fajny</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                <p>Jan Kowalski</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="carousel-item">
                        <figure className="text-center">
                            <blockquote className="blockquote">
                                <p>Ten film jest fajny</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                <p>Jan Kowalski</p>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselFeedback" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselFeedback" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* Opinie filmów end */}
        </div>
    );
}

export default Home;
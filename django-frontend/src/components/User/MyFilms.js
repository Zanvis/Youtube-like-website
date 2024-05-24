import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
function MyFilms(){
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <Sidebar/>
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header">Moje filmy</h5>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Nazwa filmu</th>
                                        <th>Autor</th>
                                        <th>Akcja</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Władca Pierścieni</td>
                                        <td>Jan Kowalski</td>
                                        <td>
                                            <button className="btn btn-danger btn-sm active">Usuń</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Władca Pierścieni</td>
                                        <td>Jan Kowalski</td>
                                        <td>
                                            <button className="btn btn-danger btn-sm active">Usuń</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Władca Pierścieni</td>
                                        <td>Jan Kowalski</td>
                                        <td>
                                            <button className="btn btn-danger btn-sm active">Usuń</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
export default MyFilms;
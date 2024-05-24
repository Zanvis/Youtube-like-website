import Sidebar from "./Sidebar";
function ChangePassword(){
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <Sidebar/>
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header">Zmiana hasła</h5>
                        <div className="card-body">
                            <div className="mb-3 row">
                                <label for="password" className="col-sm-2 col-form-label">Nowe hasło</label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" id="password"></input>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <div className="col-sm-10">
                                    <button className="btn btn-primary">Zmień hasło</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
export default ChangePassword;
import { Link } from "react-router-dom";
function Login(){
    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card">
                        <h5 className="card-header">Logowanie usera</h5>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label for="email" className="form-label">Nazwa usera</label>
                                    <input type="email" className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label for="password" className="form-label">Hasło</label>
                                    <input type="password" className="form-control"/>
                                </div>
                                <button type="submit">Zaloguj</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;
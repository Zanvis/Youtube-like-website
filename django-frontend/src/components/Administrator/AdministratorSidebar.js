import { Link } from "react-router-dom";
function AdministatorSidebar(){
    return(
        <div className="card">
            <div className="list-group">
                <Link to="/admin-panel" className="list-group-item list-group-item-action">Panel Admina</Link>
                <Link to="/admin-films" className="list-group-item list-group-item-action">Filmy Admina</Link>
                <Link to="/admin-add-film" className="list-group-item list-group-item-action">Dodaj film</Link>
                <Link to="/admin-settings" className="list-group-item list-group-item-action">Ustawienia admina</Link>
                <Link to="/admin-change-password" className="list-group-item list-group-item-action">Zmiana hasła</Link>
            </div>
        </div>
    );
}
export default AdministatorSidebar;
import { Link } from "react-router-dom";
function Sidebar(){
    return(
        <div className="card">
            <Link to="/user-panel" className="list-group-item list-group-item-action">Panel użytkownika</Link>
            <div className="list-group list-group-flush">
                <Link to="/my-films" className="list-group-item list-group-item-action">Moje filmy</Link>
                <Link to="/favorite-films" className="list-group-item list-group-item-action">Ulubione filmy</Link>
                <Link to="/recommended-films" className="list-group-item list-group-item-action">Polecane filmy</Link>
                <Link to="/profile-setting" className="list-group-item list-group-item-action">Ustawienia</Link>
                <Link to="/change-password" className="list-group-item list-group-item-action">Zmiana hasła</Link>
                <Link to="/user-login" className="list-group-item list-group-item-action text-danger">Wylogowanie</Link>
            </div>
        </div>
    );
}
export default Sidebar;
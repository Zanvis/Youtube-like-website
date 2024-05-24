import { Link } from "react-router-dom";

function Header(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to="/" className="navbar-brand">Youtube App</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false">
                    <span className="navbar-toggle-icon"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a href = "#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Administratorzy
                        </a>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/admin-login">Logowanie</Link></li>
                            <li><Link className="dropdown-item" to="/admin-register">Rejestracja</Link></li>
                            <li><hr className="dropdown-deivider" /></li>
                            <li><Link className="dropdown-item" to="/admin-panel">Panel</Link> </li>
                            <li><Link className="dropdown-item" to="/admin-login">Wyloguj</Link> </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a href = "#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Users
                        </a>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to = "/user-login">Logowanie</Link></li>
                            <li><Link className="dropdown-item" to = "/user-register">Rejestracja</Link></li>
                            <li><hr className="dropdown-deivider" /></li>
                            <li><Link className="dropdown-item" to = "/user-panel">Panel</Link> </li>
                            <li><Link className="dropdown-item" to = "/user-login">Wyloguj</Link> </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Header;
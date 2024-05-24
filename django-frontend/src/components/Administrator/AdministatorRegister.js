import { useState } from "react";
import AuthService from '../Services/auth_service';
import { useNavigate } from "react-router-dom";

function AdministatorRegister(){
    const [fullName, setFullName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [roles, setRoles] = useState('');
    const [mobileNumber, setMobileNr] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate();
    const handleSignUp = async (event) =>{
        try{
            await AuthService.singup(fullName, userName, email, password, roles, mobileNumber, address).then((response)=>{
                navigate('/');
                window.location.reload();
            })
        }catch(error){
            console.log(error);
        }
    }

    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card">
                        <h5 className="card-header">Rejestracja Administratora</h5>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label for="name" className="form-label">Pełna nazwa</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label for="email" className="form-label">Email</label>
                                    <input type="email" className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label for="password" className="form-label">Hasło</label>
                                    <input type="password" className="form-control"/>
                                </div>
                                <button type="submit" className="btn btn-primary">Zarejestruj</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdministatorRegister;
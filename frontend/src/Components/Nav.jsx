import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import logo from "../Images/8890b180-cee1-4c9d-a001-c1d327b12dc8_200x200.png";
import axios from "axios";
import { UserContext } from '../Contexts/UserContext';
import { MenuListContext } from "../Contexts/MenuListContext";
import { HashLink as Link } from 'react-router-hash-link';

function Nav(props) {
    const userctx = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const context = useContext(MenuListContext);
    const cartItemNumber=(context.cart.reduce((count, curItem) => {
        return count + curItem.quantity;
    }, 0))

    const Login = () =>  {
        axios.post("http://localhost:8000/auth/login", {
            email: email,
            password: password,
        }, {
            withCredentials: true
        }).then(res => {
            if (res.data === "Succesfully Authenticated!") {
                window.location.href = "/";
            }
        }, () => {
            console.log("Failure!")
            alert("Sikertelen bejelentkezés!");
            window.location.href = "/";
        })
    }

    const GetUser = () => {
        axios.get("http://localhost:8000/auth/user", {
            withCredentials: true
        }).then(res => {
            console.log(res.data);
        })
    }

    const Logout = () => {
        axios.get("http://localhost:8000/auth/logout", {
            withCredentials: true
        }).then(res => {
            if (res.data === "Logged out Successfully!") {
                window.location.href = "/";
            }
        })
    };

    return(
        <div>
            <div className="Nav">
                <div className="header d-flex justify-content-center">
                    <img src={logo} alt="logo" id="logo"/>
                </div>
                
                <nav className="navbar navbar-expand-lg navbar-light bg-custom pt-2 pb-2" id="navID">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Főoldal <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">Rólunk</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Kapcsolat</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Étlap
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link className="dropdown-item" to="/menu#C1">Pizzák</Link>
                                <Link className="dropdown-item" to="/menu#C2">Hamburgerek</Link>
                                <Link className="dropdown-item" to="/menu#C3">Üdítők és köretek</Link>
                                </div>
                            </li>
                            {userctx ? (
                                <>
                                {/* <li className="nav-item">
                                    <Link className="nav-link" to="/profile">Profil</Link>
                                </li> */}
                                {userctx.isAdmin ? (
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/admin">Admin</Link>
                                    </li>
                                ) : null}
                                {/* <li className="nav-item">
                                    <button className="btn btn-custom minilogin" onClick={GetUser}>GetUser</button>
                                </li> */}
                                </>
                            ) : (
                                <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/registration">Regisztráció</Link>
                                </li>
                                </>
                            )}    
                        </ul>

                        {/* Login Dropdown */}
                        <div className="navbar-nav ml-auto">
                            {userctx ? (
                                <>
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="btn btn-custom CartLink" to="/cart"><span><i className="fas fa-shopping-basket"></i> </span>{cartItemNumber}</Link>
                                        {/* { cart === undefined ? (<></>) : (<>({cart.length})</>) } */}
                                    </li>
                                </ul>
                                <input type="button" className="btn btn-custom minilogout" value="Kijelentkezés" onClick={Logout}/>
                                </>
                            ) : (
                                <>
                                <div className="nav-item dropdown login-dropdown">
                                    <a href="#" data-toggle="dropdown" className="nav-item nav-link dropdown-toggle" aria-expanded="false"><i className="fa fa-user-o"></i> Bejelentkezés</a>
                                    <div className="dropdown-menu">					
                                        <form className="form-inline login-form logindiv">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text iconBox">
                                                        <span className="fa fa-user"></span>
                                                    </span>                    
                                                </div>
                                                <input type="email" className="form-control" placeholder="E-mail" name="email" id="email" onChange={e => setEmail(e.target.value)}/>
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text iconBox">
                                                        <i className="fa fa-lock"></i>
                                                    </span>                    
                                                </div>
                                                <input type="password" className="form-control" placeholder="Jelszó" name="password" id="loginpassword" onChange={e => setPassword(e.target.value)}/>
                                            </div> 
                                            <input type="button" className="btn btn-custom minilogin" value="Bejelentkezés" onClick={Login}/>                                                               
                                        </form>
                                    </div>
                                </div>
                                </>
                            )}                             			
                        </div>
                    </div>       
                </nav>
            </div>
        </div>
    );
}
export default withRouter(Nav);
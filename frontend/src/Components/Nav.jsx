import React, { useState, useContext } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import logo from "../Images/8890b180-cee1-4c9d-a001-c1d327b12dc8_200x200.png";
import axios from "axios";
import { UserContext } from '../Contexts/UserContext';

function Nav(props) {
    const userctx = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
                <div class="header d-flex justify-content-center">
                    <img src={logo} id="logo"/>
                </div>
                
                <nav class="navbar navbar-expand-lg navbar-light bg-custom pt-2 pb-2" id="navID">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="/">Főoldal <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/about">Rólunk</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/contact">Kapcsolat</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Étlap
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="/menu#C1">Pizzák</a>
                                <a class="dropdown-item" href="/menu#C2">Hamburgerek</a>
                                <a class="dropdown-item" href="/menu#C3">Üdítők és köretek</a>
                                </div>
                            </li>
                            {userctx ? (
                                <>
                                <li class="nav-item">
                                    <a class="nav-link" href="/profile">Profil</a>
                                </li>
                                {userctx.isAdmin ? (
                                    <li class="nav-item">
                                        <a class="nav-link" href="/admin">Admin</a>
                                    </li>
                                ) : null}
                                <li class="nav-item">
                                    <button class="btn btn-custom minilogin" onClick={GetUser}>GetUser</button>
                                </li>
                                </>
                            ) : (
                                <>
                                <li class="nav-item">
                                    <a class="nav-link" href="/registration">Regisztráció</a>
                                </li>
                                </>
                            )}    
                        </ul>

                        {/* Login Dropdown */}
                        <div class="navbar-nav ml-auto">
                            {userctx ? (
                                <>
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a class="btn btn-custom CartLink" href="/cart"><span><i class="fas fa-shopping-basket"></i></span></a>
                                    </li>
                                </ul>
                                <input type="button" class="btn btn-custom minilogout" value="Kijelentkezés" onClick={Logout}/>
                                </>
                            ) : (
                                <>
                                <div class="nav-item dropdown login-dropdown">
                                    <a href="#" data-toggle="dropdown" class="nav-item nav-link dropdown-toggle" aria-expanded="false"><i class="fa fa-user-o"></i> Bejelentkezés</a>
                                    <div class="dropdown-menu">					
                                        <form class="form-inline login-form logindiv">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text iconBox">
                                                        <span class="fa fa-user"></span>
                                                    </span>                    
                                                </div>
                                                <input type="email" class="form-control" placeholder="E-mail" name="email" id="email" onChange={e => setEmail(e.target.value)}/>
                                            </div>
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text iconBox">
                                                        <i class="fa fa-lock"></i>
                                                    </span>                    
                                                </div>
                                                <input type="password" class="form-control" placeholder="Jelszó" name="password" id="loginpassword" onChange={e => setPassword(e.target.value)}/>
                                            </div> 
                                            <input type="button" class="btn btn-custom minilogin" value="Bejelentkezés" onClick={Login}/>                                                               
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
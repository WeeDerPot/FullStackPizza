import React, { useState, useContext } from "react";
import axios from "axios";
import { Redirect, withRouter } from "react-router-dom";

function Registration(props) {


    const [registerFullname, setRegisterFullname] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerAddress, setRegisterAddress] = useState("");
    const [registerPassword1, setRegisterPassword1] = useState("");
    const [registerPassword2, setRegisterPassword2] = useState("");


    const Register = () => {
        if (!registerFullname) alert("Nem adtál meg nevet!");
        else if (!registerAddress) alert("Nem adtál meg címet!");
        else if (!registerPassword1) alert("Nem adtál meg jelszót!");
        else if (registerPassword1 !== registerPassword2) {
            alert("A jelszavak nem egyeznek!");
        } else {
            axios({
                method: "POST",
                url: "http://localhost:8000/auth/register",
                data: {
                    fullname: registerFullname,
                    email: registerEmail,
                    address: registerAddress,
                    password: registerPassword1,
                },
                withCredentials: true, 
            }).then(res => {
                if (res.data === "Successfully Registered!") {
                    alert("Sikeres Regisztráció!");
                    window.location.href = "/";
                } else if (res.data === "User already exists!") {
                    alert("Már létezik ilyen felhasználó!");
                    window.location.href = "/";
                } else {
                    alert("Something happened!");
                }
            })
        }
    };
    return(
            <div className="Registration">
                <div className="tartalom">
                    <div className="cotainer">
                        <div className="row justify-content-center registrationdiv">
                            <div className="col-lg-6">
                                <div className="card regcard">
                                    <div className="card-header text-center regheader"><h4>Regisztráció</h4></div>
                                    <div className="card-body regcard">
                                        <form name="registration-form" id="regForm">
                                            <div className="form-group row">
                                                <label htmlFor="full_name" className="col-md-4 col-form-label text-md-right">Teljes Név</label>
                                                <div className="col-md-6">
                                                    <input type="text" id="full_name" className="form-control" name="fullname" onChange={e => setRegisterFullname(e.target.value)}/>
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label htmlFor="email_address" className="col-md-4 col-form-label text-md-right">E-Mail Cím</label>
                                                <div className="col-md-6">
                                                    <input type="email" id="email_address" className="form-control" name="email" onChange={e => setRegisterEmail(e.target.value)}/>
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label htmlFor="user_address" className="col-md-4 col-form-label text-md-right">Szállítási Cím</label>
                                                <div className="col-md-6">
                                                    <input type="text" id="user_address" className="form-control" name="address" onChange={e => setRegisterAddress(e.target.value)}/>
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Jelszó</label>
                                                <div className="col-md-6">
                                                    <input type="password" id="password" className="form-control" name="password" onChange={e => setRegisterPassword1(e.target.value)}/>
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label htmlFor="password2" className="col-md-4 col-form-label text-md-right">Jelszó Megerősítés</label>
                                                <div className="col-md-6">
                                                    <input type="password" id="password2" className="form-control" name="password2" onChange={e => setRegisterPassword2(e.target.value)}/>
                                                </div>
                                            </div>

                                                <div className="col-md-6 offset-md-4">
                                                    <input type="button" className="btn btn-custom" value="Regisztráció"  onClick={Register}/>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default withRouter(Registration);
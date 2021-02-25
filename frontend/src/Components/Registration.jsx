import React, { useState } from "react";
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
                    //setTimeout(function () {
                    //window.location.href = "/"; //will redirect to your blog page
                    //}, 2000); //will call the function after 2 secs.
                    //window.location.href = "/";
                    //props.history.push('/');
            })
        }
    };
    return(
            <div className="Registration">
                <div class="tartalom">
                    <div class="cotainer">
                        <div class="row justify-content-center registrationdiv">
                            <div class="col-lg-6">
                                <div class="card regcard">
                                    <div class="card-header text-center regheader"><h4>Regisztráció</h4></div>
                                    <div class="card-body regcard">
                                        <form name="registration-form" id="regForm">
                                            <div class="form-group row">
                                                <label for="full_name" class="col-md-4 col-form-label text-md-right">Teljes Név</label>
                                                <div class="col-md-6">
                                                    <input type="text" id="full_name" class="form-control" name="fullname" onChange={e => setRegisterFullname(e.target.value)}/>
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label for="email_address" class="col-md-4 col-form-label text-md-right">E-Mail Cím</label>
                                                <div class="col-md-6">
                                                    <input type="email" id="email_address" class="form-control" name="email" onChange={e => setRegisterEmail(e.target.value)}/>
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label for="user_address" class="col-md-4 col-form-label text-md-right">Szállítási Cím</label>
                                                <div class="col-md-6">
                                                    <input type="text" id="user_address" class="form-control" name="address" onChange={e => setRegisterAddress(e.target.value)}/>
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label for="password" class="col-md-4 col-form-label text-md-right">Jelszó</label>
                                                <div class="col-md-6">
                                                    <input type="password" id="password" class="form-control" name="password" onChange={e => setRegisterPassword1(e.target.value)}/>
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label for="password2" class="col-md-4 col-form-label text-md-right">Jelszó Megerősítés</label>
                                                <div class="col-md-6">
                                                    <input type="password" id="password2" class="form-control" name="password2" onChange={e => setRegisterPassword2(e.target.value)}/>
                                                </div>
                                            </div>

                                                <div class="col-md-6 offset-md-4">
                                                    <input type="button" class="btn btn-custom" value="Regisztráció"  onClick={Register}/>
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
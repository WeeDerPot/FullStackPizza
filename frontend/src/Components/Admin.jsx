import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../Contexts/UserContext';

export default function Admin(props) {
    const userctx = useContext(UserContext);
    const [ data, setData ] = useState([]);
    const [ selectedUser, setSelectedUser ] = useState();

    useEffect(() =>{
        axios.get("http://localhost:8000/auth/getallusers", {
            withCredentials: true,
        }).then(res => {
            setData(res.data.filter((item) => {
                return item.email !== userctx.email
            }))
        })
    }, [userctx]);

    const deleteUser = () => {
        let userid;
        data.forEach((item) => {
            if (item.email === selectedUser) {
                userid = item._id;
            }
        })
        console.log(userid, "User Deleted");

        axios.post("http://localhost:8000/auth/deleteuser", {
            id: userid
        }, {
            withCredentials: true
        });
        window.location.href = "/admin";
    }

    return (
        <div>         
                <div class="tartalom">
                    <div class="cotainer justify-content-center">
                        <h2 class="text-center text-success adminTitle">Admin Page!</h2>
                        <div class="row justify-content-center text-success registrationdiv">
                            <div class="col-lg-6">
                                <select onChange={e => setSelectedUser(e.target.value)} name="deleteuser" class="form-select form-select-sm adminSelect">
                                    <option id="emptySelect">Válaszz felhasználót!</option>
                                    {
                                        data.map((item) => {
                                            return (
                                                <option id={item.email}>{item.email}</option>
                                            )
                                        })
                                    }
                                </select>
                                <input type="button" class="btn btn-custom minilogin" value="Delete User" onClick={deleteUser}/>
                            </div>
                        </div>
                        <div class="row justify-content-center text-success registrationdiv">
                            <div class="col-lg-6">
                                <h4>Következő Admin Funkció...</h4>
                            </div>
                        </div>                          
                    </div>
                </div>
            
        </div>
    )
}

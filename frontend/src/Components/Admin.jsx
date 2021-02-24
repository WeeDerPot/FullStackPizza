import React, { useEffect } from 'react';
import axios from 'axios';

export default function Admin() {
    useEffect(() =>{
        axios.get("http://localhost:8000/auth/getallusers", {
            withCredentials: true,
        }).then(res => {
            console.log(res.data);
        })
    }, [])
    return (
        <div>
            Admin
        </div>
    )
}

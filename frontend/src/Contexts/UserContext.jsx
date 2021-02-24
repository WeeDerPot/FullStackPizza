import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const UserContext = createContext({});

export default function UserContextProvider(props) {
    const [ user, setUser ] = useState();
    useEffect(() => {
        axios.get("http://localhost:8000/auth/user", { withCredentials: true }).then(res => {
            setUser(res.data);
        })
    }, [])
    return (
        <UserContext.Provider value={user}>
            {props.children}
        </UserContext.Provider>
    )
};

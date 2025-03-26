import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/LocalStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const { employee, admin } = getLocalStorage();
        setUserData({ employee, admin });
    })

    return (
        <div>
            <AuthContext.Provider value={"Sanmit"}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider 
import React, { createContext, useContext, useState, useEffect } from 'react';

export const AdminAuthContext = createContext();

export default function AuthProvider2({ children }) {
    const initialAuthAdmin = localStorage.getItem('Admins');
    const [authAdmin, setAuthAdmin] = useState(
        initialAuthAdmin ? JSON.parse(initialAuthAdmin) : undefined
    );

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const adminParam = urlParams.get('admin');
        if (adminParam) {
            const parsedAdmin = JSON.parse(decodeURIComponent(adminParam));
            setAuthAdmin(parsedAdmin);
            localStorage.setItem('Admins', JSON.stringify(parsedAdmin));
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    }, []);

    return (
        <AdminAuthContext.Provider value={[authAdmin, setAuthAdmin]}>
            {children}
        </AdminAuthContext.Provider>
    );
}

export const useadminAuth = () => useContext(AdminAuthContext);

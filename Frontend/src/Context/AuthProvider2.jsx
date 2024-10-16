import React, { createContext, useContext, useState, useEffect } from 'react';

export const AdminAuthContext = createContext();

export default function AuthProvider2({ children }) {
    // Retrieve from localStorage
    const initialAuthAdmin = localStorage.getItem('Admins');

    // Validate the retrieved value
    const [authAdmin, setAuthAdmin] = useState(() => {
        try {
            return initialAuthAdmin ? JSON.parse(initialAuthAdmin) : undefined;
        } catch (error) {
            console.error('Failed to parse Admins from localStorage:', error);
            return undefined;
        }
    });

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const adminParam = urlParams.get('admin');
        if (adminParam) {
            try {
                const parsedAdmin = JSON.parse(decodeURIComponent(adminParam));
                setAuthAdmin(parsedAdmin);
                localStorage.setItem('Admins', JSON.stringify(parsedAdmin));
                window.history.replaceState({}, document.title, window.location.pathname);
            } catch (error) {
                console.error('Failed to parse admin parameter:', error);
            }
        }
    }, []);

    return (
        <AdminAuthContext.Provider value={[authAdmin, setAuthAdmin]}>
            {children}
        </AdminAuthContext.Provider>
    );
}

export const useadminAuth = () => useContext(AdminAuthContext);

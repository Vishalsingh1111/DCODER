import React, { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const initialAuthUser = localStorage.getItem('Users');

    const [authUser, setAuthUser] = useState(() => {
        try {
            return initialAuthUser ? JSON.parse(initialAuthUser) : undefined;
        } catch (error) {
            console.error('Failed to parse Users from localStorage:', error);
            return undefined;
        }
    });

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const userParam = urlParams.get('user');
        if (userParam) {
            try {
                const parsedUser = JSON.parse(decodeURIComponent(userParam));
                setAuthUser(parsedUser);
                localStorage.setItem('Users', JSON.stringify(parsedUser));
                window.history.replaceState({}, document.title, window.location.pathname);
            } catch (error) {
                console.error('Failed to parse user parameter:', error);
            }
        }
    }, []);

    return (
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);

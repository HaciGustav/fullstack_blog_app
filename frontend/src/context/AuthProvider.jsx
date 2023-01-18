import React, { useContext, useEffect, useState } from 'react';
import { createContext } from 'react';
import { getUser, userObserver } from '../helpers/firebase';

const authContext = createContext();

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});
    const [userAvatar, setUserAvatar] = useState('');
    const [user, setUser] = useState([]);

    useEffect(() => {
        userObserver(setCurrentUser, setUser);
    }, []);

    useEffect(() => {
        getUser(currentUser?.email, setUser);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <authContext.Provider
            value={{
                currentUser,
                userAvatar,
                setUserAvatar,
                user,
                setUser,
            }}>
            {children}
        </authContext.Provider>
    );
};

export const useAuthContext = () => {
    return useContext(authContext);
};

export default AuthProvider;

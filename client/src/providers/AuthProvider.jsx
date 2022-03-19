import { createContext, useContext, useState, useEffect } from 'react';
// import { API_URL } from '../config/constants';

const AuthContext = createContext(null);

const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('Must be used in AuthProvider');
    }

    return context;
};

const AuthProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState('');
    const [userInfo, setUserInfo] = useState({});
    const [authLoading, setAuthLoading] = useState(true);
    const [authError, setAuthError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setAccessToken('j03948pfaj;sd');
            setUserInfo({ name: 'bob', id: 1 });
            setAuthLoading(false);
        }, 1500);
        // fetch(`${API_URL}/credentials`)
        //     .then((res) => res.json())
        //     .then((data) => {
        //         const { accessToken, userInfo } = data;
        //         setAccessToken(accessToken);
        //         setUserInfo(userInfo);
        //     })
        //     .catch((err) => {
        //         setAuthError(err);
        //     })
        //     .finally(() => {
        //         setAuthLoading(false);
        //     });
    }, []);

    const value = {
        accessToken,
        userInfo,
        authLoading,
        authError,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export { useAuth, AuthProvider };

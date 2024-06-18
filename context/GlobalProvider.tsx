import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User } from '@/data/user.data';
import { useApi } from '@/hooks/useApi';
import { getProfile } from '@/api/auth.api';

interface GlobalContextType {
    isLoading: boolean;
    setIsLoading: (isLoading: boolean) => void;
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
    user: User | null;
    setUser: (user: User | null) => void;
}

export type Props = {
    children: ReactNode;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const useGlobalContext = (): GlobalContextType => {
    const context = useContext(GlobalContext);
    if (context === undefined) {
        throw new Error('useGlobalContext must be used within a GlobalProvider');
    }
    return context;
};

export const GlobalProvider: React.FC<Props> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const { data: userData, error } = useApi(getProfile);

    useEffect(() => {
        setIsLoading(true);
        if (userData) {
            setIsLoggedIn(true);
            setUser({
                username: userData.userName,
                email: userData.email,
                avatar: 'https://randomuser.me/api/portraits/men/75.jpg'
            });
        } else if (error) {
            setIsLoggedIn(false);
            setUser(null);
        }
        setIsLoading(false);
    }, [userData, error]);

    return (
        <GlobalContext.Provider value={{
            isLoading,
            setIsLoading,
            isLoggedIn,
            setIsLoggedIn,
            user,
            setUser
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

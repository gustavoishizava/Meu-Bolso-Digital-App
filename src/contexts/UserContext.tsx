import React, { createContext, Context, useState } from 'react';

interface UserContextProps {
    isAuthenticate: boolean;
}

const defaultValues: UserContextProps = {
    isAuthenticate: false
};

export const UserContext: Context<UserContextProps> = createContext<UserContextProps>(defaultValues);

export default ({children}: React.ReactNode):JSX.Element => {
    const [userState, setUserState] = useState<UserContextProps>(defaultValues);

    return (
        <UserContext.Provider value={{userState}}>      
            {children}     
        </UserContext.Provider>
    );
} 
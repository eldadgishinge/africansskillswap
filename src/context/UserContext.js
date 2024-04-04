import React from "react";
import { createContext } from "react";
import { useContext, useState } from "react";


// Step 1: Create a context
export const UserContext = createContext();
export const useUserContext = () => {
    return useContext(UserContext);
    }

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const contextValue = { user, setUser };
    return (
        // Step 2: Wrap your component tree with the context provider
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
};

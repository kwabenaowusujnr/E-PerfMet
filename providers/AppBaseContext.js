import { createContext, useContext } from "react";


const AppBaseContext = createContext();

export const AppBaseProvider = ({ children }) => {


    return (
        <AppBaseContext.Provider value={{}}>
            {children}
        </AppBaseContext.Provider>
    )
}


export const useAppBase = () => {
    return useContext(AppBaseProvider);
}
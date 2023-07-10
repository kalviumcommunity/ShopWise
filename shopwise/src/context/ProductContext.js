import { createContext, useContext } from "react";

const AppContext= createContext();

//provider
const AppProvider=({children})=>{
    return <AppContext.Provider value="ruhani">
        {children}
    </AppContext.Provider>
};


const useProductContext = () =>{
    return useContext(AppContext);
}

export {AppProvider,AppContext,useProductContext};
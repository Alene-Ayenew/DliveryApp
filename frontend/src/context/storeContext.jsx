import { useContext } from "react";
export const storeContext=useContext("null");
const storeContextProvider=(props)=>{
    const contextValue={

    }
    return(
        <StoreContext.Provider value={contextValue}>
              {props.children}
        </StoreContext.Provider>
    )
    
}
export default storeContextProvider;

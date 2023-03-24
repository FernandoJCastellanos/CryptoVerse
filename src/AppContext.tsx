// Environment
import React, {createContext, useState, useEffect} from "react";





export const AppContext: any = createContext(null);




const AppContextProvider = (props: any) => {


   // TypeScript     // TypeScript     // TypeScript     // TypeScript



    // Variables      // Variables    // Variables    // Variables    // Variables
 


    // Logic     // Logic     // Logic    // Logic    // Logic

 
    const love = <h1>love</h1>

    const contextValue: any = {love};





    return(
        // You pass down contextValue object that has other functions injected into it
        // You pass it down as a value attribute so you can deconstruct it in other components
        // this is how we package and transfer functions from components
        <AppContext.Provider value ={contextValue} >
        {props.children}
        </AppContext.Provider>
    )
};
export default AppContextProvider
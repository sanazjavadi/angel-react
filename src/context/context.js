import React, {createContext, useState} from 'react';
import {Products} from '../constans/data'

export const AppContext = createContext()



export const ProviderContext = (props)=> {
const [products,setProducts] = useState(Products)
   

    return(

        <AppContext.Provider value={{products}}>
           {props.children}
        </AppContext.Provider>
    )
}

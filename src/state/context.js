import React, { createContext, useContext, useReducer } from 'react';
import { Dreams } from '../constans/data'
import reducer from './reducer'
import axios from 'axios'
// import { instance } from '../service/api'
import {
    FETCH_DREAMS_REQUEST,
    FETCH_DREAMS_REGECTE,
    FETCH_DREAMS_SUCCESS
}
    from '../constans/actionTypes';

const initialState = {
    dreams: Dreams,
    loading: false
}

const AppContext = createContext(initialState)

const ProviderContext = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchDreams = ({ page = 0, size = 9 }) => {
        dispatch({ type: FETCH_DREAMS_REQUEST })
        
        axios.get(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=${size}`).then(res => {
          
            dispatch({ type: FETCH_DREAMS_SUCCESS, dreams: res.data.data })
        }).catch(err => {
            dispatch({ type: FETCH_DREAMS_REGECTE })
            console.log(err || err.response)
        })
    }

    return (

        <AppContext.Provider value={{ dreams: state.dreams, fetchDreams }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, ProviderContext }
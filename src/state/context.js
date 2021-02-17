import React, { createContext, useContext, useReducer } from 'react';
import { Dreams } from '../constans/data'
import reducer from './reducer'
import { instance } from '../service/api'
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

    const fetchDreams = ({fromId = 0, toId = 50}) => {
        dispatch({type: FETCH_DREAMS_REQUEST })
       instance.get(`dreams?from=${fromId}&to=${toId}`).then(res=> {
        dispatch({type:FETCH_DREAMS_SUCCESS, dreams: res.data.dreams})
    }  ).catch(err=> {
        dispatch({type:FETCH_DREAMS_REGECTE})
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
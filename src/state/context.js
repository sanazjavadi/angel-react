import React, { createContext, useContext, useReducer } from 'react';
import reducer from './reducer'
import { instance, USER_TOKEN } from '../service/api'
import { Dreams } from '../constans/data' 
import {
    FETCH_DREAMS_REQUEST,
    FETCH_DREAMS_REGECTE,
    FETCH_DREAMS_SUCCESS,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_REJECT,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_REJECT,
    LOGOUT
}
    from '../constans/actionTypes';

const initialState = {
    dreams: Dreams,
    loading: false,
    user:USER_TOKEN
}

const AppContext = createContext(initialState)

const ProviderContext = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const fetchDreams = () => {
        dispatch({ type: FETCH_DREAMS_REQUEST })

        instance.get(`/v1/dream`).then(res => {

            dispatch({ type: FETCH_DREAMS_SUCCESS, dreams: res.data.data })
            console.log(res.data.data)
        }).catch(err => {
            dispatch({ type: FETCH_DREAMS_REGECTE })
            console.log(err || err.response)
        })
    }

    const signUp = (data) => {
        dispatch({ type: REGISTER_REQUEST })
        instance
            .post('/v1/auth/register', data)
            .then((res) => {
                localStorage.setItem('token', res.data.token.accessToken);
                localStorage.setItem('user', JSON.stringify(res.data.user));
                dispatch({ type: REGISTER_SUCCESS, user: res.data.user });
            })
            .catch(err => {
                console.log(err || err.response)
                dispatch({ type: REGISTER_REJECT, error: err || err.response })
            })
    }
    const logIn = (data) => {
        dispatch({ type: LOGIN_REQUEST })
        instance
            .post('/v1/auth/login', data)
            .then((res) => {
                localStorage.setItem('token', res.data.token.accessToken);
                localStorage.setItem('user', JSON.stringify(res.data.user));
                dispatch({ type: LOGIN_SUCCESS, user: res.data.user });
            })
            .catch(err => {
                console.log(err || err.response)
                dispatch({ type: LOGIN_REJECT, error: err || err.response })
            })
    }
    const logOut = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        dispatch({ type: LOGOUT })
    }
    return (

        <AppContext.Provider value={{ dreams: state.dreams, fetchDreams, signUp, logIn, logOut, user: state.user }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, ProviderContext }
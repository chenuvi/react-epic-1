import React, { useContext, createContext } from 'react'
import AuthStore from './auth'
import UserStore from './user'

const context = createContext({
    AuthStore,
    UserStore
})

window.stores = {
    AuthStore,
    UserStore
};

export const useStores = () => useContext(context)
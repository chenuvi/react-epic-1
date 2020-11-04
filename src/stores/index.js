import React, { useContext, createContext } from 'react'
import { AuthStore } from './auth'
console.log('AuthStore: ', AuthStore);

const context = createContext({
    AuthStore: new AuthStore()
})

export const useStore = () => useContext(context)
import React, { useContext, createContext } from 'react'
import { AuthStore } from './auth'

const context = createContext({
    AuthStore: new AuthStore()
})

export const useStores = () => useContext(context)
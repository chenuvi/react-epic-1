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

console.log('返回总store执行了')

export const useStores = () => useContext(context)
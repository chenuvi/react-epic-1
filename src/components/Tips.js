import React from 'react'
import {observer} from 'mobx-react'
import {useStores} from '../stores'

const Home = observer(({children}) => {
    const {UserStore} = useStores()

    return (
        <>
        {
            UserStore.currentUser ? null :  <h2>{children}</h2>
        }
       </>
    );
})

export default Home;
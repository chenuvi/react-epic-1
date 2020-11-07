import React from 'react'
import {observer} from 'mobx-react'
import {useStores} from '../stores'
import Uploader  from '../components/Uploader'

const Home = observer(() => {
    const {UserStore} = useStores()

    return (
        <>
        {
            UserStore.currentUser ? <h2> hello {UserStore.currentUser.attributes.username}</h2> : <h2> 用户未登陆</h2>
        }
            <Uploader />
        </>
    );
})

export default Home;
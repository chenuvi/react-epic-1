import React from 'react'
import { observer } from 'mobx-react'
import { useStores } from '../stores'
import styled from 'styled-components'

const Div = styled.div`
    font-size:15px;
    font-weight:530;
    background-color:rgb(24,144,255);
    padding: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    border: 1px solid #a6cef3;
    border-radius: 3px;
    color:#fff;
`

const Home = observer(({ children }) => {
    const { UserStore } = useStores()

    return (
        <>
            {
                UserStore.currentUser ? null : <Div>{children}</Div>
            }
        </>
    );
})

export default Home;
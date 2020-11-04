import React from 'react'
import {observer} from 'mobx-react'
import {useStores} from '../stores'
const Component = observer(() => {
    const {AuthStore} = useStores()
    return (
      <>
      <p>Register: {AuthStore.values.username}</p>
      </>
    );
  })
  
  export default Component;
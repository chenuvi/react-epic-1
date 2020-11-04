import React from 'react'
import { observer } from 'mobx-react'
import { useStore } from '../stores'

const Component = observer(() => {
  const { AuthStore } = useStore()
  return (
    <>
      <p>login:{AuthStore.values.username}</p>
    </>
  );
})

export default Component;
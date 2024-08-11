import React from 'react'
import { Firstname } from './A'
import { useContext } from 'react'
const D = (props) => {
    const firstName = useContext(Firstname)
  return (
    <div>
      {firstName}
    </div>
  )
}

export default D

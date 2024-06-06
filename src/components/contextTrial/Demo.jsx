import React, { useContext } from 'react'
import { contextVariable } from '../myContext1/MyContext1'

const Demo = () => {
  let data = useContext(contextVariable)
  console.log(data)
  return (
    <div>Demo</div>
  )
}

export default Demo
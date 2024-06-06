import React from 'react'
import Child from './Child';

const Parent = () => {
  let car = "Fortuner"
  return (
    <div>
      <Child props={car} />
    </div>
  )
}

export default Parent
import React from 'react'

const Child = ({ props = "ferrari" }) => {
  console.log(props)
  return (
    <div>Child</div>
  )
}

export default Child
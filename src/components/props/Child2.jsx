import React from 'react'

const Child2 = (props) => {
  console.log(props.props.props.props.car)
  return (
    <div>Child2</div>
  )
}

export default Child2
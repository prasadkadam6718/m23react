import React from 'react'

const MapEx2Child = (props) => {
  let value = props.props
  console.log(value)
  return (
    <div style={{ width: "225px", height: "300px", background: "gray", margin: "20px" }}>
      <h1>{props.props.login}</h1>
      {/* <img src={props.props.avatar_url} alt="" /> */}
    </div>
  )
}

export default MapEx2Child
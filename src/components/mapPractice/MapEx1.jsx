import React from 'react'

const MapEx1 = () => {
  let arr = [10, 20, 30, 40, 50]
  return (
    <div >
      {
        arr.length > 0 && arr.map((val, i) => {
          console.log(val)
          return (
            <span>{val}</span>
          )
        })
      }
    </div>
  )
}

export default MapEx1
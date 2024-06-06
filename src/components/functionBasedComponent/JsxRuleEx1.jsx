import React, { Fragment } from 'react'

const JsxRuleEx1 = () => {
  let arr = [10, 20, 30, 40, 50]
  return (
    <div>
      {arr.map((val, i) => {
        return (
          <div key={i}>
            <div>{val}</div>
          </div>
        )
      })}
    </div>
  )
}

export default JsxRuleEx1
import React from 'react'
import LeftAside from './LeftAside'
import MiddleBody from './MiddleBody';
import RightArticle from './RightArticle';

const Mainbody = () => {
  return (
    <div style={{ display: "flex", width: "100vw", height: "70vh", border: "1px solid" }}>
      <LeftAside />
      <MiddleBody />
      <RightArticle />
    </div>
  )
}

export default Mainbody
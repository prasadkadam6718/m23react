import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MyContext from './components/myContext/MyContext.jsx'
import MyContext1 from './components/myContext1/MyContext1.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <MyContext>
  <MyContext1>
    <App />
  </MyContext1>
  // </MyContext>
)


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './Context/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <div
        className='dark:bg-slate-900 dark:text-white'>
        {/* [#F3F3F2] */}
        {/* bg-[#FBFBFB] */}
        <App />
      </div>
    </AuthProvider>
  </BrowserRouter>


)

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { BrowserRouter } from 'react-router-dom'
// import AuthProvider from './Context/AuthProvider.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <AuthProvider>
//       <div
//         className='dark:bg-slate-900 dark:text-white'>
//         <App />
//       </div>
//     </AuthProvider>
//   </BrowserRouter>


// )

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './Context/AuthProvider.jsx';
import AuthProvider2 from './Context/AuthProvider2.jsx'; // Import your admin provider

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <AuthProvider2> {/* Wrap with both providers */}
        <div className='dark:bg-slate-900 dark:text-white'>
          <App />
        </div>
      </AuthProvider2>
    </AuthProvider>
  </BrowserRouter>
);

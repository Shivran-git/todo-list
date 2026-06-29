import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {  ToastProvider } from './Context/ToastContext.jsx'
import { VideoProvider } from './Context/VideoContext.jsx'
createRoot(document.getElementById('root')).render(
  <VideoProvider>
    <ToastProvider>
        <App/>
    </ToastProvider>
  </VideoProvider>
   
  
)

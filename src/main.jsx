import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./assets/styles/global.css"
import { BrowserRouter } from 'react-router-dom'
import Header from './layout/Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Header />
        <App/>
    </BrowserRouter>
  </StrictMode>,
)

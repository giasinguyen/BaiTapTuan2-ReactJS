import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app.jsx'
import Bai02 from './components/NguyenTranGiaSi_Bai02.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

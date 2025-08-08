import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Chart from './Chart/Chart.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Chart></Chart>
  </StrictMode>,
)

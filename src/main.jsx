import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {PrimerComponente} from './PrimerComponente'
import './styles.css'
import { ContadorApp } from './ContadorApp'
// Cuando el css es en el body de toda la app es en el main.jsx
// Lo ideal tambien seria que estuviera todos los estilos en una carpeta y ahi seria
// './styles/styles.css

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimerComponente />
    <ContadorApp />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UseLayoutEffectTest from './assets/useLayoutEffect'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseLayoutEffectTest />
  </StrictMode>,
)

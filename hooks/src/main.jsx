import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UseMemoTest from './useMemo';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseMemoTest />
  </StrictMode>,
)

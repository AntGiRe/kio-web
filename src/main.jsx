import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { KioProvider } from './context/KioProvider'
import router from './router'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <KioProvider>
      <RouterProvider router={router} />
    </KioProvider>
  </StrictMode>,
)
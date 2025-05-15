import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Content from '@/components/content-layout/content.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App children={ <Content /> } />
  </StrictMode>,
)

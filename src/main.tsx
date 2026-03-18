import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppRouter } from './routes/AppRouter.tsx'
import { Toaster } from 'react-hot-toast'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { ReactQueryProvider } from './providers/ReactQueryProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster position="top-center" reverseOrder={false} />

    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ReactQueryProvider>
        <AppRouter />
      </ReactQueryProvider>
    </LocalizationProvider>
  </StrictMode>,
)

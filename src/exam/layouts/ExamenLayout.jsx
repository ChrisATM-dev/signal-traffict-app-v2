import { Outlet } from 'react-router-dom'
import { SignalProvider } from '../context/SignalProvider'

// styles
import '../styles/resultados.css'
import '../styles/signalController.css'
export const ExamenLayout = () => {
  return (
    <div className="examen-layout">
      <SignalProvider>
        <Outlet />
      </SignalProvider>
    </div>
  )
}

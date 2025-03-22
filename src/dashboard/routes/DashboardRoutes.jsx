import { Routes, Route, Navigate } from "react-router-dom"
import { Dashboard } from "../pages/Dashboard"
import { NavBar } from "../../ui/components/NavBar"

export const DashboardRoutes = () => {
  return (
    <>
        <NavBar/>
        <Routes>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/" element={<Navigate to="/dashboard"/>}/>
        </Routes>
    </>
  )
}

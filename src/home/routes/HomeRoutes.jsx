import { Routes, Route, Navigate } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { NavBar } from "../../ui/components/NavBar"

export const HomeRoutes = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/home/*" element={<Navigate to="/home"/>}/>
        <Route path="*" element={<Navigate to="/home"/>}/>
    </Routes>
    </>
  )
}

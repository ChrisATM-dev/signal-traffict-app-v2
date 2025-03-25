import { Routes, Route } from "react-router-dom"
import { LoginPage } from "../auth";
import { PrivateRoute } from "./PrivateRoute";
import { HomeRoutes } from "../home/routes/HomeRoutes";
import { PublicRoute } from "./PublicRoute";
import { RegisterPage } from "../auth/pages/RegisterPage";
import { ExamenRoutes } from "../exam/routes/ExamenRoutes";


export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={
          <PublicRoute>
            <LoginPage/>
          </PublicRoute>
        }/>
        <Route path="register" element={
          <PublicRoute>
            <RegisterPage/>
          </PublicRoute>
        }/>

        <Route path="/examen/*" element={
          <PrivateRoute>
            <ExamenRoutes/>
          </PrivateRoute>
        }/>

        <Route path="/*" element={
          <PrivateRoute>
            <HomeRoutes/>
          </PrivateRoute>
        }/>
        </Routes>
    </>
  )
}

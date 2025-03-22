import { Routes, Route } from "react-router-dom"
import { LoginPage } from "../auth";
import { PrivateRoute } from "./PrivateRoute";
import { DashboardRoutes } from "../dashboard/routes/DashboardRoutes";
import { PublicRoute } from "./PublicRoute";
import { RegisterPage } from "../auth/pages/RegisterPage";

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

            <Route path="/*" element={
              <PrivateRoute>
                <DashboardRoutes/>
              </PrivateRoute>
            }/>
        </Routes>
    </>
  )
}

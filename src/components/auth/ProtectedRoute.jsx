import { Navigate, Outlet } from "react-router-dom"
import DashBoardLayout from "../layout/DashBoardLayout"

const ProtectedRoute = ({children}) => {
    const isAuthenticated = true
    const loading = false

    if (loading) {
        return <div>Loading...</div>
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace/>
    }
  return (
    <DashBoardLayout>{children ? children : <Outlet/>}</DashBoardLayout>
  )
}

export default ProtectedRoute
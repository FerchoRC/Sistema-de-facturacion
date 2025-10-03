import { Navigate, Outlet } from "react-router-dom"
import DashBoardLayout from "../layout/DashBoardLayout"
import { useAuth } from "../../context/AuthContext"

const ProtectedRoute = ({children}) => {

  const {isAuthenticated, loading} = useAuth();

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
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = ({children}) => {
    const isAuthenticated = true
    const loading = false
  return (
    <div>ProtectedRoute</div>
  )
}

export default ProtectedRoute
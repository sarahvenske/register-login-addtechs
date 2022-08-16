import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom"
import "./style.css"
import DashboardPage from "../../DashboardPage";

const Dashboard = () => {

    const {user}  = useContext(AuthContext);
    
    return user ? <DashboardPage/> : <Navigate to="/" replace />
}

export default Dashboard;
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom"
import DashboardPage from "../../components/DashboardPage";

const Dashboard = () => {

    const { user, loading }  = useContext(AuthContext);
    
    if(loading)
       return <div>Carregando..</div>
    
     return user ? <DashboardPage/> : <Navigate to="/" replace />
}

export default Dashboard;   
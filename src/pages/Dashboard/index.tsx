import { useContext } from "react"
import { UserContext } from "../../context/UserContext";
import { Navigate } from "react-router-dom"
import DashboardPage from "../../components/DashboardPage";

const Dashboard = () => {

    const { user, loading }  = useContext(UserContext);
    
    if(loading)
       return <div>Carregando..</div>
    
     return user ? <DashboardPage/> : <Navigate to="/" replace />
}

export default Dashboard;   
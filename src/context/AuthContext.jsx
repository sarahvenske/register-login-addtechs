import {createContext, useEffect, useState} from 'react'
import api from '../components/Api';
import { useNavigate } from 'react-router-dom';


export const AuthContext = createContext({});

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        async function validateToken(){
            
            const token = localStorage.getItem("@context-kenziehub:token");

                if(token){
                    try{
                        api.defaults.headers.authorization = `Bearer ${token}`;

                        const { data } = await api.get("/profile");

                        setUser(data);

                    } catch (error){
                        console.error(error);
                    }
                }

                setLoading(false);
            } 
            validateToken();
    }, []);

    const userLogin = async (data) => {

        const response = await api.post("/sessions", data);
        const {user: userResponse, token } = response.data 

        api.defaults.headers.authorization = `Bearer ${token}`;
    
        setUser(userResponse)
        localStorage.setItem("@context-kenziehub:token", token)
        navigate("/dashboard", {replace: true})
    }

    const userLogout = () => {
        setUser(null)
        localStorage.clear()
        navigate("/", {replace: true})
    }

    return(
        <AuthContext.Provider value={{ user, loading, userLogin, userLogout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
import {createContext, useEffect, useState} from 'react'
import api from '../components/Api';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext({});

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        async function loadUser(){
            const token = localStorage.getItem("@context-kenziehub:token");

            if(token){
                try {
                    api.defaults.headers.authorization = `Bearer ${token}`;
    
                    const {data} = await api.get("./profile")
                    console.log(data)
                    setUser(data)

                } catch (error){
                    console.log(error)
                }
            }
        }
        loadUser()

    }, [])

    const userLogin = async (data) => {

        const response = await api.post("/sessions", data);
        const {user: userResponse, token } = response.data 

        api.defaults.headers.authorization = `Bearer ${token}`;
    
        setUser(userResponse)
        localStorage.setItem("@context-kenziehub:token", token)
        navigate("/dashboard", {replace: true})
    }
    
    return(
        <AuthContext.Provider value={{ user, userLogin }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
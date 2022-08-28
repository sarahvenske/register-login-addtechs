import {createContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import api from '../components/Api';


export const UserContext = createContext({});

const UserProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {

        async function autoLogin(){
            const token = localStorage.getItem("@context-kenziehub:token");
                if(token){
                    try{
                        api.defaults.headers.Authorization = `Bearer ${token}`;
                        const { data } = await api.get("/profile");
                        setUser(data);
                    } catch (error){
                        localStorage.clear();
                    }
                }
                setLoading(false);
            } 
            autoLogin();

    }, []);

    const userLogin = (data) => {

        api.post("/sessions", data)
        .then((response) => {
            const {user: userResponse, token } = response.data 
            api.defaults.headers.authorization = `Bearer ${token}`;
            setUser(userResponse)
            localStorage.setItem("@context-kenziehub:token", token)
            navigate("/dashboard", {replace: true})
        }).catch((error) => {
            toast.error("Ops! Algo deu errado")
        })
    }

    const userSignup = (user) => {
      
        api.post("/users", user)
        .then((response) => {
          toast.success("Conta criada com sucesso!")
          navigate("/")
        })
        .catch((error) => {
          toast.error("Ops! Algo deu errado");
        })
      }

    const userLogout = () => {

        setUser(null)
        localStorage.clear()
        navigate("/", {replace: true})
    }
    
    return(
        <UserContext.Provider value={{ user, setUser, loading, userLogin, userSignup, userLogout}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;
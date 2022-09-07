import {createContext, ReactNode, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import api from '../components/Api';

interface IUserProviderProps {
    children: ReactNode;
}

interface IUserContext {
    user: IUser | null;
    setUser: (data: IUser) => void;
    loading: boolean;
    userLogin: (data: IUserLogin) => void;
    userSignup: (user: IUserSignUp) => void; 
    userLogout: any;
}

export interface ITech {
    id: string;
    title: string;
    status: string;
    created_at: Date;
    updated_at: Date;
}

export interface IUser {
    id: string;
    name: string;
    email: string;
    course_module: string;
    bio: string;
    contact: string;
    avatar_url: string;
    created_at: Date;
    updated_at: Date;
    techs: ITech[];
}

interface IResponseSession {
    user: IUser;
    token: string;
}

interface IUserLogin {
    email: string;
    password: string;
}

interface IUserSignUp {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    bio: string;
    contact: string;
    course_module: string;
}

export const UserContext = createContext({} as IUserContext);

const UserProvider = ({children} : IUserProviderProps) => {

    const [user, setUser] = useState< IUser | null >({} as IUser);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {

        async function autoLogin(){
            const token = localStorage.getItem("@context-kenziehub:token");
                if(token){
                    try{
                        api.defaults.headers.common.Authorization = `Bearer ${token}`;
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

    const userLogin = (data: IUserLogin) => {

        api.post<IResponseSession>("/sessions", data)
        .then((response) => {
            const { user: userResponse, token } = response.data
            api.defaults.headers.common.authorization = `Bearer ${token}`;
            setUser(userResponse)
            localStorage.setItem("@context-kenziehub:token", token)
            navigate("/dashboard", {replace: true})
        }).catch((error) => {
            toast.error("Ops! Algo deu errado")
        })
    }

    const userSignup = (user: IUserSignUp) => {
      
        api.post("/users", user)
        console.log(user)
        .then((response : IUserSignUp) => {
          toast.success("Conta criada com sucesso!")
          navigate("/")
          return console.log(response)
        })
        .catch((error : string) => {
          toast.error("Ops! Algo deu errado");
          console.log(error)
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
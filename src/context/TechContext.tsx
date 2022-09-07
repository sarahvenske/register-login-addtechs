import {createContext, ReactNode } from 'react'
import { toast } from 'react-toastify';
import api from '../components/Api';

import { useContext } from "react"
import { UserContext } from './UserContext';
import { ITech } from './UserContext';
import { IUser } from './UserContext'

interface ITechProviderProps {
    children: ReactNode;
}

interface ITechContext {
    saveNewTech: (tech: ITech) => void;
    removeTech: (data: ITech) => void;
}

export interface ISaveNewTech {
    title: string;
    status: string;
}

export const TechContext = createContext({} as ITechContext);

const TechProvider = ({children} : ITechProviderProps ) => {

    const { user, setUser }  = useContext(UserContext);
    
    const saveNewTech = (tech: ITech) => {
        
        api.post("/users/techs", tech)
        .then((response) => {
            toast.success("Tecnologia criada com sucesso!")
            setUser({...user?, techs: [...user?.techs, tech]})
        }).catch((error) => {
            toast.error("Ops! Esta tecnologia já existe. Tente atualizá-la")
        })
    }

    const removeTech = (tech: any) => {

        const filteredTechs = user?.techs.filter((t) => 
            t.id !== tech.id)

        api.delete(`/users/techs/${tech.id}`, tech)
        .then((response) => {
            setUser({...user, techs: filteredTechs})
            toast.success("A tecnologia foi removida!")
        })
    }

    return(
        <TechContext.Provider value={{ saveNewTech, removeTech }}>
            {children}
        </TechContext.Provider>
    )
}

export default TechProvider;



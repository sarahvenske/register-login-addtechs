import {createContext } from 'react'
import { toast } from 'react-toastify';
import api from '../components/Api';

import { useContext } from "react"
import { UserContext } from './UserContext';

export const TechContext = createContext({});

const TechProvider = ({children}) => {

    const { user, setUser }  = useContext(UserContext);
    
    const saveNewTech = (tech) => {
        
        api.post("/users/techs", tech)
        .then((response) => {
            toast.success("Tecnologia criada com sucesso!")
            setUser({...user, techs: [...user.techs, tech]})
        }).catch((error) => {
            toast.error("Ops! Esta tecnologia já existe. Tente atualizá-la")
        })
    }

    const removeTech = (tech) => {

        const filteredTechs = user.techs.filter((t) => 
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



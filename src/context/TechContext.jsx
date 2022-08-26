import {createContext, useEffect, useState} from 'react'
import { toast } from 'react-toastify';
import api from '../components/Api';

import { useContext } from "react"
import { UserContext } from './UserContext';

export const TechContext = createContext({});

const TechProvider = ({children}) => {

    const { user, setUser }  = useContext(UserContext);
    
    const addNewTech = () => {
        console.log("Clique add tech")
        // Função para abrir o modal (pesquisar);
    } 
    
    const saveNewTech = (tech) => {
        
        api.post("/users/techs", tech)
        .then((response) => {
            toast.success("Tecnologia criada com sucesso!")
            setUser({...user, techs: [...user.techs, tech]})

            console.log("response", response)
            console.log("user", user)
        }).catch((error) => {
            toast.error("Ops! Esta tecnologia já existe. Tente atualizá-la")
        })
        console.log("tecnologia salva com sucesso", tech)
        console.log("user", user)
    }
        
    
    const closeModal = () => {
        console.log("fechar modal")
        // Função para fechar o modal (pesquisar);
    }

    const removeTech = (tech) => {

        const filteredTechs = user.techs.filter((t) => 
            t.id !== tech.id)

        api.delete(`/users/techs/${tech.id}`, tech)
        .then((response) => {
            setUser({...user, techs: filteredTechs})
            toast.success("A tecnologia foi removida!")
        })
        console.log("tecnologia removida")
    }

    return(
        <TechContext.Provider value={{ addNewTech, saveNewTech, closeModal, removeTech }}>
            {children}
        </TechContext.Provider>
    )
}

export default TechProvider;



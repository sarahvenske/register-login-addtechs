import { useForm } from "react-hook-form";
import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { TechContext } from "../../context/TechContext";
import Container from "./style";

const TechForm = () => {

    const schema = yup.object({
        
        title: yup.string()
        .required("O campo não pode ser vazio"),

    })

    const { register, handleSubmit, formState:{ errors }} = useForm({
        resolver: yupResolver(schema)
      });

      const { saveNewTech, closeModal } = useContext(TechContext);

    return(
            <Container onSubmit={handleSubmit(saveNewTech)}>
                <div className="titleModalContainer">
                    <div className="modalTitle">
                        <h3>Cadastrar Tecnologia</h3>
                        <button onClick={closeModal}>X</button>
                    </div> 
                </div>
                <div className="inputsModalContainer">
                    <div className="modalInputs">

                        <label htmlFor="title">Nome</label>
                        <input type="text" id="title" placeholder="Digite aqui a tecnologia" {...register("title")} />
                        <p>{errors.title?.message}</p>

                        <label htmlFor="status">Selecionar status</label>
                        <select name="status" id="status" {...register("status")}>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>

                        <button className="saveTechButton">Cadastrar Tecnologia</button>
                    </div>
                </div>
            </Container>
    )
}
export default TechForm;


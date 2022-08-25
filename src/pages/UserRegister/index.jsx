import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Components:
import Form from "../../components/Form";
import RegisterHeader from "../../components/RegisterHeader";
import api from "../../components/Api";

const UserRegister = () => {

  const schema = yup.object({
  
    name: yup.string()
    .required("Campo obrigatório!"),
  
    email: yup.string()
    .email("Deve ser um e-mail")
    .required("Campo obrigatório!"),
    
    password: yup.string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      "Sua senha deve conter pelo menos uma letra maiúscula, um número e um caractere especial!"
    )
    .required("Informe sua senha!"),  
  
    confirmPassword: yup.string()
    .oneOf([yup.ref("password")], "Deve ser igual a senha informada")
    .required("Confirme sua senha"),
  
    bio: yup.string()
    .required("Campo obrigatório!"),
  
    contact: yup.string()
    .required("Campo obrigatório!"),
    
  });
  
  const { register, handleSubmit, formState:{ errors }} = useForm({
    resolver: yupResolver(schema)
  });

  const navigate = useNavigate()

  const registerCreation = (user) => {
      
    api.post("/users", user)
    .then((response) => {
      console.log(response)
      if(response.status === 200){

        toast.success('Conta criada com sucesso!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        navigate("/")
      }
    })
    .catch((error) => {
      console.log(error)
      toast.error('Ops, algo deu errado!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      
    })
  }

  return (
    <div className="boxRegister">
      <ToastContainer />
      <RegisterHeader/>
      <Form onSubmit={handleSubmit(registerCreation)} className="register">
        <div className="formContainer">

          <h3>Crie sua conta</h3>
          <div>Rápido e grátis, vamos nessa</div>

          <label htmlFor="name">Nome</label>
          <input type="text" id="name" placeholder="Digite aqui seu nome"{...register("name")} />
          <p>{errors.name?.message}</p>

          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="Digite aqui seu e-mail" {...register("email")} />
          <p>{errors.email?.message}</p>

          <label htmlFor="password">Senha</label>
          <input type="password" id="password" placeholder="Digite aqui sua senha"{...register("password")} />
          <p>{errors.password?.message}</p>

          <label htmlFor="confirmPassword">Confirmar Senha</label>
          <input type="password" id="confirmPassword" placeholder="Digite novamente sua senha"{...register("confirmPassword")} />
          <p>{errors.confirmPassword?.message}</p>

          <label htmlFor="bio">Bio</label>
          <input type="text" id="bio" placeholder="Fale sobre você" {...register("bio")} />
          <p>{errors.bio?.message}</p>

          <label htmlFor="contact">Contato</label>
          <input type="text" id="contact" placeholder="Opção de contato"{...register("contact")} />
          <p>{errors.contact?.message}</p>

          <label htmlFor="course_module">Selecionar Módulo</label>
          <select name="course_module" id="course_module" {...register("course_module")}>
            <option value="Primeiro Módulo (Introdução ao Frontend)">Primeiro Módulo (Introdução ao Frontend)</option>
            <option value="Segundo Módulo (Frontend Avançado)">Segundo Módulo (Frontend Avançado)</option>
            <option value="Terceiro Módulo (Introdução ao Backend)">Terceiro Módulo (Introdução ao Backend)</option>
            <option value="Quarto Módulo (Backend Avançado)">Quarto Módulo (Backend Avançado)</option>
          </select>
          <p>{errors.course_module?.message}</p>
        
          <button className="login">Cadastrar</button>

        </div>
      </Form>
    </div>
  );
};

export default UserRegister;

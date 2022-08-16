
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Form from "../../components/Form";
import SignupTitle from "../../components/SignupTitle";
// import { useNavigate } from "react-router-dom";


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

const SignUp = () => {
  
  const { register, handleSubmit, formState:{ errors }} = useForm({
    resolver: yupResolver(schema)
  });

function registerUser(data) {
    console.log(data);
;
  }

  function goBack(){
  // UseNavigate aqui para botão cadastrar/voltar
  }

  return (
    <>
      <SignupTitle/>
      <Form onSubmit={handleSubmit(registerUser)}>
        <div className="formContainer">
          <h3>Crie sua conta</h3>
          <div>Rápido e grátis, vamos nessa</div>

          <label htmlFor="name">Nome</label>
          <input type="text" id="name" {...register("name")} />
          <p>{errors.name?.message}</p>

          <label htmlFor="email">Email</label>
          <input type="text" id="email" {...register("email")} />
          <p>{errors.email?.message}</p>

          <label htmlFor="password">Senha</label>
          <input type="password" id="password" {...register("password")} />
          <p>{errors.password?.message}</p>

          <label htmlFor="confirmPassword">Confirmar Senha</label>
          <input type="password" id="confirmPassword" {...register("confirmPassword")} />
          <p>{errors.confirmPassword?.message}</p>

          <label htmlFor="bio">Bio</label>
          <input type="text" id="bio" {...register("bio")} />
          <p>{errors.bio?.message}</p>

          <label htmlFor="contact">Contato</label>
          <input type="text" id="contact" {...register("contact")} />
          <p>{errors.contact?.message}</p>

          <label htmlFor="module">Selecionar Módulo</label>
          <select name="module" id="module" {...register("module")}>
            <option value="module1">Primeiro Módulo</option>
            <option value="module2">Segundo Módulo</option>
            <option value="module3">Terceiro Módulo</option>
            <option value="module4">Quarto Módulo</option>
          </select>
          <p>{errors.module?.message}</p>
        
          <button className="login">Cadastrar</button>
        </div>
      </Form>
    </>
  );
};

export default SignUp;

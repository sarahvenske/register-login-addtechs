import { useContext } from "react"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import Form from "../../components/Form";
import Logo from "../../components/Logo";

const schema = yup.object({
  email: yup.string().email("Deve ser um e-mail").required("Campo obrigatório!"),
  password: yup.string().required("Campo obrigatório!"),
});

const Login = () => {

  const { register, handleSubmit, formState:{ errors }} = useForm({
    resolver: yupResolver(schema)
  });
  
  const navigate = useNavigate();
  
  const { userLogin } = useContext(AuthContext);

  return (
    <>
      <Logo/>
      <Form onSubmit={handleSubmit(userLogin)}>
        <div className="formContainer">
          <h3>Login</h3>

          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="Digite aqui seu e-mail"{...register("email")} />
          <p>{errors.email?.message}</p>

          <label htmlFor="password">Senha</label>
          <input type="password" id="password" placeholder="Digite aqui sua senha"{...register("password")} />
          <p>{errors.password?.message}</p>

          <button className="login">Entrar</button>

          <div>Ainda não possui uma conta?</div>

          <button className="register" onClick={() => navigate("./signup")}>Cadastre-se</button>

        </div>
      </Form>
    </>
  );
};

export default Login;

import { useContext } from "react"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";

import Form from "../../components/Form";
import LogoKenzieHub from "../../components/LogoKenzieHub";
import { AuthContext } from "../../context/AuthContext";

const schema = yup.object({
  email: yup.string().email("Deve ser um e-mail").required("Campo obrigatório!"),
  password: yup.string().required("Campo obrigatório!"),
});

const Login = () => {
  const { register, handleSubmit, formState:{ errors }} = useForm({
    resolver: yupResolver(schema)
  });

  const { userLogin } = useContext(AuthContext);


  return (
    <>
      <LogoKenzieHub/>
      <Form onSubmit={handleSubmit(userLogin)}>
        <div className="formContainer">
          <h3>Login</h3>

          <label htmlFor="email">Email</label>
          <input type="text" id="email" {...register("email")} />
          <p>{errors.email?.message}</p>

          <label htmlFor="password">Senha</label>
          <input type="password" id="password" {...register("password")} />
          <p>{errors.password?.message}</p>

          <button className="login">Entrar</button>

          <div>Ainda não possui uma conta?</div>

          <Link to="/signup" >
            <button className="register">Cadastre-se</button>
          </Link>
        </div>
      </Form>
    </>
  );
};

export default Login;

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Form from "../../components/Form";

const schema = yup.object({
  email: yup.string().required("Nome obrigatório!"),
  password: yup.string().required("Senha obrigatória!"),
});

const Login = () => {
  const { register, handleSubmit, formState:{ errors }} = useForm({
    resolver: yupResolver(schema)
  });

  function loginUser(data) {
    console.log(data);
  }

  return (
    <>
      {<h2 className="kenziehub">Kenzie Hub</h2>}
      <Form onSubmit={handleSubmit(loginUser)}>
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

          <button className="register">Cadastre-se</button>
        </div>
      </Form>
    </>
  );
};

export default Login;

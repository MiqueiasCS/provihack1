import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as qs from "qs";
import { AuthContext } from '../../providers/auth';
import {
  ContainerLogin,
  ContainerTextLogin,
  ContainerFormLogin,
  Form,
  ContainerAccess,
} from "./style";

import Logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";

export const Login = () => {

  const { auth, handleAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email("Email Inválido!").required("Campo Obrigatório!"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 caracteres!")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "A senha deve conter pelo menos uma letra maiúscula, um número e um caractere especial!"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });


    // HEADER
  const CONTENT_TYPE = "application/x-www-form-urlencoded";

  const handleLogin = (infoData) => {
      
    const headers = {
      "Content-Type": CONTENT_TYPE,
        Authorization: "Basic cHJvdmloYWNrOnByb3ZpaGFjaw==",
      };

    const data = qs.stringify({ username:infoData.email, password:infoData.password, grant_type: "password" });

    axios
      .post("https://pcdtech.herokuapp.com/oauth/token", data, { headers })
      .then((response) => {
        localStorage.setItem("@pcdtech:token", JSON.stringify(response.data.access_token))
        handleAuth(response.data.access_token)
      }).catch((e) => console.log(e.response));

    reset();

  };

  if(!!auth){
    navigate("/dashboard")
  }

  return (
    <>
      <div>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <ContainerLogin>
        <ContainerTextLogin>
          <div>
            <h2>Faça o login para ter acesso completo</h2>
            <p>
              Caso ainda não tenha uma conta, crie uma conta e cadastre o seu
              currículo. <strong>Criar conta</strong>
            </p>
          </div>
        </ContainerTextLogin>

        <ContainerFormLogin>
          <div className="title-form">
            <h2>Entrar na minha conta</h2>
            <p>
              Acesse sua conta ou <strong>cadastre-se</strong>
            </p>
          </div>

          <Form onSubmit={handleSubmit(handleLogin)}>
            <div>
              <label>E-mail</label>
              <input
                type="email"
                placeholder="Digite seu Email..."
                {...register("email")}
              />
              <span className="text-error">{errors.email?.message}</span>
            </div>

            <div>
              <label>Senha </label>
              <input
                type="password"
                placeholder="Digite sua Senha..."
                {...register("password")}
              />
              <span className="text-error">{errors.password?.message}</span>
            </div>
            <button type="submit">Entrar</button>
          </Form>

          <div className="text-social-media">
            <p>Ou acesse com as redes sociais</p>
          </div>

          <ContainerAccess>
            <div>
              <img
                alt="facebook_logo"
                src="https://img.icons8.com/fluency/48/000000/facebook-new.png"
              />
              <p>
                Acessar com o <strong>Facebook</strong>
              </p>
            </div>
            <div>
              <img
                alt="google_logo"
                src="https://img.icons8.com/color/48/000000/google-logo.png"
              />
              <p>
                Acessar com o <strong>Google</strong>
              </p>
            </div>
          </ContainerAccess>
        </ContainerFormLogin>
      </ContainerLogin>
    </>
  );
};

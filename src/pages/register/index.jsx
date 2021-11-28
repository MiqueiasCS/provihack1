import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  ContainerForm,
  ContainerText,
  ContainerLabel,
  ContainerFlex,
} from "./style";
import { useContext } from "react";
import { UsersContext } from "../../providers/users";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

export const Register = () => {
  const { createUser } = useContext(UsersContext);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Campo Obrigatório!")
      .matches(
        /^[aA-zZ\s]+$/,
        "Apenas alfabetos são permitidos para este campo!"
      ),
    email: yup.string().email("Email Inválido!").required("Campo Obrigatório!"),
    function: yup.string().required("Campo Obrigatório!"),
    nivel: yup.string().required("Campo Obrigatório!"),
    city: yup.string().required("Campo Obrigatório!"),
    state: yup.string().required("Campo Obrigatório!"),
    url: yup.string().required("Campo Obrigatório!"),
    description: yup.string().required("Campo Obrigatório!"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 caracteres!")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "A senha deve conter pelo menos uma letra maiúscula, um número e um caractere especial!"
      )
      .required("Campo Obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const handleMyForm = (data) => {
    createUser(data, navigate);
    reset();
  };

  return (
    <>
      <div>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <ContainerForm>
        <ContainerText>
          <h2>Cadastro</h2>
          <p>
            Já possui uma conta? <strong>Entrar</strong>
          </p>
        </ContainerText>

        <ContainerText>
          <p>Insira uma foto de perfil</p>
        </ContainerText>

        <form onSubmit={handleSubmit(handleMyForm)}>
          {/* NOME */}

          <ContainerLabel>
            <label>Nome Completo</label>
            <input
              type="text"
              placeholder="Digite o seu nome"
              {...register("name")}
            />
            <span className="text-error">{errors.name?.message}</span>
          </ContainerLabel>

          {/* E-MAIL */}

          <ContainerLabel>
            <label>E-mail</label>
            <input
              type="email"
              placeholder="Digite o seu e-mail"
              {...register("email")}
            />
            <span className="text-error">{errors.email?.message}</span>
          </ContainerLabel>

          {/* CARGO E NIVEL */}

          <ContainerFlex>
            <ContainerLabel>
              <label>Cargo</label>
              <input
                type="text"
                placeholder="Digite o seu cargo"
                {...register("function")}
              />
              <span className="text-error">{errors.function?.message}</span>
            </ContainerLabel>

            <ContainerLabel>
              <label>Nível</label>
              <select name="senioridade" {...register("nivel")}>
                <option value="junior">Junior</option>
                <option value="pleno">Pleno</option>
                <option value="senior">Senior</option>
              </select>
              <span className="text-error">{errors.nivel?.message}</span>
            </ContainerLabel>
          </ContainerFlex>

          {/* CIDADE E ESTADO */}

          <ContainerFlex>
            <ContainerLabel>
              <label>Cidade</label>
              <input
                type="text"
                placeholder="Digite a cidade"
                {...register("city")}
              />
              <span className="text-error">{errors.city?.message}</span>
            </ContainerLabel>

            <ContainerLabel>
              <label>UF</label>
              <select name="estados-brasil" {...register("state")}>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
              </select>
            </ContainerLabel>
          </ContainerFlex>

          <ContainerLabel>
            <label>Link do currículo</label>
            <input
              type="text"
              placeholder="Digite o seu currículo"
              {...register("url")}
            />
            <span className="text-error">{errors.url?.message}</span>
          </ContainerLabel>

          <ContainerLabel>
            <label>Descrição</label>
            <textarea
              placeholder="Digite em poucas palavras uma descrição sobre você"
              rows="4"
              cols="50"
              {...register("description")}
            ></textarea>
            <span className="text-error">{errors.description?.message}</span>
          </ContainerLabel>

          <ContainerLabel>
            <label>Criar senha</label>
            <input
              type="password"
              placeholder="Digite uma senha"
              {...register("password")}
            />
            <span className="text-error">{errors.password?.message}</span>
          </ContainerLabel>

          <button type="submit">Criar Conta</button>
        </form>
      </ContainerForm>
    </>
  );
};

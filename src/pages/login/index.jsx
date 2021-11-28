import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export const Login = () => {
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

  const handleMyForm = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleMyForm)}>
      <div>
        <label>Email: </label>
        <input
          type="email"
          placeholder="Digite seu Email..."
          {...register("email")}
        />
        <span className="text-error">{errors.email?.message}</span>
      </div>

      <div>
        <label>Senha: </label>
        <input
          type="password"
          placeholder="Digite sua Senha..."
          {...register("password")}
        />
        <span className="text-error">{errors.password?.message}</span>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

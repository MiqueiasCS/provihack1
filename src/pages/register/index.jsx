import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export const Register = () => {

    const schema = yup.object().shape({
        email: yup.string().email("Email Inválido!").required("Campo Obrigatório!"),
        password: yup
          .string()
          .min(8, "Mínimo de 8 caracteres!")
          .matches(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
            "A senha deve conter pelo menos uma letra maiúscula, um número e um caractere especial!"
          )
          .required("Campo Obrigatório!"),
        name: yup
          .string()
          .required("Campo Obrigatório!")
          .matches(
            /^[aA-zZ\s]+$/,
            "Apenas alfabetos são permitidos para este campo!"
          ),
        cellPhone: yup
          .string()
          .max(15)
          .matches(
            /[0-9]|[1-9][0-9]|[1-9][0-9][0-9]/,
            "Este campo aceita somente número!"
          )
          .required("Campo Obrigatório!")
          .required("Campo Obrigatório!"),
        streetName: yup.string().required("Campo Obrigatório!"),
        city: yup.string().required("Campo Obrigatório!"),
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


    return(
        <form onSubmit={handleSubmit(handleMyForm)}>
             <h2>Dados Pessoais</h2>

            <div>
                <input
                    type="text"
                    placeholder="Nome"
                    {...register("name")}
                />
                <span className="text-error">{errors.name?.message}</span>
                <span className="text-error">{errors.cpf?.message}</span>
                <span className="text-error">{errors.age?.message}</span>
            </div>

          <h2>Cadastro</h2>
          
            <div>
                <input
                    type="email"
                    placeholder="Email"
                    {...register("email")}
                />
                <span className="text-error">{errors.email?.message}</span>
                <input
                    className="input"
                    type="password"
                    placeholder="Senha"
                    {...register("password")}
                />
                <span className="text-error">{errors.password?.message}</span>
                <input
                    type="text"
                    placeholder="Telefone com o DDD"
                    {...register("cellPhone")}
                />
                <span className="text-error">{errors.cellPhone?.message}</span>
            </div>

          <h2>Endereço</h2>

            <div>
                <div className="container-street">
                    <input
                        className="input input-street"
                        type="text"
                        placeholder="Nome da Rua"
                        {...register("streetName")}
                    />

                    <span className="text-error">{errors.cellPhone?.message}</span>
                    <span className="text-error">{errors.numberHouse?.message}</span>
                
                </div>
                <div className="container-state">

                    <span className="text-error">{errors.cep?.message}</span>

                    <select
                        name="estados-brasil"
                        {...register("state")}
                        >
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
                    <input
                        className="input input-city"
                        type="text"
                        placeholder="Cidade"
                        {...register("city")}
                    />
                </div>
            </div>

          <button type="submit">Enviar</button>
        </form>
    )
}
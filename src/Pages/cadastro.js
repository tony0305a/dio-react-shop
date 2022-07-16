import React, { useState } from "react";
import Footer from "../Components/Footer";
import * as S from "./styled";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useStore from "../Hooks/store-hook";

const Cadastro = () => {
  const { apiUrl } = useStore();
  const [userData, setUserData] = useState({
    name: undefined,
    email: undefined,
    password: undefined,
  });
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data.email);
    const nome = data.nome;
    const email = data.email;
    var senha = data.senha;
    var confirmSenha = data.confirmSenha;
    if (senha === confirmSenha) {
      var check;
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: `{"email":"${email}"}`,
      };

      await fetch(`${apiUrl}/user/check`, options)
        .then((response) => response.json())
        .then((response) => (check = response))
        .catch((err) => console.error(err));
      console.log(check);
      if (check.length === 0) {
        const options = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: `{"name":"${nome}","email":"${email}","password":"${senha}"}`,
        };

        await fetch(`${apiUrl}/user/add`, options).catch((err) =>
          console.error(err)
        );
      } else {
        console.log("email já cadastrado");
      }
    }
  };

  return (
    <S.WrapperLogin>
      <h1>Registro</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("nome")}
          placeholder="Nome"
          name="nome"
          required={true}
        />
        <input
          type="email"
          {...register("email")}
          placeholder="Email"
          name="email"
          required={true}
        />
        <input
          type="password"
          {...register("senha")}
          placeholder="Senha"
          autoComplete={false}
          required={true}
        />
        <input
          type="password"
          {...register("confirmSenha")}
          placeholder="Confirme a senha"
          autoComplete={false}
          required={true}
        />
        <div>
          <button type="submit">Entrar</button>
          <Link to="/registro">
            <button>Cadastro</button>
          </Link>
        </div>
      </form>
      <Footer />
    </S.WrapperLogin>
  );
};
export default Cadastro;

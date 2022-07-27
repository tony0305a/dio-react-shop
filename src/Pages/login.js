import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import * as S from "./styled";
import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import useStore from "../Hooks/store-hook";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { LogIn, session, cleanSession, attCart, loginError, watchCart } = useStore();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    cleanSession();
    LogIn(data);
    attCart();
  };
  useEffect(() => {
    if (session.length !== 0) {
      navigate("/");
      watchCart(session.user[0].id)
    }
    attCart();
  }, [session]);

  return (
    <S.WrapperLogin>
      <h1>Login</h1>
      {loginError ? (
        <>
          {" "}
          <span>Email ou senha incorretos</span>
        </>
      ) : (
        <></>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          {...register("email")}
          placeholder="Email"
          name="email"
          required={true}
        />
        <input type="password" {...register("senha")} placeholder="Senha" />
        <div>
          <button type="submit">Entrar</button>
          <Link to="/registro">
            <button type="submit">Cadastro</button>
          </Link>
        </div>
      </form>
      <Footer />
    </S.WrapperLogin>
  );
};
export default Login;

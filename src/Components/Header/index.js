import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styled";
import { useForm } from "react-hook-form";
import useStore from "../../Hooks/store-hook";
import Cart from "../Cart";

export const Header = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const { imageUrl, logedInState, cleanSession } = useStore();
  const cs = () =>[
    cleanSession()
  ]
  return (
    <S.Wrapper>
      <S.Buttons>
        <Link to="/">
          <button>Inicio</button>
        </Link>

        <Link to="/contato">
          <button>Contato</button>
        </Link>
      </S.Buttons>
      <S.Search>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("item")} placeholder="Pesquisa" />
        </form>
      </S.Search>
      <S.Login>
        {logedInState ? (
          <button>Perfil</button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
        {logedInState ? (
          <button onClick={cs} >Sair</button>
        ) : (
          <Link to="/registro">
            <button>Registre-se</button>
          </Link>
        )}
      </S.Login>
      <S.Cart>
        <Cart />
      </S.Cart>
    </S.Wrapper>
  );
};

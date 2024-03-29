import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styled";
import { useForm } from "react-hook-form";
import useStore from "../../Hooks/store-hook";
import Cart from "../Cart";
import Wishlist from "../Wishlist";

export const Header = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log("data");
  const { imageUrl, logedInState, cleanSession, searchFilter } = useStore();
  const cs = () => [cleanSession()];
  return (
    <S.Wrapper>
      <S.Line style={{ marginTop: "15px" }}>
        <S.Buttons>
          <Link to="/">
            <button>Home</button>
          </Link>
        </S.Buttons>
        <S.Search>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("item")}
              placeholder="Busque aqui o seu produto"
              onChange={(event) => searchFilter(event.target.value)}
            />
            <img src={`${imageUrl}/lupa.png`} width="28" height="28" />
          </form>
        </S.Search>
        <S.Login>
          <img src={`${imageUrl}/user.png`} width="28" height="28" />
          <S.Drop>
          <span>Olá, faça seu login ou cadastre-se</span>
          <div className="dropdown-content">
            <p>Para uma experiência personalizada, acesse sua conta :)</p>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', width:'100%', alignItems:'center'}} >
            <a href="#" className="login" >Entrar</a>
            <a href="#" className="reg" >Cadastre-se</a>
            </div>
          </div>
          </S.Drop>
          {logedInState ? (
            <button>Perfil</button>
          ) : (
            <Link to="/login">
              <button>Login</button>
            </Link>
          )}
          {logedInState ? (
            <button onClick={cs}>Sair</button>
          ) : (
            <Link to="/registro">
              <button>Registre-se</button>
            </Link>
          )}
        </S.Login>
        <S.Cart>
          <Cart />
          <Wishlist />
        </S.Cart>
      </S.Line>
      <S.Line>
        <S.Nav style={{ height: "45px" }}>
          <div id="cep">
            <img src={`${imageUrl}/local.png`} width="32" />
            <span>informe seu cep</span>
          </div>
          <ul>
            <li>
              <a href="#" className="trend">
                trend item
              </a>
            </li>
            <li>
              <a href="#" className="trend">
                trend item
              </a>
            </li>
            <li>
              <a href="#" className="trend">
                trend item
              </a>
            </li>
            <li>
              <a href="#" className="trend">
                trend item
              </a>
            </li>
            <li>
              <a href="#" className="trend">
                trend item
              </a>
            </li>
            <li>
              <a href="#" className="trend">
                trend item
              </a>
            </li>
            <li>
              <a href="#" className="trend">
                trend item
              </a>
            </li>
          </ul>
        </S.Nav>
      </S.Line>
    </S.Wrapper>
  );
};

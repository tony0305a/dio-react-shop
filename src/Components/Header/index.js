import React from "react";
import { Link } from "react-router-dom";
import * as S from './styled'
import {useForm} from 'react-hook-form'



export const Header = () => {
    const {register, handleSubmit} = useForm()
const onSubmit = (data) => console.log(data)
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
            <form  onSubmit={handleSubmit(onSubmit)} >
                <input {...register('item')}  placeholder="Pesquisa" />
            </form>
        </S.Search>
    </S.Wrapper>
  );
};

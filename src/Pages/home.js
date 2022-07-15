import React from "react";
import Products from "../Components/Products";
import Promos from "../Components/Promos";
import * as S from './styled'

const Home = () => {
  return (
    <S.WrapperHome>
    <Promos/>
    <Products/>
    </S.WrapperHome>
  );
};
export default Home;

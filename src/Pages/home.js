import React from "react";
import Footer from "../Components/Footer";
import Products from "../Components/Products";
import Items from "../Components/Products/Items";
import { Item } from "../Components/Products/styled";
import Promos from "../Components/Promos";
import * as S from './styled'

const Home = () => {
  return (
    <S.WrapperHome>
    <Promos/>
    <Products/>
    <Footer/>
    </S.WrapperHome>
  );
};
export default Home;
 
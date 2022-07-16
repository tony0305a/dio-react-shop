import React from "react";
import Footer from "../Components/Footer";
import Products from "../Components/Products";
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
 
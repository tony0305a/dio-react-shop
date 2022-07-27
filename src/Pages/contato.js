
import React from "react";
import Footer from "../Components/Footer";
import useStore from "../Hooks/store-hook";
import * as S from './styled'
import Uploader from "../Components/Uploader";

const Contato = () => {
  const {imageUrl} = useStore()
  return (
    <S.WrapperContato>
      <h1>Contato</h1>
      <Footer/>
    </S.WrapperContato>
  );
};
export default Contato;

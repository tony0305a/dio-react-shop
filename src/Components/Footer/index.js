import React from "react";
import useStore from "../../Hooks/store-hook";
import * as S from './styled'
const Footer = () =>{
    const {imageUrl} = useStore()
    return(
        <S.Wrapper>
            <S.Division>
                <hr/>
            </S.Division>
            <S.Column1>
                 <a href="https://www.linkedin.com/in/luiz-antônio-lisboa-b17286220/"  target="_blank" ><img src={`${imageUrl}/linkedin.png`} width="24" /></a>
                 <a href="https://github.com/tony0305a"  target="_blank" ><img src={`${imageUrl}/github.png`} width="24" /></a>
            </S.Column1>
            <S.Line>
                <span>Projeto desenvolvido para o curso da Digital Innovation One.</span>
            </S.Line>
        </S.Wrapper>
    )
}
export default Footer
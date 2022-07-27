import React, { useEffect, useState } from "react";
import Carousel from "better-react-carousel";
import * as S from "./styled";
import useStore from "../../Hooks/store-hook";

const Promos = () => {
  const [promos, setPromos] = useState([])
  const responsive = [
    { breakPoint: 1280, cardsToShow: 4 }, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
    { breakPoint: 760, cardsToShow: 2 },
  ];
  const {imageUrl, apiUrl} = useStore()
  useEffect(()=>{
    async function get(){
      await fetch(`${apiUrl}/promo`)
      .then((res)=>res.text())
      .then((x)=>setPromos(JSON.parse(x)))
    }
    get()
  },[])


  return (
      <S.Wrapper>
      <Carousel  mobileBreakpoint={100} cols={1} rows={1} loop={true} autoPlay={100} showDots={true} >
        {promos.map((item,index)=>(
                  <Carousel.Item key={index} >
                    <S.SlideItem>
                    <img src={`${imageUrl}/${item.img}`} width="100%" height="100%"/>
                    </S.SlideItem>
                  </Carousel.Item>
        ))}
      </Carousel>
      </S.Wrapper>
  );
};
export default Promos;

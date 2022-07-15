import React, { useEffect, useState } from "react";
import Carousel from "better-react-carousel";
import * as S from "./styled";

const Promos = () => {
  const [promos, setPromos] = useState([])
  const responsive = [
    { breakPoint: 1280, cardsToShow: 4 }, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
    { breakPoint: 760, cardsToShow: 2 },
  ];

  useEffect(()=>{
    async function get(){
      await fetch('http://localhost:1337/promo')
      .then((res)=>res.text())
      .then((x)=>setPromos(JSON.parse(x)))
    }
    get()
  },[])


  return (
      <Carousel  mobileBreakpoint={100} cols={1} rows={1} loop={true} autoPlay={100}>
        {promos.map((item,index)=>(
                  <Carousel.Item key={index} >
                    <S.SlideItem>
                    <img src={`http://localhost:3000/images/${item.img}`} width="100%" height="400" />
                    <button>Acessar</button>
                    </S.SlideItem>
                  </Carousel.Item>
        ))}
      </Carousel>
  );
};
export default Promos;

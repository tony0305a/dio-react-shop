import React, { useEffect, useState } from "react";
import * as S from "./styled";
import useStore from "../../Hooks/store-hook";
import { Link } from "react-router-dom";

const customStyles = {
  content: {
    width: "500px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
  },
};

const Cart = () => {
  const { imageUrl, session, cartState, watchCart } = useStore();
  const [renderCount, setRenderCount] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    if(session.length !== 0){
      watchCart(session.user[0].id)
      setRenderCount(true)
    }
  }, [])

  useEffect(()=>{
    setCartCount(cartState.length)
  })

  return (
    <S.Wrapper>
      <Link to="/carrinho">
        <img src={`${imageUrl}/cart.png`} width="32" />
      </Link>

      {renderCount ? (
        <>
          <Link to="carrinho">
            <span>{cartCount}</span>
          </Link>
        </>
      ) : (
        <><span>0</span></>
      )}
    </S.Wrapper>
  );
};
export default Cart;

import React, { useEffect, useState } from "react";
import * as S from "./styled";
import useStore from "../../Hooks/store-hook";
import Modal from "react-modal";
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
  const { imageUrl, session, apiUrl, attCartn } = useStore();
  const [renderCount, setRenderCount] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (session.length !== 0) {
      fetch(`${apiUrl}/cart/${session[0].id}`)
        .then((response) => response.json())
        .then((response) => setCart(response))
        .catch((err) => console.error(err));
      if (cart.length !== 0) {
        setRenderCount(true);
      }
    }
  }, [attCartn]);

  return (
    <S.Wrapper>
      <Link to="/carrinho">
        <img src={`${imageUrl}/cart.png`} width="32" />
      </Link>

      {renderCount ? (
        <>
          <Link to="carrinho">
            <span>{cart.length}</span>
          </Link>
        </>
      ) : (
        <></>
      )}
    </S.Wrapper>
  );
};
export default Cart;

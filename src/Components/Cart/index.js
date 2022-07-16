import React, { useEffect, useState } from "react";
import * as S from "./styled";
import useStore from "../../Hooks/store-hook";
import Modal from "react-modal";

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
  const [modalIsOpen, setIsOpen] = useState(false);
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
  function openModal(id) {
    console.log(id);
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <S.Wrapper>
      <img src={`${imageUrl}/cart.png`} width="32" onClick={openModal} />
      {renderCount ? (
        <>
          <span onClick={openModal}>{cart.length}</span>
        </>
      ) : (
        <></>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
      >
        {cart.map((item, index) => (
          <div key={index}>
            <span>{item.content.nome}</span>
          </div>
        ))}
      </Modal>
    </S.Wrapper>
  );
};
export default Cart;

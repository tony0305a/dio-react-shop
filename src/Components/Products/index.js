import React, { useEffect, useState } from "react";
import * as S from "./styled";
import Modal from "react-modal";

const customStyles = {
  content: {
    width:"500px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding:"0"
  },
};

export const Products = () => {
  const [produtos, setProdutos] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({
    name: "produto",
    titlecolor:'#000',
    img:'',
    price: 100,
    description: '',
  });

  useEffect(() => {
    async function get() {
      fetch("http://localhost:1337/products")
        .then((res) => res.text())
        .then((x) => setProdutos(JSON.parse(x)));
    }
    get();
  }, []);

  function openModal(id) {
    console.log(id);
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  const call = () => {
    console.log(produtos);
  };
  return (
    <S.Wrapper>
      {produtos.map((item, index) => (
        <S.Item key={index}>
          <S.Title style={{
            backgroundColor:item.titlecolor
          }} >{item.title}</S.Title>
          <S.ItemImage
            src={`http://localhost:3000/images/${item.img}`}
            width="200"
            height="300"
          />
          <S.ItemData>
            <S.ItemName style={{fontColor:"lightgray"}} >{item.name}</S.ItemName>
          <S.Price>R$ {item.price}</S.Price>
          <span>{item.description}</span>
          <button
            onClick={() => {
              openModal();
              setModalData({
                name: item.name,
                titlecolor:item.titlecolor,
                img:item.img,
                price: item.price,
                description: item.description,
              });
            }}
          >
            Comprar
          </button>
          </S.ItemData>
        </S.Item>
      ))}

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel={modalData.name}
        ariaHideApp={false}
      >
        <S.ItemModal>
          <S.Title
          style={{
            backgroundColor:modalData.titlecolor
          }}
          >{modalData.name}</S.Title>
          <S.ItemImage
            src={`http://localhost:3000/images/${modalData.img}`}
            width="200"
            height="300"
          />
          <S.ItemData>
          <S.Price>R$ {modalData.price}</S.Price>
          <span>{modalData.description}</span>
          </S.ItemData>
          <button onClick={closeModal}>x</button>
        </S.ItemModal>
      </Modal>
    </S.Wrapper>
  );
};
export default Products;

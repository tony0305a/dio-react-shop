import React, { useEffect, useState } from "react";
import * as S from "./styled";
import Modal from "react-modal";
import useStore from "../../Hooks/store-hook";

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
  const {imageUrl, apiUrl, session, attCart} = useStore()

  useEffect(() => {
    async function get() {
      fetch(`${apiUrl}/products`)
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
  const addCart = async (userid,nome,img,quantidade,preco) =>{
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: `{"userid":${userid},"content":{"nome":"${nome}","img":"${img}","quantidade":${quantidade},"preco":${preco}}}`
    };
    
    fetch(`${apiUrl}/cart/add`, options)
      .catch(err => console.error(err));
  }

  const call = () => {
    console.log(session[0].id);
  };
  return (
    <S.Wrapper>
      <button onClick={call} >call</button>
      {produtos.map((item, index) => (
        <S.Item key={index}>
          <S.Title style={{
            backgroundColor:item.titlecolor
          }} >{item.title}</S.Title>
          <S.ItemImage
            src={`${imageUrl}/${item.img}`}
          />
          <S.ItemData>
            <S.ItemName style={{fontColor:"lightgray"}} >{item.name}</S.ItemName>
          <S.Price>R$ {item.price}</S.Price>
          <span>{item.description}</span>
          <S.Buttons>
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
          <button
          onClick={()=>{
            addCart(session[0].id,item.name,item.img,5,item.price)
            attCart()

          }}
          >
            + Carrinho
          </button>
          </S.Buttons>
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
            src={`${imageUrl}/${modalData.img}`}
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

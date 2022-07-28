import React, { useEffect, useMemo, useState } from "react";
import * as S from "./styled";
import Modal from "react-modal";
import useStore from "../../Hooks/store-hook";
import Pagination from "./Pagination";
import { Link } from "react-router-dom"
import Stars from "../Rating";
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
export const Products = () => {
  const [produtos, setProdutos] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({
    name: "produto",
    titlecolor: "#000",
    imgs: { img: [] },
    sizes: {},
    price: 100,
    description: "",
  });
  const [modalMainImage,setModalMainImage] = useState()
  const {
    imageUrl,
    session,
    attCart,
    logedInState,
    addCart,
    watchCart,
    productState,
    getProducts,
    searchTermState
  } = useStore();
  const [prodCount, setProdCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);
  const [idUser, setIdUser] = useState(0)

  useEffect(() => {
    getProducts();
    if(session.length !== 0){
      setIdUser(session.user[0].id)
    }
    /*
    async function get() {
      setLoading(true);
      fetch(`${apiUrl}/products`)
        .then((res) => res.text())
        .then((x) => {
          setProdutos(JSON.parse(x));
          setLoading(false);
        });
    }
    get();
    */
  }, []);

  useEffect(() => {
    console.log(productState);
  }, [productState]);
  useEffect(()=>{
    console.log(searchTermState)
  },[searchTermState])

  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
  function closeModal() {
    setIsOpen(false);
  }
  const increaseCount = () => {
    var add = prodCount + 1;
    setProdCount(add);
  };
  const decreaseCount = () => {
    if (prodCount > 0) {
      var remove = prodCount - 1;
      setProdCount(remove);
    }
  };

  // Get current Products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productState.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  //Change page
  const paginate = (pageNumbers) => setCurrentPage(pageNumbers);

  const modalImages = (img) => {
      setModalMainImage(img)
  };

  const call = () => {
    console.log(session[0].id);
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <S.OuterDiv>
      <S.Wrapper>
        {currentProducts.filter((val)=>{
          if(searchTermState == ""){
            return val
          } else if ((val.name).toLowerCase().includes(searchTermState.toLowerCase())){
            return val
          }
        }).map((item, index) => (
          <S.Item key={index}>
            <S.Title
              style={{
                backgroundColor: item.titlecolor,
              }}
            >
              {item.title}
            </S.Title>
            <Link to={`/produtos/${item.id}`}>
            <S.ItemImage src={`${imageUrl}/${item.imgs.img[0]}`} />
            </Link>
            <S.ItemData>
              <S.ItemName>{item.name}</S.ItemName>
              <S.Price>R$ {item.price}</S.Price>
              <S.Desc>{item.description}</S.Desc>
              <Stars  prodId={item.id} userId={idUser} />
              <S.Buttons>
                <button
                  onClick={() => {
                    openModal();
                    setModalData({
                      name: item.name,
                      titlecolor: item.titlecolor,
                      imgs: item.imgs,
                      sizes:item.sizes,
                      price: item.price,
                      description: item.description,
                    });
                    setModalMainImage(item.imgs.img[0])
                  }}
                >
                  Comprar
                </button>
                {logedInState ? (
                  <button
                    onClick={async () => {
                      addCart(
                        session.user[0].id,
                        item.name,
                        item.img,
                        1,
                        item.price
                      );
                      watchCart(session.user[0].id);
                    }}
                  >
                    Carrinho
                  </button>
                ) : (
                  <></>
                )}
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
                backgroundColor: modalData.titlecolor,
              }}
            >
              {modalData.name}
            </S.Title>
            <button onClick={closeModal} id="close">
              x
            </button>
            <S.ItemImageModal
              src={`${imageUrl}/${modalMainImage}`}
              width="200"
              height="300"
            />
            <S.ModalProductImages>
              {modalData.imgs.img.map((item, index)=>(
                <img  key={index} src={`${imageUrl}/${item}`} width="88" height="72"  onClick={()=>modalImages(item)} />
              ))}
              
            </S.ModalProductImages>
            <S.ModalSizes>
              {modalData.sizes.PP?(<button className="btn btn-primary" >PP</button>):(<button className="btn btn-secondary" disabled >PP</button>)}
              {modalData.sizes.P?(<button className="btn btn-primary" >P</button>):(<button className="btn btn-secondary" disabled >P</button>)}
              {modalData.sizes.M?(<button className="btn btn-primary" >M</button>):(<button className="btn btn-secondary" disabled >M</button>)}
              {modalData.sizes.G?(<button className="btn btn-primary" >G</button>):(<button className="btn btn-secondary" disabled >G</button>)}
              {modalData.sizes.GG?(<button className="btn btn-primary" >GG</button>):(<button className="btn btn-secondary" disabled >GG</button>)}
            </S.ModalSizes>
            <S.ItemData>
              <S.Price>R$ {modalData.price}</S.Price>
              <span>{modalData.description}</span>
            </S.ItemData>
            <S.ButtonsModal>
              <button onClick={decreaseCount}>-</button>
              <span>{prodCount}</span>
              <button onClick={increaseCount}>+</button>
            </S.ButtonsModal>
            <span>
              <b>Total:</b>R${" "}
              {(modalData.price * prodCount).toLocaleString("pt-BR")}
            </span>
            <S.ButtonsModal>
              <button>Comprar Agora</button>
              <button
                onClick={() => {
                  addCart(
                    session.user[0].id,
                    modalData.name,
                    modalData.imgs,
                    prodCount,
                    modalData.price
                  );
                  closeModal();
                  setProdCount(0);
                  watchCart(session.user[0].id);
                  attCart();
                }}
              >
              
                + Carrinho
              </button>
            </S.ButtonsModal>
          </S.ItemModal>
        </Modal>
      </S.Wrapper>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={produtos.length}
        paginate={paginate}
      />
    </S.OuterDiv>
  );
};
export default Products;

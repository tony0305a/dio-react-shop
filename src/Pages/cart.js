import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import useStore from "../Hooks/store-hook";
import * as S from "./styled";

const Cart = () => {
  const { imageUrl, session, apiUrl, attCartn, attCart, watchCart } = useStore();
  const [renderCount, setRenderCount] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0)
  const [attState,setAttState] = useState(0)

  useEffect(() => {
    if (session.length !== 0) {
      fetch(`${apiUrl}/cart/${session.user[0].id}`)
        .then((response) => response.json())
        .then((response) => setCart(response))
        .catch((err) => console.error(err));
      if (cart.length !== 0) {
        setRenderCount(true);
      }
    }
    attCart()
  }, []);
  
  useEffect(() => {
    if (session.length !== 0) {
      fetch(`${apiUrl}/cart/${session.user[0].id}`)
        .then((response) => response.json())
        .then((response) => setCart(response))
        .catch((err) => console.error(err));
      if (cart.length !== 0) {
        setRenderCount(true);
      }
    }
    attCart()
  }, [attState]);
  
useEffect(()=>{
    const totalCart = () =>{
        var qntUnit = 0
        var prec = 0
        for(var i  in cart){
        qntUnit += parseFloat(cart[i].content.quantidade *  cart[i].content.preco )
        }
       setCartTotal(qntUnit)
      }
      totalCart()
},[cart])
const removeItem = async (id) =>{
    const options = {method: 'DELETE'};
 await fetch(`${apiUrl}/cart/delete/${id}`, options)
  .catch(err => console.error(err));
  watchCart(session.user[0].id)
  setAttState(Math.random())
}


  return (
    <S.WrapperCart>
        
      <h1>Carrinho</h1>
      <S.CartBody>
      <S.CartItemArea>
      {cart.map((item, index) => (
                <S.CartItem key={index}>
                <button id="close"  onClick={()=>{removeItem(item.id)}} > x</button>
              <span id="title" style={{backgroundColor:item.content.titlecolor}}  >{item.content.nome}</span>
              <img id="image"
                src={`${imageUrl}/${item.content.img}`}
                width="240"
                height="248"
              />
              <span>Preço Unid: R$ {(item.content.preco).toLocaleString('pt-BR',{minimumFractionDigits: 2})}</span>
              <span>Quantidade: {item.content.quantidade}</span>
              <span>Total: {((item.content.preco)*(item.content.quantidade)).toLocaleString('pt-BR')}  </span>
  
            </S.CartItem>
      ))}
                </S.CartItemArea>
                <S.CartPayoutArea>
                    <h1>Total do Carrinho</h1>
                    <span>{cartTotal.toLocaleString('pt-BR')}</span>
                    <button  className="btn btn-primary" >Finalizar</button>
                </S.CartPayoutArea>
              </S.CartBody>
      <Footer />
    </S.WrapperCart>
  );
};
export default Cart;

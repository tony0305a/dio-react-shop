import React, { createContext, useState, useCallback } from "react";
import api from "../Services/store-api";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [useProducts, setUseProducts] = useState([]);
  const imageUrl = "https://dio-react-shop.vercel.app/images";
  const apiUrl = "https://api-dio-shop.herokuapp.com";
  const [session, setSession] = useState([]);
  const [attCartn, setAttCartn] = useState(0);
  const [logedInState, setLogedInState] = useState(false);
  const [loginError, SetLoginErrror] = useState(false);
  const [cartState, setCartState] = useState([]);
  const [productState, setProductState] = useState([])
  const [searchTermState, setSearchTermState] = useState("")



  const getProducts = async () =>{
    const res = await api.get(`/products`)
    setProductState(res.data)

  }

  const searchFilter = (string) =>{
    setSearchTermState(string)
  }

  const addCart = async (userid, nome, img, quantidade, preco) => {
    const res = await api.post(`cart/add`, {
      userid: userid,
      content: {
        nome: nome,
        img: img,
        quantidade: quantidade,
        preco: preco,
      },
    });
  };
  const watchCart = async(userid) =>{
    const res = await api.get(`/cart/${userid}`)
    setCartState(res.data)
  }

  const LogIn = async (data) => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: `{"email":"${data.email}","password":"${data.senha}"}`,
    };

    fetch("https://api-dio-shop.herokuapp.com/user/login", options)
      .then((response) => response.json())
      .then((response) => {
        if (response.length !== 0) {
          setSession(response);
          setLogedInState(true);
        } else {
          SetLoginErrror(true);
        }
      })
      .catch((err) => console.error(err));
  };
  const cleanSession = () => {
    setSession([]);
    setLogedInState(false);
  };
  const attCart = () => {
    var n = Math.random();
    setAttCartn(n);
  };

  const contextValue = {
    useProducts,
    imageUrl,
    apiUrl,
    session,
    attCartn,
    logedInState,
    loginError,
    cartState,
    productState,
    searchTermState,
    LogIn: useCallback((data) => LogIn(data), []),
    searchFilter: useCallback((string) => searchFilter(string), []),
    getProducts: useCallback(() => getProducts(), []),
    watchCart: useCallback((userid) => watchCart(userid), [addCart]),
    addCart: useCallback(
      (userid, nome, img, quantidade, preco) =>
        addCart(userid, nome, img, quantidade, preco),
      []
    ),
    cleanSession: useCallback(() => cleanSession(), []),
    attCart: useCallback(() => attCart(), []),
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};
export default StoreProvider;

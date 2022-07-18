import React, { createContext, useState, useCallback } from "react";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [useProducts, setUseProducts] = useState([]);
  const imageUrl = 'http://localhost:3000/images';
  const apiUrl = 'http://localhost:1337';
  const [session, setSession] = useState([])
  const [attCartn,setAttCartn] = useState(0)
  const [logedInState, setLogedInState] = useState(false)


  const LogIn = async (data) =>{
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: `{"email":"${data.email}","password":"${data.senha}"}`
    };
    
    fetch('http://localhost:1337/user/login', options)
      .then(response => response.json())
      .then(response => {
        if(response.length !== 0){
          setSession(response)
          setLogedInState(true)
        }else{
          setSession('usuário ou senha incorretos')
        }
      })
      .catch(err => console.error(err));
  }
  const cleanSession = () =>{
    setSession([])
    setLogedInState(false)
  }
  const attCart = () =>{
    var n = Math.random()
    setAttCartn(n)
  }

  const contextValue = {
    useProducts,
    imageUrl,
    apiUrl,
    session,
    attCartn,
    logedInState,
    LogIn: useCallback((data) => LogIn(data), []),
    cleanSession:useCallback(()=>cleanSession(),[]),
    attCart:useCallback(()=>attCart(),[])
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};
export default StoreProvider;

import { useContext } from "react";
import { StoreContext } from "../Providers/store-provider";

const useStore = () => {
  const {
    useProducts,
    imageUrl,
    apiUrl,
    session,
    LogIn,
    cleanSession,
    attCartn,
    attCart,
    logedInState,
    loginError,
    addCart,
    cartState,
    watchCart,
    productState,
    getProducts,
  } = useContext(StoreContext);

  return {
    useProducts,
    imageUrl,
    apiUrl,
    session,
    LogIn,
    cleanSession,
    attCartn,
    attCart,
    logedInState,
    loginError,
    addCart,
    cartState,
    watchCart,
    productState,
    getProducts,
  };
};
export default useStore;

import { useContext } from "react";
import { StoreContext } from "../Providers/store-provider";

const useStore = () => {
  const { useProducts, imageUrl, apiUrl, session, LogIn, cleanSession,attCartn, attCart } = useContext(StoreContext);

  return {
    useProducts,
    imageUrl,
    apiUrl,
    session,
    LogIn,
    cleanSession,
    attCartn,
    attCart
  };
};
export default useStore;

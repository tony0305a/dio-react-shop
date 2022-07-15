import { useContext } from "react";
import { StoreContext } from "../Providers/store-provider";

const useStore = () => {
  const { useProducts } = useContext(StoreContext);

  return {
    useProducts,
  };
};
export default useStore;

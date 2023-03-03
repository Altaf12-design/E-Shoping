import { createContext, useEffect, useReducer, useState } from "react";
import { reducer } from "./Reducer";
import Spiner from "./Spiner";

let AppContext = createContext();

let AppProvider = ({ children }) => {
  const [Loading, isLoading] = useState(true);
  let [state, dispatch] = useReducer(reducer, {
    product: [],
    Cart: [],
    filteredDatas: [],
  });
  useEffect(() => {
    fetchApi();
  }, []);
  const fetchApi = async () => {
    try {
      let responce = await fetch("https://api.escuelajs.co/api/v1/products");

      let data = await responce.json();

      dispatch({ type: "Add_Product", payload: data });
      isLoading(false);
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <AppContext.Provider value={{ state, dispatch, Loading }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };

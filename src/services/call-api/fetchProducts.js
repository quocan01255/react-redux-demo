import { fetchRequest, fetchSuccess, fetchFailure } from "./action";

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchRequest());
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchSuccess(data.products));
      })
      .catch((error) => {
        dispatch(fetchFailure(error));
      });
  };
};


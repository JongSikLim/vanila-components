import apiManager from '../utils/apiManager.js';

export const getProductList = async () => {
  const url = `https://cors-anywhere.herokuapp.com/https://uikt6pohhh.execute-api.ap-northeast-2.amazonaws.com/dev/products`;
  return apiManager.get(url);
};

export const getProductDetail = async (productId) => {
  const url = `https://cors-anywhere.herokuapp.com/https://uikt6pohhh.execute-api.ap-northeast-2.amazonaws.com/dev/products/${productId}`;
  return apiManager.get(url);
};

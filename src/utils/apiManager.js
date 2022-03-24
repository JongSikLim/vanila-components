/**
 * 파라미터를 직렬화하는 함수
 * @param params
 * @returns {string}
 */
export const paramSerialize = (params) => {
  const KeyArray = Object.keys(params);

  const reuslt = KeyArray.map((item) => {
    return `${item}=${params[item]}`;
  });

  return reuslt.join('&');
};

const defaultHeaders = {};

const apiManager = {
  get: async (url, params = {}, option = {}) => {
    const paramsLength = Object.keys(params).length;
    const requestURL = paramsLength
      ? `${url}?${paramSerialize(params)}`
      : `${url}`;
    const response = await fetch(requestURL, {
      method: 'GET',
      headers: { ...defaultHeaders, ...option },
    });
    let resultData;

    if (response.status === 200) {
      resultData = await response.json();
      return resultData;
    }
    throw { status: response.status };
  },
  post: async (url, body = {}, option = {}) => {
    const bodyJson = JSON.stringify(body);
    const response = await fetch(url, {
      method: 'POST',
      headers: { ...defaultHeaders, ...option },
      body: bodyJson,
    });
    let resultData;

    if (response.status === 200) {
      resultData = await response.json();
      return resultData;
    }
    throw { status: response.status };
  },
  put: async (url, body = {}, option = {}) => {
    const bodyJson = JSON.stringify(body);
    const response = await fetch(url, {
      method: 'PUT',
      headers: { ...defaultHeaders, ...option },
      body: bodyJson,
    });
    let resultData;

    if (response.status === 200) {
      resultData = await response.json();
      return resultData;
    }
    throw { status: response.status };
  },
  delete: async (url, params = {}, option = {}) => {
    const paramsLength = Object.keys(params).length;
    const requestURL = paramsLength
      ? `${url}?${paramSerialize(params)}`
      : `${url}`;
    const response = await fetch(requestURL, {
      method: 'DELETE',
      headers: { ...defaultHeaders, ...option },
    });
    let resultData;

    if (response.status === 200) {
      resultData = await response.json();
      return resultData;
    }
    throw { status: response.status };
  },
};

export default apiManager;

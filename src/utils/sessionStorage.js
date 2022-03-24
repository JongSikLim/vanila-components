/**
 * 세션스토리지 설정하기
 */
export const setSessionStorage = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

/**
 * 세션스토리지 가져오기
 * @param {*} key
 * @returns
 */
export const getSessionStorage = (key = null) => {
  if (key) {
    const data = JSON.parse(sessionStorage.getItem(key));
    return data;
  } else {
    let dataset = {};

    for (const key in sessionStorage) {
      if (Object.hasOwnProperty.call(sessionStorage, key)) {
        const value = JSON.parse(sessionStorage[key]);

        dataset[key] = value;
      }
    }

    return dataset;
  }
};

/**
 * 세션스토리지 초기화
 */
export const clearSessionStorage = () => {
  sessionStorage.clear();
};

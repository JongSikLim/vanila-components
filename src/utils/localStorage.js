/**
 * 로컬스토리지 설정하기
 * @param {*} key
 * @param {*} value
 */
export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

/**
 * 로컬스토리지 가져오기
 * @param {*} key
 * @returns
 */
export const getLocalStorage = (key = null) => {
  if (key) {
    const data = JSON.parse(localStorage.getItem(key));
    return data;
  } else {
    let dataset = {};

    for (const key in localStorage) {
      if (Object.hasOwnProperty.call(localStorage, key)) {
        const value = JSON.parse(localStorage[key]);

        dataset[key] = value;
      }
    }

    return dataset;
  }
};

/**
 * 로컬스토리지 초기화
 */
export const clearLocalStorage = () => {
  localStorage.clear();
};

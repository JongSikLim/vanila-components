/**
 * 요소 속성 설정하기
 * @param {*} element
 * @param {*} attr
 * @returns
 */
export const setAttributes = (element, attr = {}) => {
  if (element) {
    for (const key in attr) {
      if (Object.hasOwnProperty.call(attr, key)) {
        const value = attr[key];

        element.dataset[key] = JSON.stringify(value);
      }
    }
  } else return false;
};

/**
 * 요소 속성 가져오기
 * @param {*} element
 * @param {*} attr
 * @returns
 */
export const getAttributes = (element, attr = null) => {
  if (element) {
    if (attr) {
      return JSON.parse(element.dataset[attr]);
    } else {
      let dataset = {};
      console.log('element.dataset: ', element.dataset);

      for (const key in element.dataset) {
        if (Object.hasOwnProperty.call(element.dataset, key)) {
          const value = element.dataset[key];
          console.log('value: ', value);

          dataset[key] = JSON.parse(value);
        }
      }

      return dataset;
    }
  } else return false;
};

/**
 * 오름차순
 * @param {*} a
 * @param {*} b
 * @returns
 */
export const asc = (a, b) => {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
};

/**
 * 내림차순
 * @param {*} a
 * @param {*} b
 * @returns
 */
export const desc = (a, b) => {
  if (a.value > b.value) {
    return -1;
  }
  if (a.value < b.value) {
    return 1;
  }

  return 0;
};

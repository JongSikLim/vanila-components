/**
 * 쿠키 가져오기 함수
 */
export const getCookie = (cookieName) => {
  let cookieValue = '';
  if (document.cookie) {
    const array = document.cookie.split(escape(cookieName) + '=');
    if (array.length >= 2) {
      const arraySub = array[1].split(';');
      cookieValue = unescape(arraySub[0]);
    }
  }
  return cookieValue;
};

/**
 * 쿠키 설정함수
 * @param {*} name 쿠키명
 * @param {*} value 쿠키값
 * @param {*} expires 쿠키만료시간
 * @param {*} callback 쿠키설정이후 콜백
 */
export const setCookie = (name, value, expires = 1, callback) => {
  var date = new Date();
  date.setTime(date.getTime() + expires * 1000 * 60 * 60 * 24);
  window.document.cookie = `${name}=${value};expires=${date.toUTCString()}; path=/`;
  if (callback) callback();
};

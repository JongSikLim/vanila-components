/**
 * 만 나이 반환
 *
 * @param {*} birthDay yyyy-mm-dd 형태로 넣을 것
 */
export const getGlobalAge = (birthDay) => {
  const today = new Date();
  const birthDate = new Date(birthDay); // 2000년 8월 10일

  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};

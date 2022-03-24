/**
 * 이벤트 위임 함수
 * @param {*} event 이벤트
 * @param {*} $parent 부모요소
 * @param {*} querySelector 식별하기위한 querySelector
 * @returns
 */
export const delegateEvent = (event, $parent, querySelector) => {
  let $element = event.target.closest(querySelector); // (1)
  if (!$element) return false; // (2)
  if (!$parent.contains($element)) return false; // (3)

  return $element;
};

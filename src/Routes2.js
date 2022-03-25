import { Cart, ProductDetail, ProductList } from './pages/index.js';

const ROUTE_CHANGE_EVENT = 'ROUTE_CHANGE';

/**
 * 라우트가 변화할때마다 실행할 콜백함수
 */
export const init = (routeChangeCallback) => {
  /**
   * 라우팅 변경 처리
   */
  window.addEventListener(ROUTE_CHANGE_EVENT, () => {
    routeChangeCallback();
  });

  /**
   * 뒤로가기처리
   */
  window.addEventListener('popstate', () => {
    routeChangeCallback();
  });

  // 초기 1회 실행
  routeChangeCallback();
};

/**
 * 라우팅 실행함수
 */
export const routeChange = (url, params) => {
  history.pushState(null, null, url);
  window.dispatchEvent(new CustomEvent(ROUTE_CHANGE_EVENT, params));
};

export default function routes({ $target }) {
  const { pathname } = location;
  const [endpoint, route, params] = pathname.split('/');

  /**
   * 라우팅 분기 처리
   */
  if (pathname === '/') {
    new ProductList({ $target });
  } else if (pathname === '/cart') {
    new Cart({ $target });
  } else if (pathname.includes('/products/')) {
    new ProductDetail({
      $target,
      initialState: {
        id: params,
      },
    });
  } else {
    // new NotFound()
  }
}

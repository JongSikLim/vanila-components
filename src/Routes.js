import { Dashboard, Detail } from "./components/index.js";

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
    })

    /**
     * 뒤로가기처리
     */
    window.addEventListener('popstate', () => {
        routeChangeCallback();
    })

    // 초기 1회 실행
    routeChangeCallback();
}

/**
 * 라우팅 실행함수
 */
export const routeChange = (url, params) => {
    history.pushState(null, null, url);
    window.dispatchEvent(new CustomEvent(ROUTE_CHANGE_EVENT, params));
}

export default function routes({ $target }) {
    const { pathname } = location;
    const $page = document.createElement('div');

    $page.className = 'router-container';

    switch (pathname) {
        case '/':
            new Dashboard({ $target: $page });
            break;
        case '/detail':
            new Detail({ $target: $page });
            break;
        default:
            break;
    }

    return $page;
}
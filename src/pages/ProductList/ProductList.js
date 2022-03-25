import { getProductList } from '../../api/api.js';
import { routeChange } from '../../Routes.js';
import { getAttributes } from '../../utils/elementUtils.js';
import { delegateEvent } from '../../utils/eventDelegateUtils.js';
import { setLocalStorage } from '../../utils/localStorage.js';
import ProductItem from './components/ProductItem.js';

export default function ProductList({ $target, initialState }) {
  this.state = {
    items: [],
    ...initialState,
  };
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const $productList = document.createElement('div');
  $productList.className = 'ProductListPage';
  $target.appendChild($productList);

  getProductList().then((res) => {
    setLocalStorage('productList', res);
    this.setState({
      items: res,
    });
  });

  this.render = () => {
    const { items } = this.state;
    const $ul = document.createElement('ul');

    /**
     * li 이벤트위임
     * @param {*} e
     */
    const handleClickItem = (e) => {
      if (delegateEvent(e, $ul, 'li.Product')) {
        const $li = delegateEvent(e, $ul, 'li.Product');
        const id = getAttributes($li, 'id');
        routeChange(`/products/${id}`);
      }
    };

    $ul.onclick = handleClickItem;

    $productList.innerHTML = `
            <h1>상품목록</h1>            
        `;

    $productList.appendChild($ul);

    items &&
      items.forEach((item) => {
        new ProductItem({
          $target: $ul,
          initialState: { item },
        });
      });
  };

  this.render();
}

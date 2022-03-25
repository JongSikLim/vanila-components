import { getProductDetail } from '../../api/api.js';
import { routeChange } from '../../Routes2.js';
import { getAttributes } from '../../utils/elementUtils.js';
import { delegateEvent } from '../../utils/eventDelegateUtils.js';
import {
  clearLocalStorage,
  getLocalStorage,
} from '../../utils/localStorage.js';
import CartItem from './components/CartItem.js';

export default function Cart({ $target, initialState }) {
  this.state = {
    ...initialState,
    items: getLocalStorage('products_cart') || [],
  };
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const $Cart = document.createElement('div');
  $Cart.className = 'CartPage';
  $target.appendChild($Cart);

  const handleClickItem = (id) => {
    console.log('id: ', id);
  };

  const handleClickSubmit = () => {
    alert('주문완료');
    clearLocalStorage();
    routeChange('/');
  };

  const handleClick = (e) => {
    if (delegateEvent(e, $Cart, 'li.Cart__item')) {
      const $li = delegateEvent(e, $Cart, 'li.Cart__item');
      const id = getAttributes($li, 'itemId');

      handleClickItem(id);
    } else if (delegateEvent(e, $Cart, 'button.OrderButton')) {
      handleClickSubmit();
    }
  };

  $Cart.onclick = handleClick;

  this.render = () => {
    const { items } = this.state;
    const $CartItemList = items.map((item) => {
      return new Promise(async (resolve) => {
        const { productId, optionId, quantity } = item;
        const productInfo = await getProductDetail(productId);
        const { productOptions } = productInfo;
        const optionInfo = productOptions.find((opt) => opt.id === optionId);

        const $li = new CartItem({
          initialState: {
            productInfo,
            optionInfo,
            count: quantity,
          },
        });

        resolve($li);
      });
    });

    Promise.all($CartItemList).then((res) => {
      const data = res.map((el) => el.outerHTML).join('');
      console.log('data: ', data);
      $Cart.innerHTML = `
          <h1>장바구니</h1>
          <div class="Cart">
          <ul>
              ${data}
          </ul>
          <div class="Cart__totalPrice">
              총 상품가격 175,000원
          </div>
          <button class="OrderButton">주문하기</button>
          </div>
      `;
    });
  };

  this.render();
}

/**
 * optionId: 3
 * productId: 2
 * quantity: 1
 *
 */

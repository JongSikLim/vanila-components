import { setAttributes } from '../../../utils/elementUtils.js';

export default function CartItem({ $target, initialState }) {
  this.state = {
    productInfo: null,
    optionInfo: null,
    ...initialState,
  };
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const $CartItem = document.createElement('li');
  $CartItem.className = 'Cart__item';

  setAttributes($CartItem, {
    itemId: this.state.productInfo.id,
  });

  this.render = () => {
    const { productInfo, optionInfo, count } = this.state;
    const { imageUrl, name, price } = productInfo;
    const { name: optionName, price: optionPrice } = optionInfo;
    const totalPrice = (price + optionPrice) * count;

    $CartItem.innerHTML = `
          <img src="${imageUrl}">
          <div class="Cart__itemDesription">
              <div>${name} ${optionName} ${price}원 ${count}개</div>
              <div>${totalPrice}원</div>
          </div>
      `;
  };

  this.render();
  return $CartItem;
}

/**
optionId: 2
productId: 1
quantity: 1
 */

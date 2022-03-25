import { formatToMoneryString } from '../../../utils/formatUtils.js';

export default function ProductItem({ $target, initialState }) {
  this.state = {
    ...initialState,
  };
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const $productItem = document.createElement('li');
  $target.appendChild($productItem);

  this.render = () => {
    const { item } = this.state;
    const { id, name, price, imageUrl } = item;
    $productItem.innerHTML = `
          <li class="Product" data-id=${id}>
              <img src="${imageUrl}">
              <div class="Product__info">
                  <div>${name}</div>
                  <div>${formatToMoneryString(price)}원~</div>
              </div>
          </li>
      `;
  };

  this.render();
}

/**
* - id: 상품 id
- name: 상품 이름
- price: 상품 가격
- imageUrl: 상품 이미지 주소
- productsOptions
  - id: 옵션 id
  - name: 옵션 이름
  - price: 옵션 가격
  - stock: 재고
*/

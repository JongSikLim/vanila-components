import { getAttributes } from '../../../utils/elementUtils.js';

export default function SelectedOptions({
  $target,
  initialState,
  handleInputChange,
  handleSubmit,
}) {
  this.state = {
    ...initialState,
  };
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const $SelectedOptions = document.createElement('div');
  $SelectedOptions.className = 'ProductDetail__selectedOptions';

  $SelectedOptions.onchange = (e) => {
    const key = getAttributes(e.target, 'key');
    const value = e.target.value;
    handleInputChange(key, value);
  };

  const $button = document.createElement('button');
  $button.className = 'OrderButton';
  $button.onclick = handleSubmit;
  $button.textContent = '주문하기';

  this.render = () => {
    const { selectedList, basePrice } = this.state;

    const $cartList = selectedList
      .map((menu) => {
        const { id, name, price, stock, count } = menu;

        return `<li>
                ${name} ${price}원 
                <div>
                    <input data-key=${id} type="number" value=${count} max="${stock}">개
                </div>
            </li>`;
      })
      .join('');

    const totalPrice = selectedList.reduce(
      (sum, curr) => sum + (curr.price + basePrice) * curr.count,
      0
    );

    $SelectedOptions.innerHTML = `
            <h3>선택된 상품</h3>
            <ul>${$cartList}</ul>
            <div class="ProductDetail__totalPrice">${totalPrice}원</div>            
        `;

    $SelectedOptions.append($button);
  };

  this.render();

  return $SelectedOptions;
}

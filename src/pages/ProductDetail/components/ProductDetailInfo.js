import Select from './Select.js';
import SelectedOptions from './SelectedOptions.js';
import { setLocalStorage } from '../../../utils/localStorage.js';
import { routeChange } from '../../../Routes.js';

export default function ProductDetailInfo({ $target, initialState }) {
  this.state = {
    ...initialState,
    selectedList: [],
  };
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const $ProductDetailInfo = document.createElement('div');
  $ProductDetailInfo.className = 'ProductDetail';
  $target.appendChild($ProductDetailInfo);

  this.render = () => {
    const { itemInfo, selectedList } = this.state;
    const { name, price, imageUrl, productOptions } = itemInfo;

    /**
     * 메뉴선택처리
     */
    const handleChoiceMenu = (value) => {
      const alreadyAdded = selectedList.some(
        (item) => item.id === parseInt(value)
      );
      if (alreadyAdded) return;

      const newSelectedItem = productOptions.find(
        (product) => product.id === parseInt(value)
      );

      this.setState({
        ...this.state,
        selectedList: [...selectedList, { ...newSelectedItem, count: 1 }],
      });
    };

    /**
     * 수량변경처리
     */
    const handleInputChange = (cartId, value) => {
      this.setState({
        ...this.state,
        selectedList: selectedList.map((item) => {
          if (item.id === cartId) {
            return {
              ...item,
              count: value,
            };
          } else return item;
        }),
      });
    };

    /**
     * 주문하기
     */
    const handleSubmit = () => {
      const data = this.state.selectedList.map((item) => {
        const { id: optionId, count: quantity } = item;
        return {
          productId: itemInfo.id,
          optionId,
          quantity,
        };
      });

      setLocalStorage('products_cart', data);
      routeChange('/cart');
    };

    $ProductDetailInfo.innerHTML = `
            <img src=${imageUrl} alt="${name}">
            <div class="ProductDetail__info">
                <h2>${name}</h2>
                <div class="ProductDetail__price">${price}원~</div>
                <b class="select"></b>    
                <b class="selectedOption"></b>
            </div>
        `;

    const $parent = document.querySelector('.ProductDetail__info');
    const $replaceSelect = $ProductDetailInfo.querySelector('b.select');
    const $Select = new Select({
      $target: $ProductDetailInfo,
      initialState: {
        productOptions,
      },
      handleChange: handleChoiceMenu,
    });

    const $replaceSelectedOptions =
      $ProductDetailInfo.querySelector('b.selectedOption');
    const $SelectedOptions = new SelectedOptions({
      initialState: {
        basePrice: price,
        selectedList,
      },
      handleInputChange,
      handleSubmit,
    });

    $parent.replaceChild($Select, $replaceSelect);
    $parent.replaceChild($SelectedOptions, $replaceSelectedOptions);
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
 *
 */

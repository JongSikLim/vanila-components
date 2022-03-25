import { getProductDetail } from '../../api/api.js';
import ProductDetailInfo from './components/ProductDetailInfo.js';

export default function ProductDetail({ $target, initialState }) {
  this.state = {
    id: null,
    itemInfo: null,
    ...initialState,
  };
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const $Detail = document.createElement('div');
  $Detail.className = 'ProductDetailPage';
  $target.appendChild($Detail);

  getProductDetail(this.state.id).then((res) => {
    this.setState({
      ...this.state,
      itemInfo: res,
    });
  });

  this.render = () => {
    const { itemInfo } = this.state;
    const $loading = document.createElement('span');
    $loading.innerHTML = '로딩중...';

    $Detail.innerHTML = `
            <h1>커피잔 상품 정보</h1>            
        `;

    if (itemInfo) {
      new ProductDetailInfo({
        $target: $Detail,
        initialState: {
          itemInfo,
        },
      });
    } else {
      // 로딩 스테이트 추가
      $Detail.appendChild($loading);
    }
  };

  this.render();
}

import Routes, { init } from './Routes2.js';

export default function App({ $target }) {
  this.render = () => {
    $target.innerHTML = ''; // 초기화

    new Routes({ $target }); // 라우터 실행
  };

  init(this.render);
}

new App({ $target: document.querySelector('.App') });

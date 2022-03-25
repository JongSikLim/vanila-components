import Routes, { init } from './Routes.js';

function App({ $target }) {
  this.render = () => {
    $target.innerHTML = ''; // 초기화

    const $routePage = new Routes($target); // 라우터 실행
    $target.appendChild($routePage);
  };

  init(this.render);
}

new App({ $target: document.querySelector('#App') });

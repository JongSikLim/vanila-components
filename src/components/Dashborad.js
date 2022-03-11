import { routeChange } from "../routes.js";

const handleClickButton = () => {
    routeChange('/detail');
}

export default function Dashborad({ $target }) {
    const $page = document.createElement('div');
    const $button = document.createElement('button');

    $button.innerText = "Link to Detail";
    $button.onclick = handleClickButton;

    $page.className = 'dashboard';
    $page.innerHTML = `<h1>Dashboard Container</h1>`
    $page.appendChild($button);

    this.render = () => {
        $target.appendChild($page);
    }

    this.render();
}
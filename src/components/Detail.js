import DetailItem from "./DetailItem.js";
import SelectBox from "./SelectBox.js";

export default function Detail({ $target }) {
    this.state = {
        selectedOption: null
    }
    this.setState = nextState => {
        this.state = nextState;
        this.render();
    }
    const $page = document.createElement('div');


    $page.className = "detail";
    $target.appendChild($page);

    this.render = () => {
        $page.innerHTML = `<h1>Detail Container</h1>`
        const { selectedOption } = this.state;
        /**
         * 옵션값 변경처리
         */
        const handleChange = (value) => {
            this.setState({
                ...this.state,
                selectedOption: value
            })
        }

        new SelectBox({ $target: $page, initialState: {}, handleChange });
        new DetailItem({ $target: $page, selectedOption });
    }

    this.render();
}

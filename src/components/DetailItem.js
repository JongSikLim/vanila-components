export default function DetailItem({ $target, initialState, selectedOption }) {
    this.state = {
        ...initialState
    }

    this.setState = nextState => {
        this.state = nextState;
        this.render();
    }

    const $detailItem = document.createElement('div');
    $detailItem.className = 'detail-item';
    $target.appendChild($detailItem); // 관계에 대한 정리는 여기서 마침

    this.render = () => {
        const { id, name } = this.state

        $detailItem.innerHTML = `
            <h3>상세</h3>
            <p>${selectedOption}</p>
        `
    }

    this.render();
}


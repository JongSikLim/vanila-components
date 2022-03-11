export default function NotFound({ $target, initialState }) {
    this.state = {
        ...initialState
    }
    this.setState = nextState => {
        this.state = nextState;
        this.render();
    }

    const $NotFound = document.createElement('div');
    $target.appendChild($NotFound);

    this.render = () => {
        const { } = this.state
        $NotFound.innerHTML = `
        <h1>Not Found</h1>`;
    }

    this.render();
}
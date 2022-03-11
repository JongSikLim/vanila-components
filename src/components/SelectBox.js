
export default function SelectBox({ $target, initialState, handleChange }) {
    this.state = {
        options: [
            { label: 1, value: 1 },
            { label: 2, value: 2 },
            { label: 3, value: 3 },
        ],
        ...initialState
    }

    const $select = document.createElement('select');
    $select.onchange = (e) => handleChange(e.target.value);
    $target.appendChild($select);

    this.render = () => {
        const { options } = this.state;
        const $defaultOption = `<option value=null>Choose me..</option>`
        const $options = options.map(opt => {
            const { label, value } = opt;
            return `<option value=${value}>${label}</option>`;
        }).join('');
        $select.innerHTML = `
            ${$defaultOption};
            ${$options}
        `
    }

    this.render();
}
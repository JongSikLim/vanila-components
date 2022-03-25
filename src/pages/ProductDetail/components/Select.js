export default function Select({ $target, initialState, handleChange }) {
  this.state = {
    productOptions: [],
    ...initialState,
  };
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const $Select = document.createElement('select');
  $Select.onchange = (e) => handleChange(e.target.value);
  // $target.appendChild($Select);

  this.render = () => {
    const { productOptions } = this.state;
    const $options = productOptions
      .map((opt) => {
        const { id, name, price, stock } = opt;
        return `<option value=${id} ${stock === 0 ? 'disabled' : ''}>${
          stock === 0 ? '(품절)' : ''
        } ${name}${price > 0 ? `+${price}원` : ''}</option>`;
      })
      .join('');

    $Select.innerHTML = `
      <option>선택하세요...</option>
      ${$options}
      `;
  };

  this.render();

  return $Select;
}

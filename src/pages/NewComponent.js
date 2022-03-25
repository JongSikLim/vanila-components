export default function NewComponent({ $target, initialState }) {
  this.state = {
    ...initialState,
  };
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const $NewComponent = document.createElement('document');
  //$target.appendChild($NewComponent);

  this.render = () => {
    const {} = this.state;
    $NewComponent.innerHTML = ``;
  };

  this.render();

  return $NewComponent;
}

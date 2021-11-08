import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      max: 90,
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      checked: false,
      isSaveButtonDisabled: true,
    };
  }

  isUnchanged = () => {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
    } = this.state;
    const arr = [cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage];
    console.log(arr);
    return arr.includes('');
  }

  isBiggestMax = () => {
    const maxValue = 210;
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const arr = [cardAttr1, cardAttr2, cardAttr3];
    const result = arr.reduce((a, b) => Number(a) + Number(b));
    return (result > maxValue);
  }

  isBiggestNinety = () => {
    const maxValue = 90;
    const minValue = 0;
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const arr = [cardAttr1, cardAttr2, cardAttr3];
    const result = arr.some((a) => Number(a) > maxValue || Number(a) < minValue);
    return (result);
  }

  switchButton = () => {
    const arry = [this.isUnchanged(), this.isBiggestMax(), this.isBiggestNinety()];
    const result = arry.some((each) => each === true);
    this.state.isSaveButtonDisabled = result;
  }

  stater = (param) => {
    const { name, value, checked, type } = param.target;
    const response = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: response,
    });
  }

  // sugestão do ary, pra resolver o delay
  render() {
    this.switchButton();
    return (
      <div>
        <h1>Tryunfo do neithans</h1>
        <Form
          { ...this.state }
          onInputChange={ this.stater }
        />
        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;

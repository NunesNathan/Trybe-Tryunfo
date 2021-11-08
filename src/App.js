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
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      card: [],
    };
  }

  isUnchanged = () => {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
    } = this.state;
    const arr = [cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage];
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
    this.setState({
      isSaveButtonDisabled: result,
    });
  }

  stater = (param) => {
    const { name, value, checked, type } = param.target;
    const response = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: response,
    }, () => this.switchButton());
  }

  hasSomeTrunfo = () => {
    const { card } = this.state;
    return card.some((each) => (each.hasTrunfo === true))
      ? (
        this.setState({
          hasTrunfo: true,
        })
      ) : (
        this.setState({
          hasTrunfo: false,
        })
      );
  }

  saveButtonFunc = (e) => {
    e.preventDefault();
    const { card, cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, checked, cardTrunfo } = this.state;
    const obj = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      checked,
      hasTrunfo: cardTrunfo,
    };
    card.push(obj);

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      isSaveButtonDisabled: true,
    }, () => this.hasSomeTrunfo());
  }

  render() {
    return (
      <div>
        <h1>Tryunfo do neithans</h1>
        <Form
          { ...this.state }
          onInputChange={ this.stater }
          onSaveButtonClick={ this.saveButtonFunc }
        />
        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;

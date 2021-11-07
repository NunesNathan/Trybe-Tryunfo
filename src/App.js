import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.stater = this.stater.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      checked: false,
    };
  }

  stater(param) {
    const { name, value, checked, type } = param;
    const response = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: response,
    });
  }

  render() {
    return (
      <div>
        <h1>Tryunfo do neithans</h1>
        <Form onInputChange={ (e) => this.stater(e.target) } />
        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;

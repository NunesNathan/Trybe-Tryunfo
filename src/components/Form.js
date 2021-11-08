import React from 'react';
import PropType from 'prop-types';
import Button from './Button';
import Input from './Input';
import Attr from './Attr';

class Form extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    const max = 90;
    return (
      <form>
        <Input
          id="name"
          name="cardName"
          label="Nome da Carta"
          type="text"
          test="name"
          value={ cardName }
          onChange={ onInputChange }
        />
        <Input
          id="description"
          name="cardDescription"
          label="Descrição da Carta"
          type="textarea"
          test="description"
          value={ cardDescription }
          onChange={ onInputChange }
        />
        <Attr
          id="attr1"
          name="cardAttr1"
          label="Primeiro Atributo da Carta"
          type="number"
          test="attr1"
          max={ max }
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
        <Attr
          id="attr2"
          name="cardAttr2"
          label="Segundo atributo da carta"
          type="number"
          test="attr2"
          max={ max }
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        <Attr
          id="attr3"
          name="cardAttr3"
          label="Terceiro atributo da carta"
          type="number"
          test="attr3"
          max={ max }
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
        <Input
          id="image"
          name="cardImage"
          label="Imagem da Carta (link)"
          type="text"
          test="image"
          value={ cardImage }
          onChange={ onInputChange }
        />
        <Input
          id="rare"
          name="cardRare"
          label="Raridade da Carta"
          type="select"
          test="rare"
          options={ ['normal', 'raro', 'muito raro'] }
          value={ cardRare }
          onChange={ onInputChange }
        />
        <Input
          id="trunfo"
          name="cardTrunfo"
          label="Carta Super Trunfo?"
          type="checkbox"
          test="trunfo"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
        <Button
          text="Salvar"
          test="save"
          type="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          // onSubmit={ onSaveButtonClick }
        />
      </form>);
  }
}

Form.propTypes = {
  cardName: PropType.string.isRequired,
  cardDescription: PropType.string.isRequired,
  cardAttr1: PropType.string.isRequired,
  cardAttr2: PropType.string.isRequired,
  cardAttr3: PropType.string.isRequired,
  cardImage: PropType.string.isRequired,
  cardRare: PropType.string.isRequired,
  cardTrunfo: PropType.bool.isRequired,
  // hasTrunfo: PropType.bool.isRequired,
  isSaveButtonDisabled: PropType.bool.isRequired,
  onInputChange: PropType.func.isRequired,
  onSaveButtonClick: PropType.func.isRequired,
};

export default Form;

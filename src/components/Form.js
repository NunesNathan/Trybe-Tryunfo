import React from 'react';
import Button from './Button';
import Input from './Input';

class Form extends React.Component {
  render() {
    return (
      <form>
        <Input
          id="name"
          label="Nome da Carta"
          type="text"
          test="name"
        />
        <Input
          id="description"
          label="Descrição da Carta"
          type="textarea"
          test="description"
        />
        <Input
          id="attr1"
          label="Primeiro Atributo da Carta"
          type="number"
          test="attr1"
        />
        <Input
          id="attr2"
          label="Segundo atributo da carta"
          type="number"
          test="attr2"
        />
        <Input
          id="attr3"
          label="Terceiro atributo da carta"
          type="number"
          test="attr3"
        />
        <Input
          id="image"
          label="Imagem da Carta (link)"
          type="text"
          test="image"
        />
        <Input
          id="rare"
          label="Raridade da Carta"
          type="select"
          test="rare"
          options={ ['normal', 'raro', 'muito raro'] }
        />
        <Input
          id="trunfo"
          label="Carta Super Trunfo?"
          type="checkbox"
          test="trunfo"
        />
        <Button
          text="Salvar"
          test="save"
          type="button"
        />
      </form>);
  }
}

export default Form;

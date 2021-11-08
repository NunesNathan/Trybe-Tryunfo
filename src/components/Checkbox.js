import React from 'react';
import PropType from 'prop-types';

class Checkbox extends React.Component {
  render() {
    const { id, name, label, type, test, value, onChange, checked, hasTrunfo,
    } = this.props;
    return hasTrunfo === true ? (
      <p>Você já tem um Super Trunfo em seu baralho</p>
    ) : (
      <label htmlFor={ id }>
        {label}
        :
        <input
          type={ type }
          name={ name }
          id={ id }
          data-testid={ `${test}-input` }
          value={ value }
          checked={ checked }
          onClick={ onChange }
        />
      </label>
    );
  }
}

Checkbox.propTypes = {
  id: PropType.string.isRequired,
  name: PropType.string.isRequired,
  label: PropType.string.isRequired,
  type: PropType.string.isRequired,
  test: PropType.string.isRequired,
  value: PropType.string.isRequired,
  checked: PropType.bool.isRequired,
  hasTrunfo: PropType.bool.isRequired,
  onChange: PropType.func.isRequired,
};

export default Checkbox;

import React from 'react';
import PropType from 'prop-types';

class Input extends React.Component {
  render() {
    const { id, name, label, type, test, options, value, onChange, checked } = this.props;
    return type === 'select' ? (
      <label htmlFor={ id }>
        { label }
        :
        <select
          type={ type }
          name={ name }
          id={ id }
          data-testid={ `${test}-input` }
          value={ value }
          onChange={ onChange }
        >
          {options.map((option) => (
            <option key={ option }>
              { option }
            </option>))}
        </select>
      </label>
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
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  id: PropType.string.isRequired,
  name: PropType.string.isRequired,
  label: PropType.string.isRequired,
  type: PropType.string.isRequired,
  test: PropType.string.isRequired,
  options: PropType.arrayOf(PropType.string).isRequired,
  value: PropType.string.isRequired,
  checked: PropType.bool.isRequired,
  onChange: PropType.func.isRequired,
};

export default Input;

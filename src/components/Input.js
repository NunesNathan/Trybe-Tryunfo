import React from 'react';
import PropType from 'prop-types';

class Input extends React.Component {
  render() {
    const { id, label, type, test, options } = this.props;
    return type === 'select' ? (
      <label htmlFor={ id }>
        { label }
        :
        <select
          type={ type }
          name={ id }
          id={ id }
          data-testid={ `${test}-input` }
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
          name={ id }
          id={ id }
          data-testid={ `${test}-input` }
        />
      </label>
    );
  }
}

Input.propTypes = {
  id: PropType.string.isRequired,
  label: PropType.string.isRequired,
  type: PropType.string.isRequired,
  test: PropType.string.isRequired,
  options: PropType.arrayOf(PropType.string).isRequired,
};

export default Input;

import React from 'react';
import PropType from 'prop-types';

class Attr extends React.Component {
  render() {
    const { id, name, label, type, test, value, onChange, max } = this.props;
    return (
      <label htmlFor={ id }>
        {label}
        :
        <input
          type={ type }
          name={ name }
          id={ id }
          data-testid={ `${test}-input` }
          value={ value > max ? max : value }
          max={ max }
          min={ 0 }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Attr.propTypes = {
  id: PropType.string.isRequired,
  name: PropType.string.isRequired,
  label: PropType.string.isRequired,
  type: PropType.string.isRequired,
  value: PropType.number.isRequired,
  test: PropType.string.isRequired,
  onChange: PropType.func.isRequired,
  max: PropType.number.isRequired,
};

export default Attr;

import React from 'react';
import PropType from 'prop-types';

class Button extends React.Component {
  render() {
    const { text, test, type, onClick, disabled } = this.props;
    return (
      <button
        data-testid={ `${test}-button` }
        type={ type === 'submit' ? 'submit' : 'button' }
        disabled={ disabled }
        onClick={ onClick }
      >
        { text }
      </button>
    );
  }
}

Button.propTypes = {
  text: PropType.string.isRequired,
  test: PropType.string.isRequired,
  type: PropType.string.isRequired,
  disabled: PropType.bool.isRequired,
  onClick: PropType.func.isRequired,
};

export default Button;

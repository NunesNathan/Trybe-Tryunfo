import React from 'react';
import PropType from 'prop-types';

class Button extends React.Component {
  render() {
    const { text, test, type } = this.props;
    return (
      <button
        data-testid={ `${test}-button` }
        type={ type === 'submit' ? 'submit' : 'button' }
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
};

export default Button;

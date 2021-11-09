import React from 'react';
import PropType from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      max } = this.props;
    return (
      <div>
        <span data-testid="name-card">{ cardName }</span>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">{ cardDescription }</p>
        <span data-testid="attr1-card">{ cardAttr1 > max ? max : cardAttr1 }</span>
        <span data-testid="attr2-card">{ cardAttr2 > max ? max : cardAttr2 }</span>
        <span data-testid="attr3-card">{ cardAttr3 > max ? max : cardAttr3 }</span>
        <span data-testid="rare-card">{ cardRare }</span>
        {
          cardTrunfo
          && <span data-testid="trunfo-card"> Super Trunfo! </span>
        }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropType.string.isRequired,
  cardDescription: PropType.string.isRequired,
  cardAttr1: PropType.string.isRequired,
  cardAttr2: PropType.string.isRequired,
  cardAttr3: PropType.string.isRequired,
  cardImage: PropType.string.isRequired,
  cardRare: PropType.string.isRequired,
  cardTrunfo: PropType.bool.isRequired,
  max: PropType.number.isRequired,
};

export default Card;

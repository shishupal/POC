//import {Carousel} from 'react-bootstrap';
import React from 'react'
import '../styles/cardContainer.css';
import CardList from './cardDetails';
let eliteCardImage = require('../images/sbi-card-elite.png');
class CardContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state={
      'cardList': [{
      'cardDetails':[{
        'id"': 1,
        'cardHeader': 'My Card Unlimited',
        'cardRating': 4,
        'cardmemberView': 100000,
        "cashack": 250,
        "detailsTranstaction": "Earn 5% cash back on up to $1,500 in combined purchases in bonus categories each quarter you activate and unlimited 1% cash back on all other purchases."
      }]
    }]}
  }

  handleSelect(selectedIndex) {
    this.setState({
      index: selectedIndex,
      direction: 'next'
    });

  }

  render() {
    return (
      <div className="cardContainer container">
        <CardList List={this.state.cardList[0].cardDetails} eliteCardImage={eliteCardImage} />
        <CardList List={this.state.cardList[0].cardDetails} eliteCardImage={eliteCardImage} />
        <CardList List={this.state.cardList[0].cardDetails} eliteCardImage={eliteCardImage} />
      </div>
    );
  }
}

export default CardContainer;

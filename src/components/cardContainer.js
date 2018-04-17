//import {Carousel} from 'react-bootstrap';
import React from 'react'
import '../styles/cardContainer.css';
import CardList from './cardDetails';
let black = require('../images/black.png');
let blue = require('../images/blue.png');
let gold = require('../images/gold.png');
let grey = require('../images/grey.png');
let patinum = require('../images/platinum.png');
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
        <div className="row">
            <CardList List={this.state.cardList[0].cardDetails} eliteCardImage={patinum} />
        </div>
        <div className="row">
            <CardList List={this.state.cardList[0].cardDetails} eliteCardImage={black} />
        </div>

        <div className="row">
            <CardList List={this.state.cardList[0].cardDetails} eliteCardImage={blue} />
        </div>
        <div className="row">
            <CardList List={this.state.cardList[0].cardDetails} eliteCardImage={grey} />
        </div>
        <div className="row">
            <CardList List={this.state.cardList[0].cardDetails} eliteCardImage={gold} />
        </div>

      </div>
    );
  }
}

export default CardContainer;

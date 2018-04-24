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
      'cardDetails':[]
      }]}
  }

  handleSelect(selectedIndex) {
    this.setState({
      index: selectedIndex,
      direction: 'next'
    });
  }

  componentDidMount() {
    fetch('http://localhost:3000/db')
      .then(response => response.json())
      .then(json => {
        this.setState(json);
      });
  }

  render() {
    {
      if (this.state.cardList[0].cardDetails.length ==0) {
          return <div>Loading...</div>;
      }
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
}

export default CardContainer;

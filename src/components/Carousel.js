import {Carousel} from 'react-bootstrap';
import React from 'react'
let yeomanImage = require('../images/home.jpg');
class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = { index: 0, direction: null };
  }


  handleSelect(selectedIndex) {
    this.setState({
      index: selectedIndex,
      direction: 'next'
    });

  }

  render() {
    return (
      <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect.bind(this)}>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={yeomanImage}/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={yeomanImage}/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={yeomanImage}/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default ControlledCarousel;

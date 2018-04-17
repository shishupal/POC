/**
 * Created by Shishupal on 7/16/2016.
 */
import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const CardListItem = ({card, img}) => {
  return (
    <div className="row">
      <h2 className="h2">{card.cardHeader}</h2>
      <div className="row">
        <div className="col-md-3">
          <div className="col-12">
            <img src={img} alt="eliteCardImage" width={250} height={150}/>
          </div>
          <h4 className="col-12">
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={5}
              starColor={'#ffb400'} /* color of selected icons, default `#ffb400` */
              emptyStarColor={'#333'} /* color of non-selected icons, default `#333` */
              editing={false}/>
          </h4>
          <h3  className="col-12">cardmember reviews: {card.cardmemberView}</h3>
        </div>
        <div className="col-md-3">{card.cardmemberView}</div>
        <div className="col-md-3">{card.cashack}</div>
        <div className="col-md-3">{card.detailsTranstaction}</div>
      </div>
    </div>
  );
}
export default CardListItem;

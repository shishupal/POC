/**
 * Created by Shishupal on 7/16/2016.
 */
import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
const CardListItem = ({card, img}) => {
  return (
    <div className="row cardlist">
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
          <h6  className="col-12"><span className='bold'>cardmember reviews:</span> {card.cardmemberView}</h6>
        </div>
        <div className="col-md-3">
        <h4  className='col-md-12 header'>{card.offer[0]} </h4>
        <div className='col-md-12'>
        <div  className='col-md-12'>
        <span  className='bold'>{card.offer[1]}</span>
        {card.offer[2]} </div>
        </div>
        </div>
        <div className="col-md-3">
          <h4  className='col-md-12 header'>{card.glance[0]} </h4>
          <div  className='col-md-12'>
          <span  className='bold'>{card.glance[1]}</span>
          {card.glance[2]}
          </div>
        </div>
        <div className="col-md-3">
        <h4  className='col-md-12 header'>{card.apr[0]} </h4>
        <div  className='col-md-12'>
        <span  className='bold'>{card.apr[1]}</span>
        </div>
        </div>
      </div>
    </div>
  );
}
export default CardListItem;

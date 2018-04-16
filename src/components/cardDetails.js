/**
 * Created by Shishupal on 7/16/2016.
 */
import React from 'react';
import CardListItem from './cardDetailsList';

const CardList = (props) =>{
  let count=0;
  const cardListItem = props.List.map((list)=>{
    return(
      <CardListItem
        card={list}
        key={count}
      />);
  });
  return(
    <ul className="col-md-4 list-group">
      {cardListItem}
      <li ><img src={props.eliteCardImage} alt="eliteCardImage"/></li>

    </ul>
  );
} ;

export default CardList;

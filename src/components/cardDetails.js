/**
 * Created by Shishupal on 7/16/2016.
 */
import React from 'react';
import CardListItem from './cardDetailsList';

const CardList = (props) =>{
  let count=0;
  let image=props.eliteCardImage;
  const cardListItem = props.List.map((list)=>{
    return(
      <CardListItem
        card={list}
        key={count}
        img={image}
      />);
  });
  return(
    <ul className="row list-group">
      {cardListItem}
    </ul>
  );
} ;

export default CardList;

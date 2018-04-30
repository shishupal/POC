/**
 * Created by Shishupal on 7/16/2016.
 */
import React from 'react';
import CardListItem from './cardDetailsList';

const CardList = (props) =>{
  let image=props.eliteCardImage;
  const cardListItem = props.List.map((list,i)=>{
    return(
      <CardListItem
        card={list}
        key={i}
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

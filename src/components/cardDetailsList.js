/**
 * Created by Shishupal on 7/16/2016.
 */
import React from 'react';

const CardListItem = ({card}) => {
  return (
    <li >
      <div>{card.cardHeader}</div>
      <div>{card.cardmemberView}</div>
      <div>{card.cashack}</div>
      <div>{card.detailsTranstaction}</div>
    </li>
  );
}
export default CardListItem;

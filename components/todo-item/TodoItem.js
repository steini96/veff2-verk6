import React, { useState } from 'react';

import css from './todoItem.css';

// Verkefni í lista á forsíðu
export default function todoItem(props) {

const { todo } = props;

  return (
    <React.Fragment>
      <div className={css.item}>
      <input type="checkbox" className={css.item__input}/>
      <p className = {css.item__link}>{todo.title}</p>
      <p className = {css.item__due}>{todo.due}</p>
      </div>
    </React.Fragment>
  );
}

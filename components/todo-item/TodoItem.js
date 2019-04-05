import React, { useState } from 'react';
import Link from 'next/link';
import css from './todoItem.css';

// Verkefni í lista á forsíðu
export default function todoItem(props) {

const { todo } = props;

  return (
    <React.Fragment>
      <div className={"css.item"}>
        <input type="checkbox" className={css.item__input}/>
        <p><Link as={"/todo/"+todo.id} href="/todo/?id=2"><p>{todo.title}</p></Link></p>
        <p className = {css.item__due}>{todo.due}</p>
      </div>
    </React.Fragment>

  );
}

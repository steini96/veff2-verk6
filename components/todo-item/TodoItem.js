import React, { useState } from 'react';
import Link from 'next/link';
import './TodoItem.css';
import { updateTodo } from '../../api';
// Verkefni í lista á forsíðu
export default function todoItem(props) {

const { todo } = props;

function onClick() {
  console.log("completed: ",todo.completed,todo);

  const todoDelete = updateTodo(todo.id,todo);
}
  return (
    <React.Fragment>
      <div className="item">
        <input type="checkbox" className="item__input" checked={todo.completed} onClick={onClick} onChange=""/>
        <p><Link as={"/todo/"+todo.id} href="/todo/?id=2"><p>{todo.title}</p></Link></p>
        <p className = "css.item__due">{todo.due}</p>
      </div>
    </React.Fragment>

  );
}

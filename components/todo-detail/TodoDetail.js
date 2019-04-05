import React, { useState } from 'react';

import Link from 'next/link';
import css from './TodoDetail.css'
import Errors from '../errors/Errors';

import Button from '../button/Button';
import { deleteTodo } from '../../api';
export default function todoDetail(props) {

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const { todo } = props;

  function onDelete(e) {
    e.preventDefault();
    setLoading(true);
    setErrors([]);
    const todoDelete = deleteTodo(todo.id);

    if(!toDelete) {
      setErrors(toDelete.response);
    }

    setLoading(false);
  }

  function showTodo() {
  if(!toDelete) {
    console.log("Ekki eyða")
  } else {
    console.log("Eyða")
  }
}

  return (

    <React.Fragment>
      <div className={css.todoDetail__list}>

        <p className={css.todoDetail__term}>Titill:</p>
        <input className={css.todoDetail__input} value={todo.title} type="testarea" />

        <p className={css.todoDetail__term}>Lokið:</p>
        {todo.completed ? <input className={css.todoDetail__checkbox} type="checkbox" checked /> :
        <input className={css.todoDetail__checkbox} type="checkbox" />}


        <p className={css.todoDetail__term}>Klárast fyrir:</p>
        <input className={css.todoDetail__input} type="datetime-local" />

        <p className={css.todoDetail__term}>Uppfært:</p>
        <p className={css.todoDetail__definition}>{todo.updated}</p>

        <div className={css.todoDetail__term}>Búið til:</div>
        <div className={css.todoDetail__definition}>{todo.created}</div>
      </div>

      <div className={css.todoDetail__buttons}>
        <Button children="Uppfærð" />
        <Button children="Eyða" onClick={onDelete} />
        {showTodo}
      </div>
        <Link as="/" href="/index">
        <a className={css.todoDetail__back}>Til baka</a>
      </Link>
    </React.Fragment>

  );
}

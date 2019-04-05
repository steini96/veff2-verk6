import React, { useState } from 'react';

import { addTodo } from '../../api';

import Button from '../button/Button';
import Field from '../field/Field';
import Errors from '../errors/Errors';

import css from './Form.css';

// Form á forsíðu
export default function Form(props) {
  const { onCreated } = props;

  const [data, setData] = useState({ title: '', date: undefined });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  async function onSubmit(e) {

  }

  function onChange(e) {

  }

  return (
    <form className={css.form} onSubmit={onSubmit}>
      <h2 className={css.form__header}>Nýtt verkefni</h2>
      <Field title="Titill:"/>
      <Field title= "Klárast fyrir:" type="datetime-local"/>
      <Button children ="Búa til"/>
    </form>
  )
}

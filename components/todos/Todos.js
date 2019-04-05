import React, { useState } from 'react';
//import './Todos.css';
import TodoItem from '../todo-item/TodoItem';
import Form from '../form/Form';
import Button from '../button/Button';
// Listi af verkefnum á forsíðu
export default function Todos(props) {
   const [showNew, setShowNew] = useState(true);
  const { data, loading, onFetchNewData } = props;
  function onClick() {
    console.log("fokkit");
    setShowNew(false);
    onFetchNewData(true);
  }
  return (

    <React.Fragment>
    {!loading && (
      <Button onClick={onClick} children ="Fela búið"/>
    )}
      <div className="todos">
      {data.map((item, i) => (
        <TodoItem key={i} todo={item}>
        </TodoItem>
      ))}
      </div>
      <Form />
    </React.Fragment>

  );
}

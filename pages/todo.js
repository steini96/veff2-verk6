import React, { useState, useEffect } from 'react';
import Error from 'next/error';

import Layout from '../components/layout/Layout';
import TodoDetail from '../components/todo-detail/TodoDetail';

import { getTodo,getTodos } from '../api';

function Home(props) {

  const { todo,id } = props;
  console.log(todo)
  return (
    <Layout title =  {todo.title}>
     <TodoDetail
       todo={todo}
     />

   </Layout>
  );
}
Home.getInitialProps = async ({ query }) => {
  const{id} = query;
  const todo = await getTodo(id);
  console.log("loggi logg")

  return { id, todo };
}
export default Home

import React, { useState, useEffect } from 'react';

import Layout from '../components/layout/Layout';
import Todos from '../components/todos/Todos';
import Form from '../components/form/Form';
//********
import Data from '../components/data/Data';
//********
import { getTodos, updateTodo} from '../api';

function Home(props) {
  const { initialData } = props;

  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);

  async function onFetchNewData(other) {
     setLoading(true);
     const newData = await getTodos(other);
     setData(newData);
     setLoading(false);
   }
   console.log(initialData, setData);

  return (

    <div>
    <Layout title="Verkefni">
     <Todos
       loading={loading}
       data={data}
       onFetchNewData={onFetchNewData}
     />

   </Layout>
    </div>
  );
}

Home.getInitialProps = async ({ req }) => {
  const data = await getTodos();

  return { initialData: data };
}

export default Home

import React from 'react';
import { useQuery } from '@apollo/client';

import TodoList from "../components/Todos";

import { GET_ME } from '../utils/queries';

const Home = () => {
  const { loading, todoData } = useQuery(GET_ME);

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <TodoList
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;

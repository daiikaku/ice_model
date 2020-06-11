import React from 'react';
import { store as pageStore } from 'ice/Home';

const Home = () => {
  const [taskList] = pageStore.useModel('department');

  return (
    <div>
      <h1>Home:</h1>
      {
        taskList.map((ii, i) => {
          return (
            <div>{ii.title}</div>
          )
        })
      }
    </div>
  )
};

export default Home;

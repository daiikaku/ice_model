import React from 'react';
import { store as pageStore } from 'ice/Home';

const Page1 = () => {
  const [taskList] = pageStore.useModel('department');

  return (
    <div>
      <h1>Page1:</h1>
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

export default Page1;

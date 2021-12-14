import React, { useEffect } from 'react';

import { Button } from '@material-ui/core';
import ClearIcon from '@mui/icons-material/Clear';

function Todo({ todoList, setTodoList }) {

  const mapTodoList = () =>

    todoList.map((todoMsg, index) => (
      <div
        key={index}
        className="task-container"
      >
        <div
          className="task-close-btn-cont"

        >
          <ClearIcon
          className="task-close-btn"
          onClick={() => {deleteTodoTask(index)}}
          />
        </div>
        <div className="task-cont-msg">
        {todoMsg}
        </div>
      </div>
    ));

  const deleteTodoTask = (indexNum) => {
    const todoSplice = () => {todoList.splice(indexNum, 1)};
    todoSplice();
    setTodoList([...todoList]);
    console.log('indexNum= ' + indexNum)
    console.log('todo list now equals= ' + todoList);
  };
  useEffect(() => {
    mapTodoList();
  }, [todoList]);

  console.log(todoList);

  return (
    <div className="activity-column">
      <div className="column-header">
        To Do
      </div>
      <div>
      {mapTodoList()}
      </div>
    </div>
  );
}

export default Todo;
